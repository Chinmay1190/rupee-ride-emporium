
import React from 'react';
import { Button } from '@/components/ui/button';

interface ProductFiltersProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  onPriceRangeChange: (min: number, max: number) => void;
  onSort: (sortBy: string) => void;
  onReset: () => void;
}

const ProductFilters = ({
  activeCategory,
  onCategoryChange,
  onPriceRangeChange,
  onSort,
  onReset
}: ProductFiltersProps) => {
  const categories = [
    { id: 'all', name: 'All Cars' },
    { id: 'luxury', name: 'Luxury' },
    { id: 'sports', name: 'Sports' },
    { id: 'sedan', name: 'Sedan' },
    { id: 'suv', name: 'SUV' }
  ];

  const priceRanges = [
    { min: 0, max: 10000000, name: 'Under ₹1 Crore' },
    { min: 10000000, max: 25000000, name: '₹1 Crore - ₹2.5 Crore' },
    { min: 25000000, max: 50000000, name: '₹2.5 Crore - ₹5 Crore' },
    { min: 50000000, max: Infinity, name: 'Above ₹5 Crore' }
  ];

  const sortOptions = [
    { id: 'price_asc', name: 'Price: Low to High' },
    { id: 'price_desc', name: 'Price: High to Low' },
    { id: 'name_asc', name: 'Name: A to Z' },
    { id: 'name_desc', name: 'Name: Z to A' }
  ];

  return (
    <div className="bg-card border rounded-lg p-6 mb-6 space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-3">Categories</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => onCategoryChange(category.id)}
              className={activeCategory === category.id ? "bg-gold hover:bg-gold-light text-black" : ""}
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-3">Price Range</h3>
        <div className="space-y-2">
          {priceRanges.map((range, index) => (
            <div 
              key={index} 
              className="flex items-center cursor-pointer hover:bg-muted p-2 rounded-md"
              onClick={() => onPriceRangeChange(range.min, range.max)}
            >
              <div className="w-4 h-4 border border-foreground rounded-full mr-2"></div>
              <span>{range.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-3">Sort By</h3>
        <select 
          className="w-full p-2 border rounded-md bg-background"
          onChange={(e) => onSort(e.target.value)}
          defaultValue=""
        >
          <option value="" disabled>Select option</option>
          {sortOptions.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
      </div>

      <Button 
        variant="outline" 
        className="w-full mt-4"
        onClick={onReset}
      >
        Reset Filters
      </Button>
    </div>
  );
};

export default ProductFilters;
