import { Category, Product } from '@prisma/client'
import { Banner } from 'components/Banner'
import { Filter } from 'components/Filter'
import { ProductList } from 'components/ProductList'
import { Page } from 'layouts/Page'
import prisma from 'lib/prisma'

interface HomeProps {
  products: (Product & { category: Category })[]
}

export default function Home({ products }: HomeProps) {
  return (
    <>
      <Page title="Games">
        <Banner />
        <Filter />
        <ProductList data={products} />
      </Page>
    </>
  )
}

export async function getServerSideProps() {
  const products = await prisma.product.findMany({
    include: { category: true },
  })
  return {
    props: { products },
  }
}
