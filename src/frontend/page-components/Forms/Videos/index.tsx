import Video, {
  REQ_DELETE_Video,
  REQ_POST_Video,
  REQ_PUT_Video,
  RES_DELETE_Video,
  RES_POST_Video,
  RES_PUT_Video
} from 'types/routes/video'

import getFormData from 'frontend/utils/getFormValues'

import { post, put, remove } from 'frontend/services'

import getVideosThunk from 'frontend/store/videos/extra-reducers/getVideos'
import { VideoStore } from 'frontend/store/videos'

import Button, { ButtonVariants } from 'frontend/components/Form/Button'
import Presence from 'frontend/components/Presence'
import ArrayText from 'frontend/components/Form/ArrayText'

import { RootStore } from 'frontend/types/redux'

import { Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const arrayTextFields = [
  { name: 'title', label: 'Title' },
  { name: 'thumbnail', label: 'Thumbnail' },
  { name: 'views', label: 'Views' },
  { name: 'channelName', label: 'Channel Name' }
]

const VideoCard = () => {
  const videosStore = useSelector<RootStore, VideoStore>(
    ({ videosStore }) => videosStore
  )

  const [videos, setVideos] = useState<Video[]>()
  const [animateButton, setAnimateButton] = useState<ButtonVariants>('default')

  const dispatch = useDispatch()

  const onVideoSubmit = async (values: { videos: Video[] }) => {
    setVideos(undefined)
    setAnimateButton('default')

    let resSuccess: boolean

    const { dataToCreate, dataToUpdate, idsToDelete } = getFormData<Video>(
      videosStore?.videos,
      values?.videos
    )

    if (idsToDelete?.length > 0) {
      const { data } = await remove<RES_DELETE_Video, REQ_DELETE_Video>(
        '/videos',
        { data: { videosIds: idsToDelete } }
      )

      resSuccess = data.success
    }

    if (dataToCreate?.length > 0) {
      const { data } = await post<RES_POST_Video, REQ_POST_Video>('/videos', {
        videos: dataToCreate
      })

      resSuccess = resSuccess === false ? false : data.success
    }

    if (dataToUpdate?.length > 0) {
      const { data } = await put<RES_PUT_Video, REQ_PUT_Video>('/videos', {
        videos: dataToUpdate
      })

      resSuccess = resSuccess === false ? false : data.success
    }

    setAnimateButton(resSuccess ? 'success' : 'failed')
    dispatch(getVideosThunk({ callOnlyIfNotExists: false }))
  }

  useEffect(() => {
    setVideos(videosStore.videos)
  }, [videosStore.videos])

  useEffect(() => {
    dispatch(getVideosThunk({ callOnlyIfNotExists: false }))
  }, [dispatch])

  return (
    <section>
      <h2>Videos</h2>

      <Presence condition={!!videos}>
        <Formik onSubmit={onVideoSubmit} initialValues={{ videos }}>
          {({ values }) => (
            <Form>
              <ArrayText
                name='videos'
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

export default VideoCard
