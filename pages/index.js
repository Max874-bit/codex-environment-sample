import Link from 'next/link'
import products from '@/data/products'

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Cosmetics</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map(product => (
          <div key={product.id} className="border p-4 rounded">
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p>{product.description}</p>
            <p className="font-bold">${product.price}</p>
            <Link href={`/products/${product.id}`}
              className="text-blue-500">View Details</Link>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <Link href="/cart" className="underline">Go to Cart</Link>
      </div>
    </div>
  )
}
