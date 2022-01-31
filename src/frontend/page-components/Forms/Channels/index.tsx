import Channel, {
  REQ_DELETE_Channel,
  REQ_POST_Channel,
  REQ_PUT_Channel,
  RES_DELETE_Channel,
  RES_GET_Channel,
  RES_POST_Channel,
  RES_PUT_Channel
} from 'types/routes/channel'

import { get, post, put, remove } from 'frontend/services'

import getChannelsThunk from 'frontend/store/channels/extraReducers/getChannels'
import { ChannelStore } from 'frontend/store/channels'

import Button, { ButtonVariants } from 'frontend/components/Form/Button'
import ArrayText, { Ref as ArrayTextRef } from 'frontend/components/Form/ArrayText'
import Presence from 'frontend/components/Presence'

import { RootStore } from 'frontend/types/redux'

import { Form, Formik } from 'formik'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const arrayTextFields = [
  { name: 'logo', label: 'Logo URL' },
  { name: 'name', label: 'Nome' }
]

const ChannelCard = () => {
  const channelsStore = useSelector<RootStore, ChannelStore>(
    ({ channelsStore }) => channelsStore
  )

  const [animateButton, setAnimateButton] = useState<ButtonVariants>('default')
  const [channels, setChannels] = useState<Channel[]>()

  const arrayTextRef = useRef<ArrayTextRef>(null)

  const dispatch = useDispatch()

  const onChannelSubmit = async (values: { channels: Channel[] }) => {
    setChannels(undefined)
    setAnimateButton('default')

    let resSuccess
    const idsToRemove = arrayTextRef.current.removedIds
    const valuesToUpdate = arrayTextRef.current.updatedValues
    const valuesToPost = values.channels.filter(channel => !channel._id)

    if (idsToRemove?.length > 0) {
      const { data } = await remove<RES_DELETE_Channel, REQ_DELETE_Channel>(
        '/channel',
        { data: { channelsIds: idsToRemove } }
      )

      resSuccess = data.success
    }

    if (valuesToPost?.length > 0) {
      const { data } = await post<RES_POST_Channel, REQ_POST_Channel>(
        '/channel',
        { channels: valuesToPost }
      )

      resSuccess = resSuccess === false ? false : data.success
    }

    if (valuesToUpdate?.length > 0) {
      const { data } = await put<RES_PUT_Channel, REQ_PUT_Channel>('/channel', {
        channels: valuesToUpdate
      })

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

      <Formik onSubmit={onChannelSubmit} initialValues={{ channels }}>
        {({ values }) => (
          <Form>
            <Presence condition={!!channels}>
              <ArrayText
                name='channels'
                values={values}
                ref={arrayTextRef}
                fields={arrayTextFields}
              />
            </Presence>

            <Button animateVariant={animateButton}>Atualizar</Button>
          </Form>
        )}
      </Formik>
    </section>
  )
}

export default ChannelCard
