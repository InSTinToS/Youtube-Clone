import getFormData from 'frontend/utils/getFormValues'

import getCategoriesThunk from 'frontend/store/categories/extraReducers/getCategories'
import { CategoryStore } from 'frontend/store/categories'

import Button, { ButtonVariants } from 'frontend/components/Form/Button'
import ArrayText from 'frontend/components/Form/ArrayText'
import Presence from 'frontend/components/Presence'

import { RootStore } from 'frontend/types/redux'

import { gql, useMutation } from '@apollo/client'
import { Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const arrayTextFields = [{ name: 'label', label: 'Category' }]

const deleteCategoriesQuery = gql`
  mutation Mutation($categoriesToDelete: [CategoryToUpdate!]!) {
    deleteCategories(categoriesToDelete: $categoriesToDelete) {
      deletedCount
    }
  }
`

const updateCategoriesQuery = gql`
  mutation Mutation($updatedCategories: [CategoryToUpdate!]!) {
    updateCategories(updatedCategories: $updatedCategories) {
      _id
      label
    }
  }
`

const addCategoriesQuery = gql`
  mutation Mutation($newCategories: [CategoryToAdd!]!) {
    addCategories(newCategories: $newCategories) {
      _id
      label
    }
  }
`

const CategoryCard = () => {
  const categoriesStore = useSelector<RootStore, CategoryStore>(
    ({ categoriesStore }) => categoriesStore
  )

  const [categories, setCategories] = useState<GQL.ICategory[]>()
  const [animateButton, setAnimateButton] = useState<ButtonVariants>('default')

  const [updateCategories] = useMutation<
    Pick<GQL.IMutation, 'updateCategories'>
  >(updateCategoriesQuery)

  const [addCategories] =
    useMutation<Pick<GQL.IMutation, 'addCategories'>>(addCategoriesQuery)

  const [deleteCategories] = useMutation<
    Pick<GQL.IMutation, 'deleteCategories'>
  >(deleteCategoriesQuery)

  const dispatch = useDispatch()

  const onCategorySubmit = async (values: { categories: GQL.ICategory[] }) => {
    setCategories(undefined)
    setAnimateButton('default')

    let resSuccess: boolean
    const { dataToCreate, dataToUpdate, dataToRemove } =
      getFormData<GQL.ICategory>(
        categoriesStore?.categories,
        values?.categories
      )

    if (dataToRemove?.length > 0) {
      const variables: GQL.IDeleteCategoriesOnMutationArguments = {
        categoriesToDelete: dataToRemove
      }

      const {
        data: {
          deleteCategories: { deletedCount }
        }
      } = await deleteCategories({ variables })

      resSuccess = !!deletedCount
    }

    if (dataToCreate?.length > 0) {
      const variables: GQL.IAddCategoriesOnMutationArguments = {
        newCategories: dataToCreate
      }

      const {
        data: { addCategories: addedCategories }
      } = await addCategories({ variables })

      resSuccess = !!addedCategories
    }

    if (dataToUpdate?.length > 0) {
      const variables: GQL.IUpdateCategoriesOnMutationArguments = {
        updatedCategories: dataToUpdate
      }

      const {
        data: { updateCategories: updatedCategories }
      } = await updateCategories({ variables })

      resSuccess = !!updatedCategories
    }

    setAnimateButton(resSuccess ? 'success' : 'failed')
    dispatch(getCategoriesThunk({ callOnlyIfNotExists: false }))
  }

  useEffect(() => {
    setCategories(categoriesStore.categories)
  }, [categoriesStore.categories])

  useEffect(() => {
    dispatch(getCategoriesThunk({ callOnlyIfNotExists: false }))
  }, [dispatch])

  return (
    <section>
      <h2>Categories</h2>

      <Presence condition={!!categories}>
        <Formik onSubmit={onCategorySubmit} initialValues={{ categories }}>
          {({ values }) => (
            <Form>
              <ArrayText
                values={values}
                name='categories'
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

export default CategoryCard
