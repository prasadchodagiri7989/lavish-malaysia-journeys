
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, MapPin } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Packages", path: "/all-packages" },
    { name: "Destinations", path: "/destinations" },
    { name: "Travel Info", path: "/travel-info" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;
  // Add this inside your component (already present)
  const isHome = location.pathname === '/';


  return (
<nav
  style={{ height: '64px', transform: 'translateZ(0)', willChange: 'transform' }}
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-no-repeat bg-cover bg-center
    ${
      isHome
        ? isScrolled
          ? 'backdrop-blur-md shadow-lg bg-[url("/assets/mobile-navbar.png")] md:bg-[url("/assets/desktop-navbar.png")]'
          : 'bg-transparent'
        : 'backdrop-blur-md shadow-lg bg-[url("/assets/mobile-navbar.png")] md:bg-[url("/assets/desktop-navbar.png")]'
    }
  `}
>



      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/assets/logo.png"
              alt="Lavish Holidays Logo"
              className="h-12 w-auto transition-opacity duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-yellow-600 ${
                  isActive(item.path)
                    ? "text-yellow-600"
                    : !isHome
                      ? "text-white"
                      : !isScrolled
                        ? "text-white"
                        : "text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button size="sm" className="bg-yellow-600 hover:bg-yellow-700">
              Book Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors ${
                !isHome ? 'text-gray-900' : !isScrolled ? 'text-white' : 'text-gray-900'
              }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>

        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 text-base font-medium transition-colors hover:text-yellow-600 ${
                    isActive(item.path) ? "text-yellow-600" : "text-gray-700"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button size="sm" className="bg-yellow-600 hover:bg-yellow-700 w-full">
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
