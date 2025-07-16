
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Star, Phone, Mail, MessageCircle, Target, Eye, Trophy, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import PackageCard from "@/components/PackageCard";
import { packagesData } from "@/data/packages";

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

  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "To provide exceptional, personalized travel experiences that showcase the authentic beauty and rich culture of Malaysia."
    },
    {
      icon: Eye,
      title: "Vision", 
      description: "To be Malaysia's leading inbound destination management company, recognized for our expertise and innovation."
    },
    {
      icon: Trophy,
      title: "Goal",
      description: "To continuously exceed our clients' expectations by delivering world-class service and fostering meaningful cultural exchanges."
    }
  ];

  // Get first 3 packages for popular section
  const popularPackages = packagesData.slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <WhatsAppButton />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60 z-10"></div>
        
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          className="w-full h-full object-cover scale-125"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="https://res.cloudinary.com/dbtkas8kr/video/upload/v1750537303/videoplayback_1_apftn3.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/50"></div>
      </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Your Gateway to <span className="text-brand-400">Malaysia</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
              Tailor-made journeys. Local expertise. Authentic experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/packages">
                <Button size="lg" className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-3 text-lg font-semibold transition-all hover:scale-105">
                  Explore Tours
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-gray-900 px-8 py-3 text-lg font-semibold transition-all hover:scale-105">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Lavish Holidays DMC</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your trusted partner in the travel industry — a fast-growing leader among inbound travel specialists for FITs, groups, and special interest travelers.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Creating Lifelong Memories</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We don't just plan trips — we create lifelong memories with authentic, tailored, and immersive Malaysian experiences. Our team of local experts brings together years of experience and passion for showcasing the true essence of Malaysia.
              </p>
              <div className="flex gap-3">
                <Link to="/about">
                  <Button className="bg-brand-600 hover:bg-brand-700">
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Team planning travel"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-brand-600 text-white p-6 rounded-lg shadow-xl">
                <div className="text-3xl font-bold">5+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Mission, Vision, Goal */}
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-0">
                  <div className="mb-6">
                    <div className="mx-auto w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center">
                      <value.icon className="w-8 h-8 text-brand-600" />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Packages Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Packages</h2>
            <p className="text-xl text-gray-600">Experience our most loved Malaysian adventures</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {popularPackages.map((pkg) => (
              <PackageCard key={pkg.id} {...pkg} />
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/all-packages">
              <Button size="lg" className="bg-brand-600 hover:bg-brand-700">
                View More Packages
              </Button>
            </Link>
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
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Highlights:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {pkg.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-brand-600 rounded-full"></div>
                            <span className="text-gray-700">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <Button className="bg-brand-600 hover:bg-brand-700 flex-1">
                        Book Now
                      </Button>
                      <Button variant="outline" className="border-brand-600 text-brand-600 hover:bg-brand-50">
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
              <Button size="lg" variant="outline" className="border-brand-600 text-brand-600 hover:bg-brand-50">
                View All Destinations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-20 bg-brand-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Explore Malaysia?</h2>
          <p className="text-xl text-brand-100 mb-8">
            Let our local experts create your perfect Malaysian adventure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-brand-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                <Mail className="w-5 h-5 mr-2" />
                Get Quote
              </Button>
            </Link>
            <Link to="/">
              <Button size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-brand-600 px-8 py-3 text-lg font-semibold">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
