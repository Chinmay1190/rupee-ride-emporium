
import React from 'react';
import { Link } from 'react-router-dom';
import { CartItem as CartItemType } from '@/context/CartContext';
import { formatPrice } from '@/data/products';
import { Button } from '@/components/ui/button';

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemove: (productId: number) => void;
}

const CartItem = ({ item, onUpdateQuantity, onRemove }: CartItemProps) => {
  const { product, quantity } = item;

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0) {
      onUpdateQuantity(product.id, value);
    }
  };

  const incrementQuantity = () => {
    onUpdateQuantity(product.id, quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      onUpdateQuantity(product.id, quantity - 1);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 border-b border-border pb-4 mb-4">
      <div className="sm:w-1/4">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-32 object-cover rounded-md"
          />
        </Link>
      </div>
      
      <div className="sm:w-3/4 flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex flex-col">
          <Link to={`/product/${product.id}`}>
            <h3 className="font-semibold text-lg hover:text-gold transition-colors">
              {product.name}
            </h3>
          </Link>
          <p className="text-sm text-muted-foreground">{product.brand}</p>
          <p className="font-semibold mt-2">{formatPrice(product.price)}</p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center border rounded-md">
            <button 
              className="px-3 py-1 hover:bg-muted"
              onClick={decrementQuantity}
            >
              -
            </button>
            <input 
              type="number" 
              min="1" 
              value={quantity} 
              onChange={handleQuantityChange} 
              className="w-12 text-center bg-transparent border-x border-border"
            />
            <button 
              className="px-3 py-1 hover:bg-muted"
              onClick={incrementQuantity}
            >
              +
            </button>
          </div>
          
          <Button 
            variant="destructive" 
            size="sm" 
            onClick={() => onRemove(product.id)}
          >
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
