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
import { categories } from 'frontend/fakeData/categories'
import React, { useEffect, useRef, useState } from 'react'

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

  const handleLeftArrow = () => setX(x => x + 200)

  const handleRightArrow = () => setX(x => x - 200)

  const handleDragEnd = (_, { offset }) => setX(x => x + offset.x)

  useEffect(() => {
    const ul = ulRef.current?.clientWidth
    const categories = categoriesRef.current?.clientWidth

    if (categories > ul) setMaxSize(0)
    else setMaxSize(-ul + categories)
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
          dragElastic={0.05}
          onDragEnd={handleDragEnd}
          dragConstraints={categoriesRef}
          animate={{ x, transition: { type: 'tween', duration: 0.2 } }}
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

      <RightArrow visible={x > maxSize} onClick={handleRightArrow}>
        <Arrow />
        <Shadow />
      </RightArrow>
    </Container>
  )
}

export default CategoriesBar
