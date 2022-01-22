import Head from 'next/head'

import Style from './style'

import { UserActions, UserStore } from 'frontend/store/user'

import { RootStore } from 'frontend/types/redux'

import { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
  const dispatch = useDispatch()

  const { user } = useSelector<RootStore, UserStore>(({ user }) => user)

  useEffect(() => {
    dispatch(UserActions.update({ name: 'miguel' }))
  }, [])

  return (
    <>
      <Head>
        <title>Home page</title>
      </Head>

      <Style>
        <div>
          <h1 data-testid='hello'>Hello {user?.name}</h1>

          <h2>dotenv: {process.env.dotenv}</h2>

          <div>
            <img src='/luffy.png' />

            <img src='/watermelon.svg' />
          </div>

          <Button className='btn btn-lg btn-success p-4'>Teste</Button>
        </div>
      </Style>
    </>
  )
}

export default Home
