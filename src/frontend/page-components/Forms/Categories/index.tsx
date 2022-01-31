import Category, {
  REQ_DELETE_Category,
  REQ_POST_Category,
  REQ_PUT_Category,
  RES_DELETE_Category,
  RES_POST_Category,
  RES_PUT_Category
} from 'types/routes/category'

import getFormData from 'frontend/utils/getFormValues'

import { post, put, remove } from 'frontend/services'

import getCategoriesThunk from 'frontend/store/categories/extraReducers/getCategories'
import { CategoryStore } from 'frontend/store/categories'

import Button, { ButtonVariants } from 'frontend/components/Form/Button'
import ArrayText from 'frontend/components/Form/ArrayText'
import Presence from 'frontend/components/Presence'

import { RootStore } from 'frontend/types/redux'

import { Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const arrayTextFields = [{ name: 'label', label: 'Category' }]

const CategoryCard = () => {
  const categoriesStore = useSelector<RootStore, CategoryStore>(
    ({ categoriesStore }) => categoriesStore
  )
  const [categories, setCategories] = useState<Category[]>()
  const [animateButton, setAnimateButton] = useState<ButtonVariants>('default')

  const dispatch = useDispatch()

  const onCategorySubmit = async (values: { categories: Category[] }) => {
    setCategories(undefined)
    setAnimateButton('default')

    let resSuccess: boolean
    const { dataToCreate, dataToUpdate, idsToRemove } = getFormData<Category>(
      categoriesStore?.categories,
      values?.categories
    )

    if (idsToRemove?.length > 0) {
      const { data } = await remove<RES_DELETE_Category, REQ_DELETE_Category>(
        '/categories',
        { data: { categoriesIds: idsToRemove } }
      )

      resSuccess = data.success
    }

    if (dataToCreate?.length > 0) {
      const { data } = await post<RES_POST_Category, REQ_POST_Category>(
        '/categories',
        { categories: dataToCreate }
      )

      resSuccess = resSuccess === false ? false : data.success
    }

    if (dataToUpdate?.length > 0) {
      const { data } = await put<RES_PUT_Category, REQ_PUT_Category>(
        '/categories',
        { categories: dataToUpdate }
      )

      resSuccess = resSuccess === false ? false : data.success
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
