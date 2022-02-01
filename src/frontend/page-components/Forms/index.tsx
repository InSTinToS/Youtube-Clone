import { useRouter } from 'next/dist/client/router'

import { Container } from './styles'
import User from './User'
import Videos from './Videos'
import Channels from './Channels'
import Categories from './Categories'

import Button from 'frontend/components/Form/Button'

import React from 'react'

const Forms = () => {
  const router = useRouter()

  return (
    <Container>
      <Button type='button' onClick={() => router.push('/')}>
        Home
      </Button>

      <User />

      <Categories />

      <Channels />

      <Videos />

      <footer>
        <div>
          Icons made by{' '}
          <a href='https://www.flaticon.com/authors/dmitri13' title='dmitri13'>
            dmitri13{' '}
          </a>
          from{' '}
          <a href='https://www.flaticon.com/' title='Flaticon'>
            www.flaticon.com
          </a>
        </div>
      </footer>
    </Container>
  )
}

export default Forms
