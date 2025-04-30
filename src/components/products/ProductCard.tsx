
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '@/context/CartContext';
import { formatPrice } from '@/data/products';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="card-luxury flex flex-col h-full overflow-hidden group">
      <div className="relative overflow-hidden h-48 md:h-64">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover object-center transform transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-gold text-black text-xs font-bold px-2 py-1 rounded">
          {product.category.toUpperCase()}
        </div>
      </div>
      
      <div className="flex-1 flex flex-col p-4">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-lg font-semibold line-clamp-1">{product.name}</h3>
          <span className="font-medium text-gold">{product.brand}</span>
        </div>
        
        <p className="mt-2 text-muted-foreground text-sm line-clamp-2 flex-1">
          {product.description.substring(0, 100)}...
        </p>
        
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold">{formatPrice(product.price)}</span>
          <Link to={`/product/${product.id}`}>
            <Button variant="outline" size="sm">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
