import Channel, {
  REQ_POST_Channel,
  REQ_PUT_Channel,
  RES_GET_Channel,
  RES_POST_Channel,
  RES_PUT_Channel
} from 'types/routes/channel'

import { get, post, put, remove } from 'frontend/services'

import Button from 'frontend/components/Form/Button'
import ArrayText, { Ref as ArrayTextRef } from 'frontend/components/Form/ArrayText'
import Presence from 'frontend/components/Presence'

import { Form, Formik } from 'formik'
import { ObjectId } from 'mongodb'
import React, { useCallback, useEffect, useRef, useState } from 'react'

const arrayTextFields = [
  { name: 'logo', label: 'Logo URL' },
  { name: 'name', label: 'Nome' }
]

const ChannelCard = () => {
  const [channels, setChannels] = useState<Channel[]>()

  const arrayTextRef = useRef<ArrayTextRef>(null)

  const onChannelSubmit = async (values: any) => {
    const valuesToPost = values.channels.filter(channel => !channel._id)
    const valuesToUpdate = arrayTextRef.current.updatedIds
    console.log(valuesToUpdate)

    if (valuesToPost.length > 0) {
      const { data } = await post<RES_POST_Channel, REQ_POST_Channel>(
        '/channel',
        { channels: valuesToPost }
      )

      setChannels(prev =>
        prev ? [...prev, ...data.channels] : [...data.channels]
      )
    }

    if (valuesToUpdate.length > 0) {
      const { data } = await put<RES_PUT_Channel, REQ_PUT_Channel>('/channel', {
        channels: valuesToUpdate
      })

      setChannels(prev =>
        prev ? [...prev, ...data.channels] : [...data.channels]
      )
    }
  }

  const removeChannels = async () => {
    const idsToRemove = arrayTextRef.current.removedIds

    idsToRemove &&
      (await remove('/channel', { data: { channelsIds: idsToRemove } }))
  }

  const getData = useCallback(async () => {
    const { data } = await get<RES_GET_Channel>('/channel')
    setChannels(data.channels)
  }, [])

  useEffect(() => {
    getData()
  }, [])

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
                ref={arrayTextRef}
                fields={arrayTextFields}
              />

              <Button onClick={removeChannels}>Atualizar</Button>
            </Form>
          )}
        </Formik>
      </Presence>
    </section>
  )
}

export default ChannelCard
