
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Star, Phone, Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const featuredPackages = [
    {
      title: "Malaysia Essentials",
      duration: "3 Nights / 4 Days",
      price: "From RM 1,299",
      highlights: ["IBIS STYLE KLCC", "Daily Breakfast", "KL City Tour", "Genting Highlands", "Batu Caves", "Petronas Twin Towers"],
      image: "https://images.unsplash.com/photo-1596414086775-3e321ab08f36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const destinations = [
    {
      name: "Kuala Lumpur",
      image: "https://images.unsplash.com/photo-1596414086775-3e321ab08f36?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Modern metropolis with iconic skyline"
    },
    {
      name: "Langkawi",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Tropical paradise with pristine beaches"
    },
    {
      name: "Penang",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Heritage city with rich culture"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <WhatsAppButton />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60 z-10"></div>
        
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <div className="relative w-full h-full bg-cover bg-center bg-no-repeat" 
               style={{
                 backgroundImage: `url('https://images.unsplash.com/photo-1596414086775-3e321ab08f36?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`
               }}>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              🌴 Your Gateway to <span className="text-emerald-400">Malaysia</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
              Tailor-made journeys. Local expertise. Authentic experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/packages">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg font-semibold transition-all hover:scale-105">
                  Explore Tours
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg font-semibold transition-all hover:scale-105">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Package Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Experience</h2>
            <p className="text-xl text-gray-600">Discover our most popular Malaysian adventure</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {featuredPackages.map((pkg, index) => (
              <Card key={index} className="overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img 
                      src={pkg.image} 
                      alt={pkg.title}
                      className="w-full h-80 md:h-full object-cover"
                    />
                  </div>
                  <CardContent className="md:w-1/2 p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-600">BESTSELLER</span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{pkg.title}</h3>
                    <p className="text-lg text-gray-600 mb-4">{pkg.duration}</p>
                    <div className="text-2xl font-bold text-emerald-600 mb-6">{pkg.price}</div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Highlights:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {pkg.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                            <span className="text-gray-700">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <Button className="bg-emerald-600 hover:bg-emerald-700 flex-1">
                        Book Now
                      </Button>
                      <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Destinations Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Malaysia</h2>
            <p className="text-xl text-gray-600">Discover the beauty of our diverse destinations</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {destinations.map((dest, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative">
                  <img 
                    src={dest.image} 
                    alt={dest.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{dest.name}</h3>
                    <p className="text-gray-200">{dest.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/destinations">
              <Button size="lg" variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                View All Destinations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Explore Malaysia?</h2>
          <p className="text-xl text-emerald-100 mb-8">
            Let our local experts create your perfect Malaysian adventure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                <Mail className="w-5 h-5 mr-2" />
                Get Quote
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-3 text-lg font-semibold">
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
