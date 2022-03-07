import { AddProductCard } from 'components/AddProductCard'
import { ProductCard } from 'components/ProductCard'

const products = [
  {
    slug: 'call-of-duty-warzone',
    name: 'Call Of Duty: Warzone',
    category: 'Shooter',
    price: 0,
    discount: 0,
    oldPrice: 0,
    image: '/images/products/call-of-duty-warzone.png',
    description:
      'Season Two takes Warzone to a whole new level with new maps, weapons, and amazing new features',
    rating: 3,
    reviewCount: 18982,
  },
  {
    slug: 'far-cry-6',
    name: 'Far Cry 6',
    category: 'Action',
    price: 1349,
    discount: 25,
    oldPrice: 1799,
    image: '/images/products/far-cry-6.png',
    description: 'Player can navigate on foot or via using various land, water, and air vehicles',
    rating: 0,
    reviewCount: 0,
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
    category: 'Action RPG',
    price: 649,
    discount: 50,
    oldPrice: 1299,
    image: '/images/products/witcher-3.png',
    description:
      'In the open world, you chart your own path to adventure. You play as a bounty hunter, a man of the road',
    rating: 5,
    reviewCount: 299,
  },
  {
    slug: 'paladins',
    name: 'Paladins',
    category: 'Shooter',
    price: 0,
    discount: 0,
    oldPrice: 0,
    image: '/images/products/paladins.png',
    description: 'Wield guns and magic as a legendary Champion of the Realm',
    rating: 4,
    reviewCount: 1820,
  },
]

export const ProductList = () => {
  return (
    <div className="product-list">
      <AddProductCard />
      {products.map((product) => (
        <ProductCard product={product} key={product.slug} />
      ))}
    </div>
  )
}
