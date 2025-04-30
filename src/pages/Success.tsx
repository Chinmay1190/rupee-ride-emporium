
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const Success = () => {
  useEffect(() => {
    // Show success toast when the component mounts
    toast.success("Order placed successfully!");
  }, []);

  return (
    <div className="container py-20">
      <div className="max-w-2xl mx-auto text-center">
        <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>
        
        <p className="text-lg mb-8">
          Thank you for your purchase! Your order has been received and is being processed.
          You will receive an email confirmation shortly.
        </p>
        
        <div className="bg-card border rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">What's Next?</h2>
          
          <ol className="text-left space-y-4">
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gold text-black flex items-center justify-center font-semibold">1</span>
              <div>
                <h3 className="font-medium">Order Verification</h3>
                <p className="text-muted-foreground">Our team will verify your order and contact you within 24 hours.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gold text-black flex items-center justify-center font-semibold">2</span>
              <div>
                <h3 className="font-medium">Payment Processing</h3>
                <p className="text-muted-foreground">Your payment is being processed and will be confirmed shortly.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gold text-black flex items-center justify-center font-semibold">3</span>
              <div>
                <h3 className="font-medium">Delivery Arrangement</h3>
                <p className="text-muted-foreground">We will coordinate with you to schedule the delivery of your new vehicle.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gold text-black flex items-center justify-center font-semibold">4</span>
              <div>
                <h3 className="font-medium">Enjoy Your New Car</h3>
                <p className="text-muted-foreground">We'll ensure a smooth handover and introduction to your new luxury vehicle.</p>
              </div>
            </li>
          </ol>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/">
            <Button className="bg-gold hover:bg-gold-light text-black">
              Back to Home
            </Button>
          </Link>
          <Link to="/products">
            <Button variant="outline">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
