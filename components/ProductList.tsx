import { Category, Product } from '@prisma/client'
import { AddProductCard } from 'components/AddProductCard'
import { Pagination } from 'components/Pagination'
import { ProductCard } from 'components/ProductCard'
import React from 'react'

interface ProductListProps {
  data: (Product & { category: Category })[]
}

export const ProductList = ({ data }: ProductListProps) => {
  return (
    <div className="product-list">
      <div className="product-list__items">
        {data.length > 0 && (
          <>
            <AddProductCard />
            {data.map((item) => (
              <ProductCard product={item} key={item.id} />
            ))}
          </>
        )}
      </div>
      <Pagination />
    </div>
  )
}
