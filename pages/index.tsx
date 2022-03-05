import { Banner } from 'components/Banner'
import { Page } from 'layouts/Page'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <Page title="Games">
        <Banner />
      </Page>
    </>
  )
}

export default Home
