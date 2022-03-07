import { Banner } from 'components/Banner'
import { Filter } from 'components/Filter'
import { ProductList } from 'components/ProductList'
import { Page } from 'layouts/Page'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <Page title="Games">
        <Banner />
        <Filter />
        <ProductList />
      </Page>
    </>
  )
}

export default Home
