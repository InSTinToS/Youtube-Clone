import { Container } from './styles'
import User from './User'
import Videos from './Videos'
import Channels from './Channels'
import Categories from './Categories'

import React from 'react'

const initialValues = {
  user: {
    avatar:
      'https://yt2.ggpht.com/52bJiKEiq5DSQ4ZRg41TCFB4FAkFL0q2GKCqFlsuP4ssKQhcYnsGmEow7YWWoj5cf1VI2HqsJHY=s88-c-k-c0x00ffffff-no-rj-mo'
  },
  channels: [],
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

const Forms = () => {
  return (
    <Container>
      <User />

      <Channels />

      <Categories />

      <Videos />

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

export default Forms
