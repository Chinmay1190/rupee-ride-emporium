
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ProductGrid from '@/components/products/ProductGrid';
import { getFeaturedProducts } from '@/data/products';

const Index = () => {
  const featuredProducts = getFeaturedProducts(8);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ 
            backgroundImage: 'url(https://source.unsplash.com/1600x900/?luxury,car)',
            backgroundPosition: 'center 30%'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            Luxury & Sports Cars
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Experience unparalleled performance and elegant design with our collection of premium automobiles.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/products">
              <Button size="lg" className="bg-gold hover:bg-gold-light text-black">
                Explore Collection
              </Button>
            </Link>
            <Link to="/products?category=sports">
              <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold/10">
                Sports Cars
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 container">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Cars</h2>
          <Link to="/products">
            <Button variant="ghost">View All</Button>
          </Link>
        </div>
        <ProductGrid products={featuredProducts} />
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Browse By Category</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Luxury Cars", image: "https://source.unsplash.com/1600x900/?luxury,car", link: "/products?category=luxury" },
              { name: "Sports Cars", image: "https://source.unsplash.com/1600x900/?sports,car", link: "/products?category=sports" },
              { name: "Sedans", image: "https://source.unsplash.com/1600x900/?sedan", link: "/products?category=sedan" },
              { name: "SUVs", image: "https://source.unsplash.com/1600x900/?suv", link: "/products?category=suv" }
            ].map((category, index) => (
              <Link key={index} to={category.link} className="group relative overflow-hidden rounded-lg h-64">
                <div 
                  className="absolute inset-0 bg-cover bg-center transform transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${category.image})` }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <h3 className="text-white text-2xl font-bold text-center">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 container">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose RupeeRide</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Premium Selection",
              description: "Curated collection of the world's finest luxury and sports cars.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-gold">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
              )
            },
            {
              title: "Exclusive Service",
              description: "Personalized concierge service from beginning to delivery.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-gold">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              )
            },
            {
              title: "Secure Payment",
              description: "Advanced encryption and multiple payment options for safe transactions.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-gold">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              )
            },
            {
              title: "Nationwide Delivery",
              description: "Door-to-door delivery service throughout India.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-gold">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
              )
            }
          ].map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 border rounded-lg card-luxury">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-luxury-dark text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Luxury?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Browse our exclusive collection and find the perfect car that matches your style and personality.
          </p>
          <Link to="/products">
            <Button size="lg" className="bg-gold hover:bg-gold-light text-black">
              Explore Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
