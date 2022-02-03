import {
  Categories,
  Category,
  Container,
  LeftArrow,
  RightArrow,
  Shadow
} from './styles'

import getCategoriesThunk from 'frontend/store/categories/extraReducers/getCategories'

import { Arrow } from 'frontend/assets/icons'

import { RootStore } from 'frontend/types/redux'

import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const CategoriesBar = () => {
  const {
    sidebarStore: { open },
    categoriesStore: { categories }
  } = useSelector<RootStore, RootStore>(store => store)

  const [x, setX] = useState(0)
  const [maxSize, setMaxSize] = useState(0)
  const [selected, setSelected] = useState('Tudo')

  const ulRef = useRef<HTMLUListElement>(null)
  const categoriesRef = useRef<HTMLDivElement>(null)

  const dispatch = useDispatch()

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
    <Container sidebarOpen={open}>
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
          {categories?.map(({ _id, label }) => (
            <Category
              key={_id as unknown as number}
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
