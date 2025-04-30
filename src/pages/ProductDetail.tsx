
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById, formatPrice } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = id ? getProductById(parseInt(id, 10)) : undefined;
  
  if (!product) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <p className="mb-8">The product you're looking for doesn't exist.</p>
        <Button onClick={() => navigate('/products')}>
          Back to Products
        </Button>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to your cart`);
  };
  
  return (
    <div className="container py-12">
      <Button 
        variant="ghost" 
        className="mb-8"
        onClick={() => navigate(-1)}
      >
        ← Back
      </Button>
      
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Product Image */}
        <div className="lg:w-1/2">
          <div className="aspect-video overflow-hidden rounded-lg bg-muted">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Product Details */}
        <div className="lg:w-1/2">
          <div className="mb-3">
            <span className="inline-block bg-gold text-black text-xs font-semibold px-2.5 py-1 rounded">
              {product.category.toUpperCase()}
            </span>
            <span className="inline-block ml-2 text-muted-foreground">
              {product.brand}
            </span>
          </div>
          
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-bold text-gold mb-6">
            {formatPrice(product.price)}
          </p>
          
          <p className="text-muted-foreground mb-6">
            {product.description}
          </p>
          
          <div className="mb-6">
            <Button 
              className="w-full md:w-auto bg-gold hover:bg-gold-light text-black"
              size="lg"
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </div>
          
          {/* Features */}
          {product.features && product.features.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3">Key Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <svg className="w-4 h-4 text-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Specifications */}
          {product.specifications && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="border-b pb-2">
                    <span className="text-sm text-muted-foreground">{key}</span>
                    <p className="font-medium">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
