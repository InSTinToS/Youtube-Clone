import Head from 'next/head'
import { useRouter } from 'next/dist/client/router'
import dynamic from 'next/dynamic'

import { Button, Container } from './styles'
import Content from './Content'

import SidebarStore from 'frontend/store/sidebar'

import Navbar from 'frontend/components/Navbar'
import CategoriesBar from 'frontend/components/CategoriesBar'

import { useDispatch } from 'react-redux'

const Sidebar = dynamic(() => import('frontend/components/Sidebar'), {
  ssr: false
})

const Home = () => {
  const router = useRouter()
  const dispatch = useDispatch()

  const onHamburgerClick = () => {
    dispatch(SidebarStore.actions.toggleSidebar({}))
  }

  return (
    <>
      <Head>
        <title>Home page</title>
      </Head>

      <Container>
        <Navbar onHamburgerClick={onHamburgerClick} />

        <CategoriesBar />

        <Sidebar />

        <Content />

        <Button type='button' onClick={() => router.push('/forms')}>
          Forms
        </Button>
      </Container>
    </>
  )
}

export default Home
