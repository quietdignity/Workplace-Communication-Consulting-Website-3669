import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiStar, FiHeart, FiShoppingCart, FiEye, FiFilter, FiRefreshCw, FiTrendingUp, FiUsers, FiClock, FiTag } = FiIcons;

const ProductRecommendations = ({ userId = 'user_123', currentProduct = null }) => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('for-you');
  const [viewedProducts, setViewedProducts] = useState(new Set());
  const [favorites, setFavorites] = useState(new Set());
  const [userPreferences, setUserPreferences] = useState({
    categories: ['electronics', 'books'],
    priceRange: [0, 500],
    brands: ['Apple', 'Samsung'],
    style: 'modern'
  });

  // Simulated product data with rich metadata
  const allProducts = [
    {
      id: 'p1',
      name: 'Premium Wireless Headphones',
      price: 299.99,
      originalPrice: 399.99,
      rating: 4.8,
      reviews: 2847,
      category: 'electronics',
      brand: 'Apple',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
      tags: ['wireless', 'premium', 'noise-canceling'],
      description: 'Industry-leading noise cancellation with premium sound quality',
      inStock: true,
      trending: true,
      discount: 25,
      reasons: ['Based on your electronics purchases', 'Highly rated by similar users']
    },
    {
      id: 'p2',
      name: 'Smart Fitness Watch',
      price: 249.99,
      rating: 4.6,
      reviews: 1923,
      category: 'electronics',
      brand: 'Samsung',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
      tags: ['fitness', 'smart', 'health'],
      description: 'Track your fitness goals with advanced health monitoring',
      inStock: true,
      trending: false,
      reasons: ['Popular with fitness enthusiasts', 'Matches your activity level']
    },
    {
      id: 'p3',
      name: 'Ergonomic Office Chair',
      price: 399.99,
      originalPrice: 549.99,
      rating: 4.7,
      reviews: 856,
      category: 'furniture',
      brand: 'Herman Miller',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
      tags: ['ergonomic', 'office', 'comfort'],
      description: 'Professional-grade ergonomic support for long work sessions',
      inStock: true,
      trending: false,
      discount: 27,
      reasons: ['Based on your work setup', 'Recommended by professionals']
    },
    {
      id: 'p4',
      name: 'Bestselling Novel Collection',
      price: 89.99,
      rating: 4.9,
      reviews: 3421,
      category: 'books',
      brand: 'Penguin',
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop',
      tags: ['bestseller', 'fiction', 'collection'],
      description: 'Award-winning contemporary fiction from acclaimed authors',
      inStock: true,
      trending: true,
      reasons: ['Based on your reading history', 'Trending in your area']
    },
    {
      id: 'p5',
      name: 'Professional Camera Lens',
      price: 899.99,
      rating: 4.8,
      reviews: 567,
      category: 'electronics',
      brand: 'Canon',
      image: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=400&fit=crop',
      tags: ['photography', 'professional', 'lens'],
      description: 'High-quality telephoto lens for professional photography',
      inStock: false,
      trending: false,
      reasons: ['Based on your photography interest', 'Professional grade quality']
    },
    {
      id: 'p6',
      name: 'Minimalist Desk Lamp',
      price: 129.99,
      rating: 4.5,
      reviews: 892,
      category: 'furniture',
      brand: 'IKEA',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      tags: ['minimalist', 'lighting', 'desk'],
      description: 'Clean, modern design with adjustable brightness control',
      inStock: true,
      trending: false,
      reasons: ['Matches your style preferences', 'Great for workspaces']
    }
  ];

  const filters = [
    { id: 'for-you', name: 'For You', icon: FiUsers },
    { id: 'trending', name: 'Trending', icon: FiTrendingUp },
    { id: 'recent', name: 'Recently Viewed', icon: FiClock },
    { id: 'deals', name: 'Best Deals', icon: FiTag }
  ];

  // Generate personalized recommendations
  const generateRecommendations = () => {
    setLoading(true);
    
    setTimeout(() => {
      let filtered = [...allProducts];
      
      switch (activeFilter) {
        case 'for-you':
          // Personalized based on user preferences
          filtered = filtered
            .filter(product => 
              userPreferences.categories.includes(product.category) ||
              userPreferences.brands.includes(product.brand)
            )
            .sort((a, b) => b.rating - a.rating);
          break;
          
        case 'trending':
          filtered = filtered
            .filter(product => product.trending)
            .sort((a, b) => b.reviews - a.reviews);
          break;
          
        case 'recent':
          filtered = filtered
            .filter(product => viewedProducts.has(product.id))
            .sort((a, b) => b.rating - a.rating);
          break;
          
        case 'deals':
          filtered = filtered
            .filter(product => product.originalPrice)
            .sort((a, b) => (b.discount || 0) - (a.discount || 0));
          break;
          
        default:
          break;
      }
      
      setRecommendations(filtered.slice(0, 6));
      setLoading(false);
    }, 800);
  };

  useEffect(() => {
    generateRecommendations();
  }, [activeFilter, userPreferences]);

  // Simulate user interactions
  const handleProductView = (productId) => {
    setViewedProducts(prev => new Set([...prev, productId]));
    
    // Track analytics
    if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
      window.gtag('event', 'product_view', {
        event_category: 'recommendations',
        event_label: productId,
        value: 1
      });
    }
  };

  const handleFavorite = (productId) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(productId)) {
        newFavorites.delete(productId);
      } else {
        newFavorites.add(productId);
      }
      return newFavorites;
    });
  };

  const handleAddToCart = (product) => {
    // Track conversion
    if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
      window.gtag('event', 'add_to_cart', {
        event_category: 'recommendations',
        event_label: product.id,
        value: product.price
      });
    }
    
    alert(`Added "${product.name}" to cart!`);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  const calculateSavings = (original, current) => {
    return original ? Math.round(((original - current) / original) * 100) : 0;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-neutral-200 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-neutral-900 mb-2">
            Recommended for You
          </h2>
          <p className="text-neutral-600">
            Personalized picks based on your preferences and activity
          </p>
        </div>
        
        <button
          onClick={generateRecommendations}
          disabled={loading}
          className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50"
        >
          <SafeIcon 
            icon={FiRefreshCw} 
            className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} 
          />
          Refresh
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
              activeFilter === filter.id
                ? 'bg-primary-600 text-white'
                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
            }`}
          >
            <SafeIcon icon={filter.icon} className="w-4 h-4" />
            {filter.name}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[...Array(6)].map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="bg-neutral-200 rounded-lg h-48 mb-4"></div>
                <div className="space-y-2">
                  <div className="bg-neutral-200 rounded h-4 w-3/4"></div>
                  <div className="bg-neutral-200 rounded h-4 w-1/2"></div>
                  <div className="bg-neutral-200 rounded h-4 w-1/4"></div>
                </div>
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {recommendations.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-lg border border-neutral-200 overflow-hidden hover:shadow-xl transition-all duration-300"
                onClick={() => handleProductView(product.id)}
              >
                {/* Product Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {product.trending && (
                      <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                        TRENDING
                      </span>
                    )}
                    {product.discount && (
                      <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                        {product.discount}% OFF
                      </span>
                    )}
                    {!product.inStock && (
                      <span className="bg-neutral-500 text-white text-xs font-bold px-2 py-1 rounded">
                        OUT OF STOCK
                      </span>
                    )}
                  </div>

                  {/* Quick Actions */}
                  <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleFavorite(product.id);
                      }}
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                        favorites.has(product.id)
                          ? 'bg-red-500 text-white'
                          : 'bg-white text-neutral-600 hover:text-red-500'
                      }`}
                    >
                      <SafeIcon icon={FiHeart} className="w-4 h-4" />
                    </button>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleProductView(product.id);
                      }}
                      className="w-8 h-8 bg-white text-neutral-600 hover:text-primary-600 rounded-full flex items-center justify-center transition-colors"
                    >
                      <SafeIcon icon={FiEye} className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      <SafeIcon icon={FiStar} className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-neutral-700">
                        {product.rating}
                      </span>
                    </div>
                    <span className="text-xs text-neutral-500">
                      ({product.reviews.toLocaleString()} reviews)
                    </span>
                  </div>

                  <h3 className="font-semibold text-neutral-900 mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  
                  <p className="text-sm text-neutral-600 mb-3 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg font-bold text-neutral-900">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && (
                      <>
                        <span className="text-sm text-neutral-500 line-through">
                          {formatPrice(product.originalPrice)}
                        </span>
                        <span className="text-sm text-green-600 font-medium">
                          Save {calculateSavings(product.originalPrice, product.price)}%
                        </span>
                      </>
                    )}
                  </div>

                  {/* Recommendation Reasons */}
                  {product.reasons && (
                    <div className="mb-3">
                      <p className="text-xs text-primary-600 font-medium mb-1">
                        Why we recommend this:
                      </p>
                      <ul className="text-xs text-neutral-600">
                        {product.reasons.slice(0, 2).map((reason, idx) => (
                          <li key={idx} className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-primary-600 rounded-full"></div>
                            {reason}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(product);
                    }}
                    disabled={!product.inStock}
                    className={`w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg font-medium transition-colors ${
                      product.inStock
                        ? 'bg-primary-600 hover:bg-primary-700 text-white'
                        : 'bg-neutral-200 text-neutral-500 cursor-not-allowed'
                    }`}
                  >
                    <SafeIcon icon={FiShoppingCart} className="w-4 h-4" />
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Empty State */}
      {!loading && recommendations.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <SafeIcon icon={FiFilter} className="w-12 h-12 text-neutral-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-neutral-900 mb-2">
            No recommendations found
          </h3>
          <p className="text-neutral-600 mb-4">
            Try adjusting your filters or check back later for new suggestions.
          </p>
          <button
            onClick={() => setActiveFilter('for-you')}
            className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            View All Recommendations
          </button>
        </motion.div>
      )}

      {/* Insights Panel */}
      {recommendations.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 p-4 bg-primary-50 rounded-lg border border-primary-200"
        >
          <h4 className="font-semibold text-primary-900 mb-2">
            Your Recommendation Insights
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <span className="text-primary-700 font-medium">
                {viewedProducts.size} products viewed
              </span>
            </div>
            <div>
              <span className="text-primary-700 font-medium">
                {favorites.size} favorites saved
              </span>
            </div>
            <div>
              <span className="text-primary-700 font-medium">
                Based on {userPreferences.categories.length} categories
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ProductRecommendations;