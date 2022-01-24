import {
  Categories,
  Category,
  Container,
  LeftArrow,
  RightArrow,
  Shadow
} from './styles'

import { Arrow } from 'frontend/assets/icons'

import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'

const categories = [
  'Tudo',
  'Jogos',
  'Podcast',
  'História',
  'Música',
  'JavaScript',
  'Loops',
  'Ao vivo',
  'Comédia',
  'Marvel',
  'DC',
  'League of Legends',
  'House Music',
  'Slap House',
  'Enviados recentemente',
  'Música brasileira',
  'Universos'
]

interface Props {
  sidebarOpen: boolean
}

const CategoriesBar = ({ sidebarOpen }: Props) => {
  const ulRef = useRef<HTMLUListElement>(null)
  const categoriesRef = useRef<HTMLDivElement>(null)

  const [x, setX] = useState(0)
  const [maxSize, setMaxSize] = useState(0)
  const [selected, setSelected] = useState('Tudo')

  const handleCategorySelect = (category: string) => {
    selected !== category && setSelected(category)
  }

  const handleLeftArrow = () => {
    setX(x => x + 200)
  }

  const handleRightArrow = () => {
    setX(x => x - 200)
  }

  const handleDragEnd = (_, { offset }) => {
    setX(x => x + offset.x)
  }

  useEffect(() => {
    setMaxSize(-ulRef.current?.clientWidth + categoriesRef.current?.clientWidth)
  }, [ulRef.current?.clientWidth, categoriesRef.current?.clientWidth])

  useEffect(() => {
    if (x < maxSize) setX(maxSize)
    if (x > 0) setX(0)
  }, [x, maxSize])

  return (
    <Container sidebarOpen={sidebarOpen}>
      <LeftArrow visible={x !== 0} onClick={handleLeftArrow}>
        <Arrow />
        <Shadow />
      </LeftArrow>

      <Categories ref={categoriesRef}>
        <motion.ul
          drag='x'
          ref={ulRef}
          animate={{ x }}
          dragElastic={0.05}
          onDragEnd={handleDragEnd}
          dragConstraints={categoriesRef}
        >
          {categories.map(category => (
            <Category
              key={category}
              selected={selected === category}
              onClick={() => handleCategorySelect(category)}
            >
              <button type='button'>{category}</button>
            </Category>
          ))}
        </motion.ul>
      </Categories>

      <RightArrow
        id='right'
        type='button'
        visible={x > maxSize}
        onClick={handleRightArrow}
      >
        <Arrow />
        <Shadow />
      </RightArrow>
    </Container>
  )
}

export default CategoriesBar
