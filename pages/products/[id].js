import { useRouter } from 'next/router'
import Link from 'next/link'
import products from '@data/products'
import { useContext } from 'react'
import { CartContext } from '@components/CartContext'

export default function ProductDetail() {
  const router = useRouter()
  const { id } = router.query
  const { addToCart } = useContext(CartContext)
  const product = products.find(p => p.id === id)

  if (!product) return <p>Product not found</p>

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
      <p>{product.description}</p>
      <p className="font-bold mb-2">${product.price}</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
      <div className="mt-4">
        <Link href="/cart" className="underline">Go to Cart</Link>
      </div>
    </div>
  )
}
