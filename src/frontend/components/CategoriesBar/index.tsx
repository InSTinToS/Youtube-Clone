import {
  Categories,
  Category,
  Container,
  LeftArrow,
  RightArrow,
  Shadow
} from './styles'

import getCategoriesThunk from 'frontend/store/categories/extraReducers/getCategories'
import { CategoryStore } from 'frontend/store/categories'

import { Arrow } from 'frontend/assets/icons'

import { RootStore } from 'frontend/types/redux'

import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

interface Props {
  sidebarOpen: boolean
}

const CategoriesBar = ({ sidebarOpen }: Props) => {
  const categoriesStore = useSelector<RootStore, CategoryStore>(
    ({ categoriesStore }) => categoriesStore
  )

  const ulRef = useRef<HTMLUListElement>(null)
  const categoriesRef = useRef<HTMLDivElement>(null)

  const [x, setX] = useState(0)
  const [maxSize, setMaxSize] = useState(0)
  const [selected, setSelected] = useState('Tudo')

  const dispatch = useDispatch()

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

  useEffect(() => {
    dispatch(getCategoriesThunk({}))
  }, [dispatch])

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
          {categoriesStore?.categories?.map(({ _id, label }) => (
            <Category
              key={Number(_id)}
              selected={selected === label}
              onClick={() => handleCategorySelect(label)}
            >
              <button type='button'>{label}</button>
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
