import User, {
  REQ_POST_User,
  REQ_PUT_User,
  RES_GET_User,
  RES_POST_User,
  RES_PUT_User
} from 'types/routes/user'

import { get, post, put } from 'frontend/services'

import Text from 'frontend/components/Form/Text'
import Button, { ButtonVariants } from 'frontend/components/Form/Button'

import { Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'

const UserCard = () => {
  const [user, setUser] = useState<Partial<User>>({ avatar: '' })
  const [animateVariant, setAnimateVariant] =
    useState<ButtonVariants>('default')

  const onUserSubmit = async ({ avatar }: any) => {
    let response: RES_PUT_User | RES_POST_User

    setAnimateVariant('default')

    if (user?._id) {
      const { data } = await put<RES_PUT_User, REQ_PUT_User>('/user', {
        user: {
          avatar,
          _id: user._id
        }
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

  const getData = async () => {
    const { data } = await get<RES_GET_User>('/user')
    if (data.success) setUser(data.user)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <section>
      <h2>User</h2>

      <Formik onSubmit={onUserSubmit} initialValues={{ avatar: '' }}>
        <Form>
          <Text name='avatar' label='Avatar URL' placeholder={user?.avatar} />

          <Button animateVariant={animateVariant}>Atualizar</Button>
        </Form>
      </Formik>
    </section>
  )
}

export default UserCard
