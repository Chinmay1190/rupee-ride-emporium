
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/data/products';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, calculateTotal, clearCart } = useCart();
  const subtotal = calculateTotal();
  
  // If cart is empty, redirect to products
  if (cartItems.length === 0) {
    navigate('/products');
  }
  
  // Calculate order totals
  const tax = subtotal * 0.18; // 18% GST
  const shipping = subtotal > 0 ? 50000 : 0; // ₹50,000 shipping fee
  const total = subtotal + tax + shipping;
  
  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    paymentMethod: 'credit',
    cardNumber: '',
    cardName: '',
    cardExpiry: '',
    cardCvv: '',
    saveInfo: false
  });
  
  // Form validation
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  
  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.state) newErrors.state = 'State is required';
    if (!formData.zipCode) newErrors.zipCode = 'ZIP code is required';
    
    if (formData.paymentMethod === 'credit') {
      if (!formData.cardNumber) newErrors.cardNumber = 'Card number is required';
      if (!formData.cardName) newErrors.cardName = 'Name on card is required';
      if (!formData.cardExpiry) newErrors.cardExpiry = 'Expiry date is required';
      if (!formData.cardCvv) newErrors.cardCvv = 'CVV is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    
    // Clear the error for this field when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulate order processing
      toast.success("Processing your order...");
      
      // Simulate API call with timeout
      setTimeout(() => {
        clearCart();
        navigate('/success');
      }, 1500);
    } else {
      toast.error("Please complete all required fields.");
    }
  };
  
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Checkout Form */}
        <div className="lg:w-2/3">
          <form onSubmit={handleSubmit}>
            {/* Customer Information */}
            <div className="bg-card border rounded-lg p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Customer Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="block font-medium">
                    First Name <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`w-full border rounded-md p-2 bg-background ${
                      errors.firstName ? 'border-destructive' : ''
                    }`}
                  />
                  {errors.firstName && (
                    <p className="text-destructive text-sm">{errors.firstName}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="lastName" className="block font-medium">
                    Last Name <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`w-full border rounded-md p-2 bg-background ${
                      errors.lastName ? 'border-destructive' : ''
                    }`}
                  />
                  {errors.lastName && (
                    <p className="text-destructive text-sm">{errors.lastName}</p>
                  )}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="block font-medium">
                    Email <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full border rounded-md p-2 bg-background ${
                      errors.email ? 'border-destructive' : ''
                    }`}
                  />
                  {errors.email && (
                    <p className="text-destructive text-sm">{errors.email}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="block font-medium">
                    Phone <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full border rounded-md p-2 bg-background ${
                      errors.phone ? 'border-destructive' : ''
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-destructive text-sm">{errors.phone}</p>
                  )}
                </div>
              </div>
            </div>
            
            {/* Shipping Information */}
            <div className="bg-card border rounded-lg p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
              
              <div className="space-y-2 mb-4">
                <label htmlFor="address" className="block font-medium">
                  Address <span className="text-destructive">*</span>
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  rows={3}
                  className={`w-full border rounded-md p-2 bg-background ${
                    errors.address ? 'border-destructive' : ''
                  }`}
                />
                {errors.address && (
                  <p className="text-destructive text-sm">{errors.address}</p>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label htmlFor="city" className="block font-medium">
                    City <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className={`w-full border rounded-md p-2 bg-background ${
                      errors.city ? 'border-destructive' : ''
                    }`}
                  />
                  {errors.city && (
                    <p className="text-destructive text-sm">{errors.city}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="state" className="block font-medium">
                    State <span className="text-destructive">*</span>
                  </label>
                  <select
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className={`w-full border rounded-md p-2 bg-background ${
                      errors.state ? 'border-destructive' : ''
                    }`}
                  >
                    <option value="">Select State</option>
                    <option value="AN">Andaman and Nicobar Islands</option>
                    <option value="AP">Andhra Pradesh</option>
                    <option value="AR">Arunachal Pradesh</option>
                    <option value="AS">Assam</option>
                    <option value="BR">Bihar</option>
                    <option value="CH">Chandigarh</option>
                    <option value="CT">Chhattisgarh</option>
                    <option value="DN">Dadra and Nagar Haveli</option>
                    <option value="DD">Daman and Diu</option>
                    <option value="DL">Delhi</option>
                    <option value="GA">Goa</option>
                    <option value="GJ">Gujarat</option>
                    <option value="HR">Haryana</option>
                    <option value="HP">Himachal Pradesh</option>
                    <option value="JK">Jammu and Kashmir</option>
                    <option value="JH">Jharkhand</option>
                    <option value="KA">Karnataka</option>
                    <option value="KL">Kerala</option>
                    <option value="LD">Lakshadweep</option>
                    <option value="MP">Madhya Pradesh</option>
                    <option value="MH">Maharashtra</option>
                    <option value="MN">Manipur</option>
                    <option value="ML">Meghalaya</option>
                    <option value="MZ">Mizoram</option>
                    <option value="NL">Nagaland</option>
                    <option value="OR">Odisha</option>
                    <option value="PY">Puducherry</option>
                    <option value="PB">Punjab</option>
                    <option value="RJ">Rajasthan</option>
                    <option value="SK">Sikkim</option>
                    <option value="TN">Tamil Nadu</option>
                    <option value="TS">Telangana</option>
                    <option value="TR">Tripura</option>
                    <option value="UP">Uttar Pradesh</option>
                    <option value="UK">Uttarakhand</option>
                    <option value="WB">West Bengal</option>
                  </select>
                  {errors.state && (
                    <p className="text-destructive text-sm">{errors.state}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="zipCode" className="block font-medium">
                    ZIP Code <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className={`w-full border rounded-md p-2 bg-background ${
                      errors.zipCode ? 'border-destructive' : ''
                    }`}
                  />
                  {errors.zipCode && (
                    <p className="text-destructive text-sm">{errors.zipCode}</p>
                  )}
                </div>
              </div>
            </div>
            
            {/* Payment Information */}
            <div className="bg-card border rounded-lg p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="credit"
                    name="paymentMethod"
                    value="credit"
                    checked={formData.paymentMethod === 'credit'}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  <label htmlFor="credit">Credit / Debit Card</label>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="netbanking"
                    name="paymentMethod"
                    value="netbanking"
                    checked={formData.paymentMethod === 'netbanking'}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  <label htmlFor="netbanking">Net Banking</label>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="upi"
                    name="paymentMethod"
                    value="upi"
                    checked={formData.paymentMethod === 'upi'}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  <label htmlFor="upi">UPI</label>
                </div>
              </div>
              
              {formData.paymentMethod === 'credit' && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="cardNumber" className="block font-medium">
                      Card Number <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      placeholder="XXXX XXXX XXXX XXXX"
                      className={`w-full border rounded-md p-2 bg-background ${
                        errors.cardNumber ? 'border-destructive' : ''
                      }`}
                    />
                    {errors.cardNumber && (
                      <p className="text-destructive text-sm">{errors.cardNumber}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="cardName" className="block font-medium">
                      Name on Card <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      id="cardName"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleInputChange}
                      className={`w-full border rounded-md p-2 bg-background ${
                        errors.cardName ? 'border-destructive' : ''
                      }`}
                    />
                    {errors.cardName && (
                      <p className="text-destructive text-sm">{errors.cardName}</p>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="cardExpiry" className="block font-medium">
                        Expiry Date <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="text"
                        id="cardExpiry"
                        name="cardExpiry"
                        value={formData.cardExpiry}
                        onChange={handleInputChange}
                        placeholder="MM/YY"
                        className={`w-full border rounded-md p-2 bg-background ${
                          errors.cardExpiry ? 'border-destructive' : ''
                        }`}
                      />
                      {errors.cardExpiry && (
                        <p className="text-destructive text-sm">{errors.cardExpiry}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="cardCvv" className="block font-medium">
                        CVV <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="text"
                        id="cardCvv"
                        name="cardCvv"
                        value={formData.cardCvv}
                        onChange={handleInputChange}
                        placeholder="XXX"
                        className={`w-full border rounded-md p-2 bg-background ${
                          errors.cardCvv ? 'border-destructive' : ''
                        }`}
                      />
                      {errors.cardCvv && (
                        <p className="text-destructive text-sm">{errors.cardCvv}</p>
                      )}
                    </div>
                  </div>
                </div>
              )}
              
              {formData.paymentMethod === 'netbanking' && (
                <div className="p-4 bg-muted rounded-md">
                  <p>You will be redirected to your bank's website to complete the payment.</p>
                </div>
              )}
              
              {formData.paymentMethod === 'upi' && (
                <div className="p-4 bg-muted rounded-md">
                  <p>You will receive a UPI payment request on your registered UPI ID.</p>
                </div>
              )}
            </div>
            
            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="saveInfo"
                name="saveInfo"
                checked={formData.saveInfo}
                onChange={handleInputChange}
                className="mr-2"
              />
              <label htmlFor="saveInfo">
                Save this information for next time
              </label>
            </div>
            
            <Button 
              type="submit"
              className="w-full md:w-auto bg-gold hover:bg-gold-light text-black text-lg"
              size="lg"
            >
              Place Order
            </Button>
          </form>
        </div>
        
        {/* Order Summary */}
        <div className="lg:w-1/3">
          <div className="bg-card border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div key={item.product.id} className="flex gap-3">
                  <div className="w-16 h-16 bg-muted rounded">
                    <img 
                      src={item.product.image} 
                      alt={item.product.name} 
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{item.product.name}</h4>
                    <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">
                      {formatPrice(item.product.price * item.quantity)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="border-t pt-4 space-y-2">
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
            </div>
            
            <div className="border-t mt-4 pt-4">
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span className="text-xl">{formatPrice(total)}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Including all taxes and fees
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
