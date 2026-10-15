
import { useState } from 'react'
import './App.css'

const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 1499,
    category: 'Electronics',
    image: 'https://placehold.co/400x300/e8eef8/243b64?text=Headphones',
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 2299,
    category: 'Electronics',
    image: 'https://placehold.co/400x300/e8eef8/243b64?text=Smart+Watch',
  },
  {
    id: 3,
    name: 'Running Shoes',
    price: 1799,
    category: 'Fashion',
    image: 'https://placehold.co/400x300/f5eadf/754c24?text=Shoes',
  },
  {
    id: 4,
    name: 'Travel Backpack',
    price: 999,
    category: 'Accessories',
    image: 'https://placehold.co/400x300/e6f2e8/285b39?text=Backpack',
  },
    {
    id: 5,
    name: 'sextoy',
    price: 1000,
    category: 'adult',
   image: '/product/ifonnx-toys-8-7EeeAM-RA-unsplash.jpg',
  },
   {
    id: 6,
    name: 'hc verma',
    price: 500,
    category: 'study',
   image: '/product/71KUrcg5XVL._SL1400_.jpg'
  },
]

function App() {
  const [cartCount, setCartCount] = useState(0)
  const [search, setSearch] = useState('')

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="app">
      <header className="navbar">
        <h1>amazon clone</h1>

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <div className="cart">
           Cart: <strong>{cartCount}</strong>
        </div>
      </header>

      <main className="container">
        <h2>Discover our products</h2>
        <p className="subtitle">
          Your first AI-assisted shopping application
        </p>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <article className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />

              <div className="product-info">
                <p className="category">{product.category}</p>
                <h3>{product.name}</h3>
                <p className="price">
                  ₹{product.price.toLocaleString('en-IN')}
                </p>

                <button
                  onClick={() =>
                    setCartCount((count) => count + 1)
                  }
                >
                  Add to Cart
                </button>
              </div>
            </article>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="empty">No products found.</p>
        )}
      </main>
    </div>
  )
}

export default App
