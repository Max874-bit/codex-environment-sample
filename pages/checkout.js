import { useContext } from 'react'
import { CartContext } from '@components/CartContext'
import Link from 'next/link'

export default function Checkout() {
  const { cartItems, clearCart } = useContext(CartContext)
  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)

  const handleCheckout = () => {
    // In real app, handle payment here
    alert('Checkout complete!')
    clearCart()
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map(item => (
              <li key={item.id} className="mb-2 flex justify-between">
                <span>{item.name} x {item.qty}</span>
                <span>${(item.price * item.qty).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <p className="font-bold mt-2">Total: ${total.toFixed(2)}</p>
          <button className="bg-green-500 text-white px-4 py-2 mt-2" onClick={handleCheckout}>Place Order</button>
        </div>
      )}
      <div className="mt-4">
        <Link href="/" className="underline">Back to Products</Link>
      </div>
    </div>
  )
}
