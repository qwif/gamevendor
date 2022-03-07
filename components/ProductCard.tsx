import { Badge } from 'components/Badge'
import { Product } from 'lib/types/Product.interface'
import Image from 'next/image'
import React from 'react'

interface ProductCardProps extends React.ComponentProps<'div'> {
  product: Product
}

export const ProductCard = ({ product, ...props }: ProductCardProps) => {
  return (
    <div className="product-card" {...props}>
      {product.image.length > 0 ? (
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
          placeholder="blur"
          blurDataURL="/images/product-image-placeholder.png"
          width={256}
          height={200}
          quality={100}
          alt="Product Image"
        />
      )}
      <div className="product-card__info">
        <div className="product-card__info--top">
          <div className="product-card__category">
            <Badge label={product.category} />
          </div>
          <div className="product-card__title">{product.name}</div>
          <div className="product-card__rating">{product.rating}</div>
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
                  <div className="price__current">${product.price}</div>
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