import { Product } from '@prisma/client'
import { AddProductCard } from 'components/AddProductCard'
import { ProductCard } from 'components/ProductCard'
import React from 'react'

interface ProductListProps {
  data: Product[]
}

export const ProductList = ({ data }: ProductListProps) => {
  return (
    <div className="product-list">
      {data.length > 0 && (
        <>
          <AddProductCard />
          {data.map((item) => (
            <ProductCard product={item} key={item.id} />
          ))}
        </>
      )}
    </div>
  )
}
