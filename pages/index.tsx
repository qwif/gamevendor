import { Banner } from 'components/Banner'
import { Filter } from 'components/Filter'
import { Page } from 'layouts/Page'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <Page title="Games">
        <Banner />
        <Filter />
      </Page>
    </>
  )
}

export default Home
