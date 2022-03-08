import { Product } from '@prisma/client'
import { AddProductCard } from 'components/AddProductCard'
import { ProductCard } from 'components/ProductCard'
import React from 'react'

interface ProductListProps {
  data: Product[]
}

export const ProductList = ({ data }: ProductListProps) => {
  const [products, setProducts] = React.useState<Product[]>(data)

  return (
    <div className="product-list">
      {products.length > 0 && (
        <>
          <AddProductCard />
          {products.map((item) => (
            <ProductCard product={item} key={item.id} />
          ))}
        </>
      )}
    </div>
  )
}
