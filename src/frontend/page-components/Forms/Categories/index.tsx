import getFormData from 'frontend/utils/getFormValues'
import getNewValues from 'frontend/utils/getNewValues'

import getCategoriesThunk from 'frontend/store/categories/extra-reducers/getCategories'
import Category, { CategoryStore } from 'frontend/store/categories'

import { useAppDispatch, useAppSelector } from 'frontend/hooks/redux'

import Button, { ButtonVariants } from 'frontend/components/Form/Button'
import ArrayText from 'frontend/components/Form/ArrayText'
import Presence from 'frontend/components/Presence'

import { gql, useMutation } from '@apollo/client'
import { Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'

type CategoriesMutation = Pick<GQL.IMutation, 'updateCategories'> &
  Pick<GQL.IMutation, 'addCategories'> &
  Pick<GQL.IMutation, 'deleteCategories'>

const categoriesMutationGQL = gql`
  mutation MutateCategories(
    $addCategoriesParams: AddCategoriesParams
    $updateCategoriesParams: UpdateCategoriesParams
    $deleteCategoriesParams: DeleteCategoriesParams
  ) {
    addCategories(params: $addCategoriesParams) {
      addedData {
        _id
        label
      }
    }
    updateCategories(params: $updateCategoriesParams) {
      updatedData {
        _id
        label
      }
    }
    deleteCategories(params: $deleteCategoriesParams) {
      deletedData {
        _id
        label
      }
    }
  }
`

const arrayTextFields = [{ name: 'label', label: 'Category' }]

const Categories = () => {
  const categoriesStore = useAppSelector<CategoryStore>(
    ({ categoriesStore }) => categoriesStore
  )

  const [animateButton, setAnimateButton] = useState<ButtonVariants>('default')

  const [categoriesMutation] = useMutation<CategoriesMutation>(
    categoriesMutationGQL
  )

  const dispatch = useAppDispatch()

  const onCategorySubmit = async (values: { categories: GQL.ICategory[] }) => {
    setAnimateButton('default')

    const {
      dataToCreate: categoriesToAdd,
      dataToUpdate: categoriesToUpdate,
      idsToDelete
    } = getFormData<GQL.ICategory>(
      categoriesStore.categories,
      values.categories
    )

    try {
      const { data } = await categoriesMutation({
        variables: {
          deleteCategoriesParams: { idsToDelete },
          addCategoriesParams: { categoriesToAdd },
          updateCategoriesParams: { categoriesToUpdate }
        }
      })

      const addedValues = data.addCategories?.addedData
      const updatedValues = data.updateCategories?.updatedData
      const deletedValues = data.deleteCategories?.deletedData

      const newCategories = getNewValues<GQL.ICategory>(
        categoriesStore.categories,
        { addedValues, deletedValues, updatedValues }
      )

      dispatch(Category.actions.update({ categories: newCategories }))
      setAnimateButton('success')
    } catch (error) {
      console.log(error)
      setAnimateButton('failed')
    }
  }

  useEffect(() => {
    dispatch(getCategoriesThunk({ callOnlyIfNotExists: true }))
  }, [dispatch])

  return (
    <section>
      <h2>Categories</h2>

      <Presence condition={!categoriesStore.loading}>
        <Formik
          onSubmit={onCategorySubmit}
          initialValues={{ categories: categoriesStore.categories }}
        >
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

export default Categories
