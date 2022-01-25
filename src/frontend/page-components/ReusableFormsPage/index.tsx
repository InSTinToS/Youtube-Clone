import { Container } from './styles'
import Text from './components/Text'
import ArrayText from './components/ArrayText'

import User, { REQ_POST_User, RES_POST_User } from 'types/routes/user'

import api, { post, put } from 'frontend/services'

import { Form, Formik, FormikHelpers } from 'formik'
import React from 'react'

const initialValues = {
  user: {
    avatar:
      'https://yt2.ggpht.com/52bJiKEiq5DSQ4ZRg41TCFB4FAkFL0q2GKCqFlsuP4ssKQhcYnsGmEow7YWWoj5cf1VI2HqsJHY=s88-c-k-c0x00ffffff-no-rj-mo'
  },
  channels: [
    {
      logo: 'https://yt3.ggpht.com/ytc/AKedOLSS3jsxRa4MsKD1ORDR_ETb0KFVQcnbZiYXgJhr8A=s48-c-k-c0x00ffffff-no-rj',
      name: 'Future House Cloud'
    }
  ],
  videos: [
    {
      views: 2648,
      createdAt: '2022-01-23T19:00:52Z',
      title: 'MEYSTA & 2Shy - Faded',
      channel: 'Future House Cloud',
      thumbnail:
        'https://i.ytimg.com/vi/HniXoz3M4mM/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLB1D8p-FIEAAHQz6fAZQ8ZW3wNOKQ'
    }
  ],
  categories: ['Tudo', 'SlapHouse']
}

const ReusableFormsPage = () => {
  const onFormSubmit = (sent: any, received) => {}

  const onUserSubmit = async (values: User, actions: FormikHelpers<User>) => {
    const res = await put<REQ_POST_User, RES_POST_User>('/user', {
      user: values
    })

    if (!res.data.success) throw new console.error(res.data.message)
  }

  return (
    <Container>
      <section>
        <h2>User</h2>

        <Formik initialValues={initialValues.user} onSubmit={onUserSubmit}>
          <Form>
            <Text name='avatar' label='Avatar URL' />

            <button type='submit'>Atualizar</button>
          </Form>
        </Formik>
      </section>

      <section>
        <h2>Channels</h2>

        <Formik
          initialValues={{ channels: initialValues.channels }}
          onSubmit={onFormSubmit}
        >
          {({ values }) => (
            <Form>
              <ArrayText
                values={values}
                name='channels'
                fields={[
                  { name: 'logo', label: 'Logo URL' },
                  { name: 'name', label: 'Nome' }
                ]}
              />

              <button type='submit'>Atualizar</button>
            </Form>
          )}
        </Formik>
      </section>

      <section>
        <h2>Videos</h2>

        <Formik
          initialValues={{ videos: initialValues.videos }}
          onSubmit={onFormSubmit}
        >
          {({ values }) => (
            <Form>
              <ArrayText
                values={values}
                name='videos'
                fields={[
                  { name: 'views', label: 'Views' },
                  { name: 'createdAt', label: 'CreatedAt' },
                  { name: 'title', label: 'Title' },
                  { name: 'thumbnail', label: 'Thumbnail' },
                  { name: 'channel', label: 'Channel' }
                ]}
              />

              <button type='submit'>Atualizar</button>
            </Form>
          )}
        </Formik>
      </section>

      <section>
        <h2>Categories</h2>

        <Formik
          onSubmit={onFormSubmit}
          initialValues={{ categories: initialValues.categories }}
        >
          {({ values }) => (
            <Form>
              <ArrayText
                values={values}
                name='categories'
                fields={[{ name: 'categories', label: 'Category' }]}
              />

              <button type='submit'>Atualizar</button>
            </Form>
          )}
        </Formik>
      </section>

      <footer>
        <div>
          {' '}
          Icons made by{' '}
          <a href='https://www.flaticon.com/authors/dmitri13' title='dmitri13'>
            {' '}
            dmitri13{' '}
          </a>{' '}
          from{' '}
          <a href='https://www.flaticon.com/' title='Flaticon'>
            www.flaticon.com'
          </a>
        </div>
      </footer>
    </Container>
  )
}

export default ReusableFormsPage
