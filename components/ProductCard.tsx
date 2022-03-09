import { Category, Product } from '@prisma/client'
import { Badge } from 'components/Badge'
import { Button } from 'components/Button'
import { Icon } from 'components/Icon'
import { Rating } from 'components/Rating'
import Image from 'next/image'
import React from 'react'

interface ProductCardProps extends React.ComponentProps<'div'> {
  product: Product & { category: Category }
}

export const ProductCard = ({ product, ...props }: ProductCardProps) => {
  return (
    <div className="product-card" {...props}>
      <div className="product-card__close">
        <Button size="small" variant="destructive">
          <Icon name="close" />
        </Button>
      </div>
      {product.image ? (
        <Image
          className="product-card__image"
          src={product.image}
          placeholder="blur"
          blurDataURL="/images/product-image-placeholder.png"
          width={256}
          height={200}
          quality={100}
          alt="Product Image"
        />
      ) : (
        <Image
          className="product-card__image"
          src="/images/product-image-placeholder.png"
          width={256}
          height={200}
          quality={100}
          alt="Product Image"
        />
      )}
      <div className="product-card__info">
        <div className="product-card__info--top">
          <div className="product-card__category">
            <Badge label={product.category.name} />
          </div>
          <div className="product-card__title">{product.title}</div>
          <div className="product-card__rating">
            <Rating value={product.rating} />
            <div className="product-card__reviews">
              {product.reviewCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </div>
          </div>
          <div className="product-card__description">{product.description}</div>
        </div>
        <div className="product-card__info--bottom">
          <div className="divider divider--content"></div>
          <div className="product-card__price price">
            {product.price < 1 ? (
              <div className="price__current">Free</div>
            ) : (
              <>
                <div className="price__wrapper">
                  {product.oldPrice > 0 && <div className="price__old">${product.oldPrice}</div>}
                  <div className="price__current">
                    ${product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </div>
                </div>
                {product.discount > 0 && (
                  <Badge label={`-${product.discount.toString()}%`} isDiscount />
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
