
import Navigation from "@/components/Navigation";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Trophy, Users, MapPin, Award } from "lucide-react";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "To provide exceptional, personalized travel experiences that showcase the authentic beauty and rich culture of Malaysia while ensuring every journey creates unforgettable memories."
    },
    {
      icon: Eye,
      title: "Vision",
      description: "To be Malaysia's leading inbound destination management company, recognized for our expertise, innovation, and commitment to sustainable tourism practices."
    },
    {
      icon: Trophy,
      title: "Goal",
      description: "To continuously exceed our clients' expectations by delivering world-class service, fostering meaningful cultural exchanges, and promoting Malaysia as a premier travel destination."
    }
  ];

  const stats = [
    { number: "1000+", label: "Happy Travelers" },
    { number: "50+", label: "Tour Packages" },
    { number: "15+", label: "Destinations" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <WhatsAppButton />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-brand-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">About Lavish Holidays DMC</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your trusted partner in the travel industry — a fast-growing leader among inbound travel specialists for FITs, groups, and special interest travelers.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Creating Lifelong Memories</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We don't just plan trips — we create lifelong memories with authentic, tailored, and immersive Malaysian experiences. Our team of local experts brings together years of experience and passion for showcasing the true essence of Malaysia.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From the bustling streets of Kuala Lumpur to the pristine beaches of Langkawi, from the cultural heritage of Penang to the natural wonders of Borneo, we ensure every moment of your journey is carefully crafted to exceed your expectations.
              </p>
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
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Foundation</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-0">
                    <div className="mb-6">
                      <div className="mx-auto w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center">
                        <value.icon className="w-8 h-8 text-brand-600" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="bg-brand-600 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-12">Our Achievements</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-white">
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-brand-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mt-20">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Why Choose Lavish Holidays DMC?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: "Local Expertise",
                  description: "Deep local knowledge and connections for authentic experiences"
                },
                {
                  icon: MapPin,
                  title: "Personalized Service",
                  description: "Tailored itineraries designed specifically for your interests"
                },
                {
                  icon: Award,
                  title: "Quality Assurance",
                  description: "Carefully selected partners and accommodations for your comfort"
                }
              ].map((feature, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <feature.icon className="w-12 h-12 text-brand-600 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
