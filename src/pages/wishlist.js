import { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Heart, Trash2, ShoppingCart } from 'lucide-react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';
import { products } from '../data/products';

export default function Wishlist() {
  // Dummy wishlist data - in a real app this would come from state management
  const [wishlistItems, setWishlistItems] = useState([
    { id: 1, productId: 2, addedAt: '2024-01-15' },
    { id: 2, productId: 5, addedAt: '2024-01-14' },
    { id: 3, productId: 8, addedAt: '2024-01-13' },
    { id: 4, productId: 11, addedAt: '2024-01-12' }
  ]);

  const removeFromWishlist = (itemId) => {
    setWishlistItems(prev => prev.filter(item => item.id !== itemId));
  };

  const getProductById = (productId) => {
    return products.find(p => p.id === productId);
  };

  const wishlistProducts = wishlistItems
    .map(item => {
      const product = getProductById(item.productId);
      return product ? { ...product, wishlistId: item.id, isWishlisted: true } : null;
    })
    .filter(Boolean);

  if (wishlistItems.length === 0) {
    return (
      <>
        <Head>
          <title>Wishlist - ShopHub</title>
        </Head>
        <Navbar />
        <main className="min-h-screen bg-gray-50 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">💝</div>
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Your wishlist is empty</h1>
              <p className="text-gray-600 mb-8">
                Start adding products you love to your wishlist!
              </p>
              <Button onClick={() => window.location.href = '/shop'}>
                Browse Products
              </Button>
            </div>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Wishlist - ShopHub</title>
      </Head>
      <Navbar />

      <main className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">My Wishlist</h1>
            <p className="text-gray-600 mt-2">
              {wishlistItems.length} item{wishlistItems.length !== 1 ? 's' : ''} in your wishlist
            </p>
          </div>

          {/* Wishlist Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlistProducts.map((product, index) => (
              <motion.div
                key={product.wishlistId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="relative"
              >
                <ProductCard product={product} />
                
                {/* Remove from wishlist button */}
                <button
                  onClick={() => removeFromWishlist(product.wishlistId)}
                  className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-red-500 hover:text-white p-2 rounded-full shadow-lg transition-all duration-200"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </motion.div>
            ))}
          </div>

          {/* Actions */}
          <div className="mt-12 text-center">
            <div className="bg-white rounded-2xl shadow-sm p-6 max-w-md mx-auto">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Share your wishlist
              </h3>
              <p className="text-gray-600 mb-6">
                Let friends and family know what you're wishing for
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="outline"
                  onClick={() => {
                    // Copy wishlist URL to clipboard
                    navigator.clipboard.writeText(window.location.href);
                    alert('Wishlist URL copied to clipboard!');
                  }}
                  className="flex-1"
                >
                  Copy Link
                </Button>
                <Button
                  onClick={() => window.location.href = '/shop'}
                  className="flex-1"
                >
                  Continue Shopping
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
