
import { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Bouquets', path: '/bouquets' },
    { name: 'Weddings & Events', path: '/weddings' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => navigate('/')}
          >
            <Heart className="h-6 w-6 text-dusty fill-dusty/20 group-hover:scale-110 transition-transform" />
            <span className="font-playfair font-semibold text-xl text-foreground">
              Petal & Stem
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => navigate(item.path)}
                  className={`font-jakarta text-sm font-medium transition-colors hover:text-dusty ${
                    isActive(item.path) ? 'text-dusty' : 'text-foreground'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="hidden md:block">
            <Button 
              className="bg-forest hover:bg-forest-600 text-white font-jakarta font-medium"
              onClick={() => window.open('https://wa.me/254700000000', '_blank')}
            >
              Order via WhatsApp
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-dusty"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  navigate(item.path);
                  setIsOpen(false);
                }}
                className={`block px-3 py-2 text-base font-medium font-jakarta transition-colors hover:text-dusty w-full text-left ${
                  isActive(item.path) ? 'text-dusty' : 'text-foreground'
                }`}
              >
                {item.name}
              </button>
            ))}
            <div className="px-3 py-2">
              <Button 
                className="w-full bg-forest hover:bg-forest-600 text-white font-jakarta font-medium"
                onClick={() => window.open('https://wa.me/254700000000', '_blank')}
              >
                Order via WhatsApp
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
