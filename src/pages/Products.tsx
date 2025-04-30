
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '@/data/products';
import { Product } from '@/context/CartContext';
import ProductGrid from '@/components/products/ProductGrid';
import ProductFilters from '@/components/products/ProductFilters';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';
  
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [activeCategory, setActiveCategory] = useState(categoryParam);
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(Infinity);
  const [sortBy, setSortBy] = useState<string>('');
  
  useEffect(() => {
    filterProducts();
  }, [activeCategory, minPrice, maxPrice, sortBy]);
  
  useEffect(() => {
    setActiveCategory(categoryParam);
  }, [categoryParam]);
  
  const filterProducts = () => {
    let result = [...products];
    
    // Filter by category
    if (activeCategory !== 'all') {
      result = result.filter((product) => product.category === activeCategory);
    }
    
    // Filter by price range
    if (minPrice > 0 || maxPrice < Infinity) {
      result = result.filter(
        (product) => product.price >= minPrice && product.price <= maxPrice
      );
    }
    
    // Sort products
    if (sortBy) {
      switch (sortBy) {
        case 'price_asc':
          result.sort((a, b) => a.price - b.price);
          break;
        case 'price_desc':
          result.sort((a, b) => b.price - a.price);
          break;
        case 'name_asc':
          result.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case 'name_desc':
          result.sort((a, b) => b.name.localeCompare(a.name));
          break;
        default:
          break;
      }
    }
    
    setFilteredProducts(result);
  };
  
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    
    // Update URL params
    if (category === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };
  
  const handlePriceRangeChange = (min: number, max: number) => {
    setMinPrice(min);
    setMaxPrice(max);
  };
  
  const handleSort = (sortValue: string) => {
    setSortBy(sortValue);
  };
  
  const resetFilters = () => {
    setActiveCategory('all');
    setMinPrice(0);
    setMaxPrice(Infinity);
    setSortBy('');
    searchParams.delete('category');
    setSearchParams(searchParams);
  };
  
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8">Our Collection</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar with filters */}
        <aside className="md:w-1/4">
          <ProductFilters
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
            onPriceRangeChange={handlePriceRangeChange}
            onSort={handleSort}
            onReset={resetFilters}
          />
        </aside>
        
        {/* Main content */}
        <main className="md:w-3/4">
          <div className="flex justify-between items-center mb-6">
            <p className="text-muted-foreground">
              Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'car' : 'cars'}
            </p>
          </div>
          
          {filteredProducts.length > 0 ? (
            <ProductGrid products={filteredProducts} />
          ) : (
            <div className="text-center py-12">
              <p className="text-xl">No cars found matching your criteria.</p>
              <button 
                className="mt-4 text-gold hover:underline"
                onClick={resetFilters}
              >
                Reset filters
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Products;
