
import Navigation from "@/components/Navigation";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Plane, FileText, Shield, DollarSign, Thermometer, MapPin, Clock, Utensils } from "lucide-react";
import Footer from "@/components/Footer";
const TravelInfo = () => {
  const smartTips = [
    {
      icon: Plane,
      title: "Visa Requirements",
      badge: "UPDATED",
      content: "Indian tourists enjoy visa-free entry to Malaysia until December 2026. Stay up to 30 days for tourism purposes. Passport must be valid for at least 6 months.",
      important: true
    },
    {
      icon: Shield,
      title: "Health & Safety",
      content: "No COVID-19 restrictions or quarantine required. Malaysia is generally safe for tourists. Standard travel insurance recommended.",
      important: false
    },
    {
      icon: FileText,
      title: "MDAC Form",
      content: "Digital Arrival Card (MDAC) must be completed online 3 days before arrival. Submit at www.digital-arrival-card.gov.my",
      important: true
    },
    {
      icon: DollarSign,
      title: "Tourism Tax",
      content: "RM10 per room per night applies to all foreign tourists. Usually collected at hotel check-in. Keep receipts for records.",
      important: true
    }
  ];

  const essentialInfo = [
    {
      category: "Currency & Payments",
      items: [
        "Malaysian Ringgit (RM) - Current rate: 1 USD ≈ RM 4.70",
        "Credit cards widely accepted in cities",
        "Cash preferred for street food and local markets",
        "ATMs available everywhere in urban areas"
      ]
    },
    {
      category: "Climate & Weather",
      items: [
        "Tropical climate: Hot and humid year-round",
        "Temperature: 24°C - 35°C (75°F - 95°F)",
        "Rainy season: November to March (East Coast)",
        "Best time to visit: April to October"
      ]
    },
    {
      category: "Transportation",
      items: [
        "KLIA & KLIA2 are main international airports",
        "Excellent public transport in KL (LRT, MRT, Monorail)",
        "Grab (ride-hailing) widely available",
        "Domestic flights connect major destinations"
      ]
    },
    {
      category: "Communication",
      items: [
        "English widely spoken in tourist areas",
        "Free WiFi in most hotels and cafes",
        "Local SIM cards available at airport",
        "International roaming usually works well"
      ]
    }
  ];

  const culturalTips = [
    {
      title: "Dress Code",
      description: "Modest dress required for religious sites. Cover shoulders and knees. Remove shoes when entering temples and mosques."
    },
    {
      title: "Tipping Culture",
      description: "Tipping not mandatory but appreciated. 10% at restaurants if service charge not included. Round up taxi fares."
    },
    {
      title: "Food Etiquette",
      description: "Try everything! Street food is generally safe. Use right hand for eating. Halal food widely available."
    },
    {
      title: "Local Customs",
      description: "Respect local traditions. Photography restrictions at some religious sites. Friday prayers time affects business hours."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <WhatsAppButton />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-brand-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Travel Information</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Essential tips and smart information for your Malaysian adventure
            </p>
          </div>
        </div>
      </section>

      {/* Smart Tips - Key Information */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Smart Tips</h2>
            <p className="text-xl text-gray-600">Important information for Indian travelers</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {smartTips.map((tip, index) => (
              <Card key={index} className={`hover:shadow-xl transition-all duration-300 ${tip.important ? 'ring-2 ring-brand-200' : ''}`}>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-brand-100 p-3 rounded-lg">
                      <tip.icon className="w-6 h-6 text-brand-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{tip.title}</h3>
                        {tip.badge && (
                          <Badge className="bg-red-500 hover:bg-red-600 text-xs">
                            {tip.badge}
                          </Badge>
                        )}
                      </div>
                      <p className="text-gray-700 leading-relaxed">{tip.content}</p>
                    </div>
                  </div>
                  {tip.important && (
                    <div className="bg-brand-50 border border-brand-200 rounded-lg p-3 mt-4">
                      <p className="text-brand-800 text-sm font-medium">⚠️ Important: Please ensure compliance before travel</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Essential Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Essential Information</h2>
            <p className="text-xl text-gray-600">Everything you need to know for a smooth trip</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {essentialInfo.map((section, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">{section.category}</h3>
                  <div className="space-y-3">
                    {section.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-brand-600 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Tips - Accordion */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Cultural Tips</h2>
            <p className="text-xl text-gray-600">Respect local customs and make the most of your experience</p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {culturalTips.map((tip, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="text-lg font-semibold text-gray-900">{tip.title}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-gray-700 leading-relaxed">{tip.description}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Quick Reference */}
      <section className="py-20 bg-brand-600"  style={{ backgroundImage: "url('/assets/ready-to-explore.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Quick Reference</h2>
            <p className="text-xl text-brand-100">Keep these handy during your trip</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Time Zone",
                info: "GMT +8 (No daylight saving)"
              },
              {
                icon: Thermometer,
                title: "Weather",
                info: "Always pack light rain jacket"
              },
              {
                icon: Utensils,
                title: "Food",
                info: "Try local dishes - they're amazing!"
              }
            ].map((item, index) => (
              <Card key={index} className="bg-white/10 border-white/20 hover:bg-white/20 transition-all">
                <CardContent className="p-6 text-center">
                  <item.icon className="w-12 h-12 text-white mb-4 mx-auto" />
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-brand-100">{item.info}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-20 bg-red-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Emergency Contacts</h2>
            <p className="text-lg text-gray-600">Important numbers to keep handy</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { service: "Emergency Services", number: "999", description: "Police, Fire, Ambulance" },
              { service: "Tourist Police", number: "03-2149 6593", description: "Assistance for tourists" },
              { service: "Our 24/7 Hotline", number: "+60 12-345 6789", description: "Lavish Holidays DMC" },
              { service: "Indian High Commission", number: "03-2093 3510", description: "KL, Malaysia" }
            ].map((contact, index) => (
              <Card key={index} className="border-red-200">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-1">{contact.service}</h3>
                  <p className="text-2xl font-bold text-red-600 mb-1">{contact.number}</p>
                  <p className="text-sm text-gray-600">{contact.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default TravelInfo;
