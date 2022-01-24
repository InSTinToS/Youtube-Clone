import Head from 'next/head'

import Style from './style'
import Content from './Content'

import useWindowDimensions from 'frontend/hooks/useWindowDimensions'

import Sidebar from 'frontend/components/Sidebar'
import Navbar from 'frontend/components/Navbar'
import CategoriesBar from 'frontend/components/CategoriesBar'

import { useEffect, useState } from 'react'

const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const { innerWidth } = useWindowDimensions()

  const handleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  useEffect(() => {
    innerWidth < 800 && setSidebarOpen(false)
  }, [innerWidth])

  return (
    <>
      <Head>
        <title>Home page</title>
      </Head>

      <Style>
        <Navbar onHamburgerClick={handleSidebar} />

        <CategoriesBar sidebarOpen={sidebarOpen} />

        <Sidebar open={sidebarOpen} />

        <Content sidebarOpen={sidebarOpen} />
      </Style>
    </>
  )
}

export default Home
