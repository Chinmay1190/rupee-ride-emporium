
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { formatPrice } from '@/data/products';
import { Button } from '@/components/ui/button';

interface CartSummaryProps {
  subtotal: number;
}

const CartSummary = ({ subtotal }: CartSummaryProps) => {
  const navigate = useNavigate();
  
  // Calculate tax, shipping, and total
  const tax = subtotal * 0.18; // 18% GST
  const shipping = subtotal > 0 ? 50000 : 0; // ₹50,000 shipping fee
  const total = subtotal + tax + shipping;
  
  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="border rounded-lg p-6 bg-card">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
      
      <div className="space-y-3">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between">
          <span>GST (18%)</span>
          <span>{formatPrice(tax)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>{shipping ? formatPrice(shipping) : 'Free'}</span>
        </div>
        <div className="border-t pt-3 mt-3">
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span className="text-xl">{formatPrice(total)}</span>
          </div>
        </div>
      </div>
      
      <Button 
        className="w-full mt-6 bg-gold hover:bg-gold-light text-black"
        disabled={subtotal === 0}
        onClick={handleCheckout}
      >
        Proceed to Checkout
      </Button>
      
      <div className="mt-4 text-xs text-muted-foreground">
        <p>
          By proceeding, you agree to our <a href="#" className="underline hover:text-foreground">Terms of Service</a> and <a href="#" className="underline hover:text-foreground">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
};

export default CartSummary;
