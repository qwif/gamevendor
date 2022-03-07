import { ProductCard } from './ProductCard'

const products = [
  {
    slug: 'call-of-duty-warzone',
    name: 'Call Of Duty: Warzone',
    category: 'Shooter',
    price: 649,
    discount: 50,
    oldPrice: 1299,
    image: '/images/products/call-of-duty-warzone.png',
    description: 'Get the Captain Price Operator included with purchase',
    rating: 3,
    reviewCount: 18982,
  },
  {
    slug: 'paladins',
    name: 'Paladins',
    category: 'Action RPG',
    price: 0,
    discount: 0,
    oldPrice: 0,
    image: '/images/products/paladins.png',
    description: 'Get the Captain Price Operator included with purchase',
    rating: 4,
    reviewCount: 1820,
  },
  {
    slug: 'world-of-warcraft-shadowlands',
    name: 'World of Warcraft: Shadowlands',
    category: 'Multiplayer RPG',
    price: 0,
    discount: 0,
    oldPrice: 0,
    image: '/images/products/wow-shadowlands.png',
    description: 'Includes access to World of Warcraft, Burning Crusade Classic, and WoW Classic',
    rating: 4,
    reviewCount: 299,
  },
  {
    slug: 'witcher-3-wild-hunt',
    name: 'Witcher 3: Wild Hunt',
    category: 'Card Game',
    price: 649,
    discount: 50,
    oldPrice: 1299,
    image: '/images/products/witcher-3.png',
    description: 'Will only be usable in the new Classic Format when it is released',
    rating: 5,
    reviewCount: 299,
  },
  {
    slug: 'far-cry-6',
    name: 'Far Cry 6',
    category: 'Action',
    price: 649,
    discount: 50,
    oldPrice: 1299,
    image: '/images/products/far-cry-6.png',
    description: 'In-Game Content',
    rating: 4,
    reviewCount: 2888,
  },
]

export const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard product={product} key={product.slug} />
      ))}
    </div>
  )
}
