import User, {
  REQ_POST_User,
  REQ_PUT_User,
  RES_POST_User,
  RES_PUT_User
} from 'types/routes/user'

import { post, put } from 'frontend/services'

import getUserThunk from 'frontend/store/user/extraReducers/getUser'
import { UserStore } from 'frontend/store/user'

import Text from 'frontend/components/Form/Text'
import Button, { ButtonVariants } from 'frontend/components/Form/Button'
import Presence from 'frontend/components/Presence'

import { RootStore } from 'frontend/types/redux'

import { Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const UserCard = () => {
  const userStore = useSelector<RootStore, UserStore>(
    ({ userStore }) => userStore
  )

  const [user, setUser] = useState<Partial<User>>({ avatar: '' })
  const [animateVariant, setAnimateVariant] =
    useState<ButtonVariants>('default')

  const dispatch = useDispatch()

  const onUserSubmit = async ({ avatar }: any) => {
    let response: RES_PUT_User | RES_POST_User

    setAnimateVariant('default')

    if (user?._id) {
      const { data } = await put<RES_PUT_User, REQ_PUT_User>('/user', {
        user: { avatar, _id: user._id }
      })

      response = data
    } else {
      const { data } = await post<RES_POST_User, REQ_POST_User>('/user', {
        user: { avatar }
      })

      response = data
    }

    if (response.success) {
      setUser(response.user)
      setAnimateVariant('success')
    } else setAnimateVariant('failed')
  }

  useEffect(() => {
    setUser(userStore.user)
  }, [userStore])

  useEffect(() => {
    dispatch(getUserThunk({ callOnlyIfNotExists: true }))
  }, [])

  return (
    <section>
      <h2>User</h2>

      <Presence condition={!userStore.loading}>
        <Formik onSubmit={onUserSubmit} initialValues={{ avatar: '' }}>
          <Form>
            <Text name='avatar' label='Avatar URL' placeholder={user?.avatar} />

            <Button animateVariant={animateVariant}>Atualizar</Button>
          </Form>
        </Formik>
      </Presence>
    </section>
  )
}

export default UserCard
