
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import CartItem from '@/components/cart/CartItem';
import CartSummary from '@/components/cart/CartSummary';
import { Button } from '@/components/ui/button';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, calculateTotal } = useCart();
  const subtotal = calculateTotal();
  
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      
      {cartItems.length > 0 ? (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-card border rounded-lg p-6">
              {cartItems.map((item) => (
                <CartItem 
                  key={item.product.id} 
                  item={item} 
                  onUpdateQuantity={updateQuantity} 
                  onRemove={removeFromCart}
                />
              ))}
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:w-1/3">
            <CartSummary subtotal={subtotal} />
          </div>
        </div>
      ) : (
        <div className="text-center py-16">
          <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
          <p className="text-muted-foreground mb-8">
            Looks like you haven't added any cars to your cart yet.
          </p>
          <Link to="/products">
            <Button className="bg-gold hover:bg-gold-light text-black">
              Browse Cars
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
