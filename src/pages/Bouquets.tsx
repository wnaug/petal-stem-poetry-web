
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Gift, Star, Flower2, Phone } from 'lucide-react';

const Bouquets = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Bouquets', icon: Flower2 },
    { id: 'love', name: 'Love & Romance', icon: Heart },
    { id: 'celebration', name: 'Celebration', icon: Star },
    { id: 'sympathy', name: 'Sympathy & Memory', icon: Gift },
    { id: 'corporate', name: 'Corporate', icon: Gift },
  ];

  const bouquets = [
    {
      id: 1,
      name: "Romantic Blush",
      category: "love",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=500&fit=crop",
      price: "KSH 3,500",
      description: "Soft pink roses with eucalyptus and baby's breath",
      quote: "Love is the flower you've got to let grow.",
      meaning: "Pink roses symbolize gratitude, appreciation, and admiration."
    },
    {
      id: 2,
      name: "Garden Poetry",
      category: "celebration",
      image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=500&fit=crop",
      price: "KSH 2,800",
      description: "Mixed wildflowers and seasonal herbs",
      quote: "Where flowers bloom, so does hope.",
      meaning: "Wildflowers represent joy, spontaneity, and the beauty of nature."
    },
    {
      id: 3,
      name: "Eternal Grace",
      category: "sympathy",
      image: "https://images.unsplash.com/photo-1487070183336-b61283659ffa?w=400&h=500&fit=crop",
      price: "KSH 4,200",
      description: "White lilies and chrysanthemums with greenery",
      quote: "In memory, love lives forever.",
      meaning: "White lilies symbolize rebirth and the restored innocence of the soul."
    },
    {
      id: 4,
      name: "Sunset Serenade",
      category: "love",
      image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=400&h=500&fit=crop",
      price: "KSH 4,500",
      description: "Orange roses and yellow sunflowers",
      quote: "You are my sunshine in bloom.",
      meaning: "Sunflowers represent loyalty, adoration, and long-lasting love."
    },
    {
      id: 5,
      name: "Corporate Elegance",
      category: "corporate",
      image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=400&h=500&fit=crop",
      price: "KSH 5,200",
      description: "White orchids and green anthuriums",
      quote: "Success blooms with elegance.",
      meaning: "Orchids symbolize strength, luxury, and refined beauty."
    },
    {
      id: 6,
      name: "Birthday Burst",
      category: "celebration",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop",
      price: "KSH 3,200",
      description: "Colorful gerberas and alstroemeria",
      quote: "Another year, another bloom.",
      meaning: "Gerberas represent cheerfulness, innocence, and purity."
    },
    {
      id: 7,
      name: "Peaceful Memories",
      category: "sympathy",
      image: "https://images.unsplash.com/photo-1455377033406-1d49b3e6e964?w=400&h=500&fit=crop",
      price: "KSH 3,800",
      description: "White roses and blue delphiniums",
      quote: "Gone but never forgotten.",
      meaning: "White roses symbolize remembrance, honor, and spiritual love."
    },
    {
      id: 8,
      name: "Anniversary Dreams",
      category: "love",
      image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=400&h=500&fit=crop",
      price: "KSH 4,800",
      description: "Red roses with gold accents",
      quote: "Love grows more beautiful with time.",
      meaning: "Red roses are the ultimate symbol of passionate, enduring love."
    },
    {
      id: 9,
      name: "Executive Choice",
      category: "corporate",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=500&fit=crop",
      price: "KSH 6,500",
      description: "Premium white lilies and proteas",
      quote: "Excellence in every detail.",
      meaning: "Proteas represent courage, diversity, and transformation."
    }
  ];

  const filteredBouquets = selectedCategory === 'all' 
    ? bouquets 
    : bouquets.filter(bouquet => bouquet.category === selectedCategory);

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-ivory-50 to-dusty-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-5xl sm:text-6xl font-bold text-foreground mb-6">
            Our Bouquet Collection
          </h1>
          <p className="font-jakarta text-xl text-muted-foreground max-w-3xl mx-auto">
            Each arrangement is thoughtfully curated to capture the perfect emotion for your special moment
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  className={`font-jakarta font-medium ${
                    selectedCategory === category.id 
                      ? "bg-forest text-white hover:bg-forest-600" 
                      : "border-forest text-forest hover:bg-forest hover:text-white"
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  {category.name}
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bouquets Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBouquets.map((bouquet) => (
              <Card 
                key={bouquet.id}
                className="group cursor-pointer border-border hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={bouquet.image}
                    alt={bouquet.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Hover overlay with quote and meaning */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <p className="poetry-text text-sm mb-2 italic">
                        "{bouquet.quote}"
                      </p>
                      <p className="font-jakarta text-xs text-white/80">
                        {bouquet.meaning}
                      </p>
                    </div>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-forest font-jakarta font-medium">
                      {categories.find(cat => cat.id === bouquet.category)?.name}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="font-playfair text-2xl font-semibold text-foreground mb-2">
                    {bouquet.name}
                  </h3>
                  <p className="font-jakarta text-muted-foreground mb-4">
                    {bouquet.description}
                  </p>
                  
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-jakarta font-bold text-forest text-xl">
                      {bouquet.price}
                    </span>
                    <div className="flex gap-2">
                      <Button 
                        size="sm"
                        variant="outline"
                        className="border-dusty text-dusty hover:bg-dusty hover:text-white font-jakarta"
                        onClick={() => window.open('https://wa.me/254700000000', '_blank')}
                      >
                        <Phone className="h-4 w-4 mr-1" />
                        WhatsApp
                      </Button>
                      <Button 
                        size="sm"
                        className="bg-dusty hover:bg-dusty-600 text-white font-jakarta"
                      >
                        Order Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Quote Section */}
      <section className="py-20 bg-dusty-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-4xl font-bold text-foreground mb-6">
            Don't See What You're Looking For?
          </h2>
          <p className="font-jakarta text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We specialize in custom arrangements. Share your vision with us, and we'll create something uniquely yours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-forest hover:bg-forest-600 text-white font-jakarta font-medium"
              onClick={() => window.open('https://wa.me/254700000000', '_blank')}
            >
              <Phone className="mr-2 h-5 w-5" />
              Custom Order via WhatsApp
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-dusty text-dusty hover:bg-dusty hover:text-white font-jakarta font-medium"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bouquets;
