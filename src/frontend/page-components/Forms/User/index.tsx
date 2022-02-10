import getUserThunk from 'frontend/store/user/extra-reducers/getUser'
import User, { UserStore } from 'frontend/store/user'

import { useAppDispatch, useAppSelector } from 'frontend/hooks/redux'

import Text from 'frontend/components/Form/Text'
import Button, { ButtonVariants } from 'frontend/components/Form/Button'
import Presence from 'frontend/components/Presence'

import { RootStore } from 'frontend/types/redux'

import { gql, useMutation } from '@apollo/client'
import { Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

type UsersMutation = Pick<GQL.IMutation, 'updateUsers'> &
  Pick<GQL.IMutation, 'addUsers'>

const usersMutationGQL = gql`
  mutation MutateUsers(
    $addParams: AddUsersParams
    $updateParams: UpdateUsersParams
  ) {
    addUsers(params: $addParams) {
      addedData {
        _id
        name
        avatar
      }
    }
    updateUsers(params: $updateParams) {
      updatedData {
        avatar
        name
        _id
      }
    }
  }
`

const UserCard = () => {
  const userStore = useAppSelector<UserStore>(({ userStore }) => userStore)

  const [animateVariant, setAnimateVariant] =
    useState<ButtonVariants>('default')

  const [usersMutation] = useMutation<UsersMutation>(usersMutationGQL)

  const dispatch = useAppDispatch()

  const onUserSubmit = async ({ avatar, name }: Partial<GQL.IUser>) => {
    setAnimateVariant('default')

    try {
      const { data } = await usersMutation({
        variables: {
          addParams: {
            usersToAdd: userStore.user ? undefined : [{ avatar, name }]
          },
          updateParams: {
            usersToUpdate: userStore.user
              ? [{ avatar, name, _id: userStore.user?._id }]
              : undefined
          }
        }
      })

      const addedUsers = data.addUsers?.addedData
      const updatedUsers = data.updateUsers?.updatedData

      const newUser = userStore.user
        ? updatedUsers[updatedUsers.length - 1]
        : addedUsers[addedUsers.length - 1]

      dispatch(User.actions.update({ user: newUser }))

      setAnimateVariant('success')
    } catch (error) {
      setAnimateVariant('failed')
    }
  }

  useEffect(() => {
    dispatch(getUserThunk({ callOnlyIfNotExists: true }))
  }, [dispatch])

  return (
    <section>
      <h2>User</h2>

      <Presence condition={!userStore.loading}>
        <Formik onSubmit={onUserSubmit} initialValues={userStore.user}>
          <Form>
            <Text name='name' label='Nome' placeholder={userStore.user?.name} />

            <Text
              name='avatar'
              label='Avatar URL'
              placeholder={userStore.user?.avatar}
            />

            <Button animateVariant={animateVariant}>Atualizar</Button>
          </Form>
        </Formik>
      </Presence>
    </section>
  )
}

export default UserCard
