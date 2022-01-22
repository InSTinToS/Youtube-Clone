import Head from 'next/head'

import Style from './style'
import Content from './Content'

import Sidebar from 'frontend/components/Sidebar'
import Navbar from 'frontend/components/Navbar'
import CategoriesBar from 'frontend/components/CategoriesBar'

const Home = () => {
  return (
    <>
      <Head>
        <title>Home page</title>
      </Head>

      <Style>
        <Navbar />
        <CategoriesBar />
        <Sidebar />
        <Content />
      </Style>
    </>
  )
}

export default Home
