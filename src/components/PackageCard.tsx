
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, MapPin, MessageCircle, IndianRupee } from "lucide-react";

interface PackageCardProps {
  title: string;
  priceDetails: {
    adult: {
      price: string;
      age: string;
    };
    child: {
      price: string;
      age: string;
    };
  };
  location: {
    description: string;
    highlights: string[];
  };
  tourDetails: {
    duration: string;
    includes: string[];
    importantNote?: string;
  };
  departureSchedule: {
    time: string;
  };
  activities: string[];
  image?: string;
  badge?: string;
  isDetailed?: boolean;
  onBookNow?: () => void;
}

const PackageCard = ({ 
  title, 
  priceDetails, 
  location, 
  tourDetails, 
  departureSchedule, 
  activities,
  image = "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  badge,
  isDetailed = false,
  onBookNow
}: PackageCardProps) => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "917989152819";
    const message = `Hi! I'm interested in the "${title}" package. Can you provide more details?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    if (onBookNow) onBookNow();
  };

  if (isDetailed) {
    return (
      <div className="max-w-4xl mx-auto">
        <Card className="overflow-hidden shadow-2xl">
          <div className="relative">
            <img 
              src={image} 
              alt={title}
              className="w-full h-64 object-cover"
            />
            {badge && (
              <Badge className="absolute top-4 left-4 bg-red-500 hover:bg-red-600">
                {badge}
              </Badge>
            )}
          </div>
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{title}</h2>
            
            {/* Pricing */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Child Price</h4>
                <div className="text-2xl font-bold text-blue-600">{priceDetails.child.price}</div>
                <div className="text-sm text-gray-600">{priceDetails.child.age}</div>
              </div>
            </div>

            {/* Tour Details */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-gray-500" />
                <span className="font-semibold">{tourDetails.duration}</span>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-5 h-5 text-gray-500" />
                <span>Departure: {departureSchedule.time}</span>
              </div>
            </div>

            {/* Location */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Location
              </h4>
              <p className="text-gray-700 mb-3">{location.description}</p>
              <div className="grid grid-cols-1 gap-2">
                {location.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-brand-600 rounded-full"></div>
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Includes */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">Tour Includes:</h4>
              <div className="grid grid-cols-1 gap-2">
                {tourDetails.includes.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-brand-600 rounded-full"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              {tourDetails.importantNote && (
                <div className="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-400">
                  <p className="text-sm text-yellow-800"><strong>Important Note:</strong> {tourDetails.importantNote}</p>
                </div>
              )}
            </div>

            {/* Activities */}
            <div className="mb-8">
              <h4 className="font-semibold text-gray-900 mb-3">Activities:</h4>
              <div className="flex flex-wrap gap-2">
                {activities.map((activity, idx) => (
                  <Badge key={idx} variant="secondary" className="bg-gray-100 text-gray-700">
                    {activity}
                  </Badge>
                ))}
              </div>
            </div>

            <Button 
              onClick={handleWhatsAppClick}
              className="bg-brand-500 hover:bg-brand-600 text-white flex-1"

            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Book Now via WhatsApp
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover"
        />
        {badge && (
          <Badge className="absolute top-4 left-4 bg-red-500 hover:bg-red-600">
            {badge}
          </Badge>
        )}
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        
        <div className="flex items-center gap-1 mb-4">
          <Clock className="w-4 h-4 text-gray-500" />
          <span className="text-gray-600 text-sm">{tourDetails.duration}</span>
        </div>

        <div className="mb-4">
          <div className="text-sm text-gray-700 line-clamp-2">{location.description}</div>
        </div>

        <div className="flex gap-2">
          <Button 
            onClick={handleWhatsAppClick}
            className="bg-brand-500 hover:bg-brand-600 text-white flex-1"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Book Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PackageCard;
