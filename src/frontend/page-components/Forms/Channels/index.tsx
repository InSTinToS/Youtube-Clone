import Channel, {
  REQ_DELETE_Channel,
  REQ_POST_Channel,
  REQ_PUT_Channel,
  RES_DELETE_Channel,
  RES_POST_Channel,
  RES_PUT_Channel
} from 'types/routes/channel'

import getFormData from 'frontend/utils/getFormValues'

import { post, put, remove } from 'frontend/services'

import getChannelsThunk from 'frontend/store/channels/extra-reducers/getChannels'
import { ChannelStore } from 'frontend/store/channels'

import Button, { ButtonVariants } from 'frontend/components/Form/Button'
import Presence from 'frontend/components/Presence'
import ArrayText from 'frontend/components/Form/ArrayText'

import { RootStore } from 'frontend/types/redux'

import { Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const arrayTextFields = [
  { name: 'logo', label: 'Logo URL' },
  { name: 'name', label: 'Nome' }
]

const ChannelCard = () => {
  const channelsStore = useSelector<RootStore, ChannelStore>(
    ({ channelsStore }) => channelsStore
  )

  const [channels, setChannels] = useState<Channel[]>()
  const [animateButton, setAnimateButton] = useState<ButtonVariants>('default')

  const dispatch = useDispatch()

  const onChannelSubmit = async (values: { channels: Channel[] }) => {
    setChannels(undefined)
    setAnimateButton('default')

    let resSuccess: boolean

    const { dataToCreate, dataToUpdate, idsToDelete } = getFormData<Channel>(
      channelsStore?.channels,
      values?.channels
    )

    if (idsToDelete?.length > 0) {
      const { data } = await remove<RES_DELETE_Channel, REQ_DELETE_Channel>(
        '/channels',
        { data: { channelsIds: idsToDelete } }
      )

      resSuccess = data.success
    }

    if (dataToCreate?.length > 0) {
      const { data } = await post<RES_POST_Channel, REQ_POST_Channel>(
        '/channels',
        { channels: dataToCreate }
      )

      resSuccess = resSuccess === false ? false : data.success
    }

    if (dataToUpdate?.length > 0) {
      const { data } = await put<RES_PUT_Channel, REQ_PUT_Channel>(
        '/channels',
        { channels: dataToUpdate }
      )

      resSuccess = resSuccess === false ? false : data.success
    }

    setAnimateButton(resSuccess ? 'success' : 'failed')
    dispatch(getChannelsThunk({ callOnlyIfNotExists: false }))
  }

  useEffect(() => {
    setChannels(channelsStore.channels)
  }, [channelsStore.channels])

  useEffect(() => {
    dispatch(getChannelsThunk({ callOnlyIfNotExists: false }))
  }, [dispatch])

  return (
    <section>
      <h2>Channels</h2>

      <Presence condition={!!channels}>
        <Formik onSubmit={onChannelSubmit} initialValues={{ channels }}>
          {({ values }) => (
            <Form>
              <ArrayText
                name='channels'
                values={values}
                fields={arrayTextFields}
              />

              <Button animateVariant={animateButton}>Atualizar</Button>
            </Form>
          )}
        </Formik>
      </Presence>
    </section>
  )
}

export default ChannelCard
