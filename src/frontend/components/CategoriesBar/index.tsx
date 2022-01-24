import { Category, Container } from './styles'

import { Arrow } from 'frontend/assets/icons'

import React from 'react'

const categories = [
  'Tudo',
  'Jogos',
  'Podcast',
  'História',
  'Música',
  'JavaScript',
  'Loops',
  'Ao vivo',
  'Novidades para você'
]

interface Props {
  sidebarOpen: boolean
}

const CategoriesBar = ({ sidebarOpen }: Props) => {
  return (
    <Container sidebarOpen={sidebarOpen}>
      <div id='left'>
        <button type='button'></button>
        <Arrow />
      </div>

      {categories.map(category => (
        <Category key={category}>
          <button type='button'>{category}</button>
        </Category>
      ))}

      <div id='right'>
        <Arrow />
        <button type='button'></button>
      </div>
    </Container>
  )
}

export default CategoriesBar
