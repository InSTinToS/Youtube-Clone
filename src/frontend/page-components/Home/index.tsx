import Head from 'next/head'
import { useRouter } from 'next/dist/client/router'

import { Button, Container } from './styles'
import Content from './Content'

import useWindowDimensions from 'frontend/hooks/useWindowDimensions'

import Sidebar from 'frontend/components/Sidebar'
import Navbar from 'frontend/components/Navbar'
import CategoriesBar from 'frontend/components/CategoriesBar'

import { useEffect, useState } from 'react'

const Home = () => {
  const router = useRouter()
  const { innerWidth } = useWindowDimensions()
  const [sidebarOpen, setSidebarOpen] = useState(true)

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

      <Container>
        <Navbar onHamburgerClick={handleSidebar} />

        <CategoriesBar sidebarOpen={sidebarOpen} />

        <Sidebar open={sidebarOpen} />

        <Content sidebarOpen={sidebarOpen} />

        <Button type='button' onClick={() => router.push('/forms')}>
          Forms
        </Button>
      </Container>
    </>
  )
}

export default Home
