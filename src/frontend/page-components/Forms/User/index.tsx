import getUserThunk from 'frontend/store/user/extraReducers/getUser'
import { UserStore } from 'frontend/store/user'

import Text from 'frontend/components/Form/Text'
import Button, { ButtonVariants } from 'frontend/components/Form/Button'
import Presence from 'frontend/components/Presence'

import { RootStore } from 'frontend/types/redux'

import { gql, useMutation } from '@apollo/client'
import { Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const updateUserMutation = gql`
  mutation UpdateUser($user: UserToUpdate!) {
    updateUser(user: $user) {
      _id
      avatar
    }
  }
`

const addUserMutation = gql`
  mutation UpdateUser($user: UserToAdd!) {
    addUser(user: $user) {
      _id
      avatar
    }
  }
`

const UserCard = () => {
  const userStore = useSelector<RootStore, UserStore>(
    ({ userStore }) => userStore
  )

  const [user, setUser] = useState<Partial<GQL.IUser>>({ avatar: '' })
  const [animateVariant, setAnimateVariant] =
    useState<ButtonVariants>('default')

  const [updateUser] =
    useMutation<Pick<GQL.IMutation, 'updateUser'>>(updateUserMutation)
  const [addUser] = useMutation<Pick<GQL.IMutation, 'addUser'>>(addUserMutation)

  const dispatch = useDispatch()

  const onUserSubmit = async ({ avatar }: Partial<GQL.IUser>) => {
    setAnimateVariant('default')

    let updatedUser: GQL.IUser

    if (user?._id) {
      const variables: GQL.IUpdateUserOnMutationArguments = {
        user: { _id: user._id, avatar }
      }

      const response = await updateUser({ variables })

      updatedUser = response.data.updateUser
    } else {
      const variables: GQL.IAddUserOnMutationArguments = { user: { avatar } }

      const response = await addUser({ variables })

      updatedUser = response.data.addUser
    }

    if (updatedUser) {
      setUser(updatedUser)
      setAnimateVariant('success')
    } else setAnimateVariant('failed')
  }

  useEffect(() => {
    setUser(userStore.user)
  }, [userStore])

  useEffect(() => {
    dispatch(getUserThunk({}))
  }, [dispatch])

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
