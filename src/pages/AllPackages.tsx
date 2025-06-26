
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import PackageCard from "@/components/PackageCard";
import { packagesData } from "@/data/packages";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const AllPackages = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const navigate = useNavigate();

  const handlePackageClick = (packageData) => {
    setSelectedPackage(packageData);
  };

  const handleBackToList = () => {
    setSelectedPackage(null);
  };

  if (selectedPackage) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <WhatsAppButton />
        
        <section className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4">
            <Button 
              onClick={handleBackToList}
              variant="outline" 
              className="mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Packages
            </Button>
            
            <PackageCard 
              {...selectedPackage}
              isDetailed={true}
            />
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <WhatsAppButton />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">All Tour Packages</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover all our amazing Malaysian adventures and experiences
            </p>
          </div>
        </div>
      </section>

      {/* All Packages */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packagesData.map((pkg) => (
              <div key={pkg.id} onClick={() => handlePackageClick(pkg)} className="cursor-pointer">
                <PackageCard {...pkg} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AllPackages;
