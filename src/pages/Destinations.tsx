
import Navigation from "@/components/Navigation";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Camera, Clock } from "lucide-react";
import Footer from "@/components/Footer";
import { useNavigate } from 'react-router-dom';

const Destinations = () => {
    const navigate = useNavigate();

  const destinations = [
    {
      name: "Kuala Lumpur",
      description: "Malaysia's vibrant capital city, where modern skyscrapers meet colonial architecture. Experience the iconic Petronas Twin Towers, bustling street markets, and diverse culinary scene.",
      image: "https://images.unsplash.com/photo-1596414086775-3e321ab08f36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      highlights: ["Petronas Twin Towers", "Batu Caves", "Central Market", "Merdeka Square"],
      duration: "2-3 days",
      bestFor: "Culture & Shopping"
    },
    {
      name: "Langkawi",
      description: "A tropical paradise of 99 islands offering pristine beaches, clear waters, and duty-free shopping. Perfect for relaxation and water activities.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      highlights: ["Pantai Cenang", "Cable Car", "Underwater World", "Island Hopping"],
      duration: "3-4 days",
      bestFor: "Beach & Adventure"
    },
    {
      name: "Penang",
      description: "UNESCO World Heritage site known as the 'Pearl of the Orient'. Famous for its historical Georgetown, street art, and incredible street food scene.",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      highlights: ["George Town", "Penang Hill", "Street Food", "Clan Houses"],
      duration: "2-3 days",
      bestFor: "Heritage & Food"
    },
    {
      name: "Cameron Highlands",
      description: "Cool mountain retreat famous for tea plantations, strawberry farms, and colonial-era charm. Escape the tropical heat in this hill station.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      highlights: ["Tea Plantations", "Strawberry Farms", "Mossy Forest", "Colonial Buildings"],
      duration: "2-3 days",
      bestFor: "Nature & Relaxation"
    },
    {
      name: "Borneo (Sabah & Sarawak)",
      description: "Wild and untamed, Borneo offers incredible wildlife experiences, ancient rainforests, and unique indigenous cultures in Malaysia's largest states.",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      highlights: ["Orangutan Sanctuary", "Mount Kinabalu", "River Cruises", "Longhouse Visits"],
      duration: "5-7 days",
      bestFor: "Wildlife & Adventure"
    },
    {
      name: "Melaka",
      description: "Historic port city blending Malay, Chinese, Indian, and European influences. A UNESCO World Heritage site with rich cultural diversity.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      highlights: ["A Famosa Fort", "Jonker Street", "River Cruise", "Baba Nyonya Heritage"],
      duration: "1-2 days",
      bestFor: "History & Culture"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <WhatsAppButton />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-brandld-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Discover Malaysia</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From bustling cities to pristine beaches, from cultural heritage to natural wonders
            </p>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {destinations.map((destination, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="md:flex">
                  <div className="md:w-2/5">
                    <img 
                      src={destination.image} 
                      alt={destination.name}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <CardContent className="md:w-3/5 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-5 h-5 text-brand-600" />
                      <h3 className="text-2xl font-bold text-gray-900">{destination.name}</h3>
                    </div>
                    
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {destination.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Must-See Attractions:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {destination.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-brand-600 rounded-full"></div>
                            <span className="text-xs text-gray-700">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center mb-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600">{destination.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Camera className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600">{destination.bestFor}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">

      <Button
        size="sm"
        className="bg-brand-600 hover:bg-brand-700 flex-1 text-xs"
        onClick={() => navigate('/all-packages')}
      >
        View Packages
      </Button>

      <Button
        size="sm"
        variant="outline"
        className="border-brand-600 text-brand-600 text-xs"
        onClick={() => navigate('/contact')} 
      >
        Learn More
      </Button>


                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Malaysia Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Malaysia's Regions</h2>
            <p className="text-xl text-gray-600">Discover the diversity across Peninsula Malaysia and Borneo</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Peninsula Malaysia</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">West Coast</h4>
                    <p className="text-gray-600 text-sm">Kuala Lumpur, Penang, Langkawi, Melaka</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">East Coast</h4>
                    <p className="text-gray-600 text-sm">Perhentian Islands, Redang, Terengganu</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Central Highlands</h4>
                    <p className="text-gray-600 text-sm">Cameron Highlands, Genting Highlands</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Malaysian Borneo</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brandld-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Sabah</h4>
                    <p className="text-gray-600 text-sm">Kota Kinabalu, Mount Kinabalu, Sipadan</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brandld-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Sarawak</h4>
                    <p className="text-gray-600 text-sm">Kuching, Mulu Caves, Orangutan Sanctuaries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Explore These Destinations?</h2>
          <p className="text-xl text-brand-100 mb-8">
            Let us create the perfect itinerary for your Malaysian adventure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-brand-600 hover:bg-gray-100">
              Plan My Trip
            </Button>
            <Button size="lg" variant="outline" className="border-white text-brand hover:bg-white hover:text-brandld-600">
              View All Packages
            </Button>
          </div>
        </div>
      </section>
    <Footer />
    </div>
  );
};

export default Destinations;
