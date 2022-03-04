import { Header } from 'components/Header'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>gameVendor – Games</title>
      </Head>
      <Header />
    </>
  )
}

export default Home
