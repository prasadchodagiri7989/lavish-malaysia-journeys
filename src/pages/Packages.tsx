import Navigation from "@/components/Navigation";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, MapPin, Car, Utensils, Bed, MessageCircle } from "lucide-react";

const Packages = () => {
  const featuredPackage = {
    title: "Malaysia Essentials",
    duration: "3 Nights / 4 Days",
    price: "From RM 1,299",
    originalPrice: "RM 1,599",
    badge: "BESTSELLER",
    image: "https://images.unsplash.com/photo-1596414086775-3e321ab08f36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Hotel stay at IBIS STYLE KLCC",
      "Daily breakfast included",
      "KL City Tour with local guide",
      "Genting Highlands adventure",
      "Batu Caves temple visit",
      "Cable Car experience",
      "Petronas Twin Towers entry",
      "1-Hour Putrajaya city tour",
      "Airport transfers included",
      "Private multilingual guide"
    ],
    inclusions: [
      { icon: Bed, text: "3 nights accommodation" },
      { icon: Utensils, text: "Daily breakfast" },
      { icon: Car, text: "Private transfers" },
      { icon: Users, text: "Professional guide" }
    ]
  };

  const otherPackages = [
    {
      title: "Langkawi Island Escape",
      duration: "4 Nights / 5 Days",
      price: "From RM 1,899",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      highlights: ["Beach resort stay", "Island hopping", "Cable car ride", "Mangrove tour"]
    },
    {
      title: "Penang Heritage Tour",
      duration: "2 Nights / 3 Days",
      price: "From RM 899",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      highlights: ["UNESCO sites", "Street food tour", "Cultural exploration", "George Town walk"]
    },
    {
      title: "Borneo Wildlife Adventure",
      duration: "5 Nights / 6 Days",
      price: "From RM 2,799",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      highlights: ["Orangutan sanctuary", "River cruise", "Rainforest trekking", "Wildlife spotting"],
      badge: "NEW"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <WhatsAppButton />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Tour Packages</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover Malaysia through our carefully curated travel experiences
            </p>
          </div>
        </div>
      </section>

      {/* Featured Package */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Experience</h2>
            <p className="text-xl text-gray-600">Our most popular Malaysian adventure</p>
          </div>
          
          <Card className="overflow-hidden shadow-2xl max-w-6xl mx-auto">
            <div className="lg:flex">
              <div className="lg:w-1/2 relative">
                <img 
                  src={featuredPackage.image} 
                  alt={featuredPackage.title}
                  className="w-full h-80 lg:h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-red-500 hover:bg-red-600">
                  {featuredPackage.badge}
                </Badge>
              </div>
              <CardContent className="lg:w-1/2 p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600 ml-2">(4.9/5)</span>
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{featuredPackage.title}</h3>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">{featuredPackage.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">2-6 people</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-3xl font-bold text-emerald-600">{featuredPackage.price}</span>
                    <span className="text-lg text-gray-500 line-through">{featuredPackage.originalPrice}</span>
                  </div>
                  <p className="text-sm text-gray-600">per person (twin sharing)</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Package Includes:</h4>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {featuredPackage.inclusions.map((inclusion, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <inclusion.icon className="w-4 h-4 text-emerald-600" />
                        <span className="text-sm text-gray-700">{inclusion.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Highlights:</h4>
                  <div className="grid grid-cols-1 gap-2 max-h-40 overflow-y-auto">
                    {featuredPackage.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-600 rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-gray-700">{highlight}</span>
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
        </div>
      </section>

      {/* Other Packages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">More Packages</h2>
            <p className="text-xl text-gray-600">Explore other amazing Malaysian destinations</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPackages.map((pkg, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title}
                    className="w-full h-48 object-cover"
                  />
                  {pkg.badge && (
                    <Badge className="absolute top-4 left-4 bg-blue-500 hover:bg-blue-600">
                      {pkg.badge}
                    </Badge>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.title}</h3>
                  <div className="flex items-center gap-1 mb-4">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">{pkg.duration}</span>
                  </div>
                  
                  <div className="mb-4">
                    {pkg.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 mb-1">
                        <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div>
                        <span className="text-sm text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-2xl font-bold text-emerald-600 mb-4">{pkg.price}</div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 flex-1">
                      View Details
                    </Button>
                    <Button size="sm" variant="outline" className="border-emerald-600 text-emerald-600">
                      <MessageCircle className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">Can't Find What You're Looking For?</h2>
          <p className="text-xl text-emerald-100 mb-8">
            Let us create a custom package just for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
              Request Custom Package
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600">
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Packages;
