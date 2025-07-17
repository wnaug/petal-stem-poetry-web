
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Sparkles, Users, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const popularBouquets = [
    {
      name: "Romantic Blush",
      description: "Soft pink roses with eucalyptus",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=500&fit=crop",
      quote: "Love is the flower you've got to let grow.",
      price: "KSH 3,500"
    },
    {
      name: "Garden Poetry",
      description: "Mixed wildflowers and herbs",
      image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=500&fit=crop",
      quote: "Where flowers bloom, so does hope.",
      price: "KSH 2,800"
    },
    {
      name: "Eternal Grace",
      description: "White lilies and baby's breath",
      image: "https://images.unsplash.com/photo-1487070183336-b61283659ffa?w=400&h=500&fit=crop",
      quote: "In memory, love lives forever.",
      price: "KSH 4,200"
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      text: "The wedding arrangements were absolutely magical. Every detail was perfect, and our guests are still talking about them!",
      occasion: "Wedding"
    },
    {
      name: "James K.",
      text: "Ordered a sympathy arrangement last minute. The care and attention they put into it brought comfort during a difficult time.",
      occasion: "Sympathy"
    },
    {
      name: "Priya S.",
      text: "Their anniversary bouquet made my wife cry happy tears. The personal note and flower meanings were so thoughtful.",
      occasion: "Anniversary"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dusty-50 via-ivory-100 to-taupe-50" />
        
        {/* Background flowers */}
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=1200&h=800&fit=crop"
            alt="Beautiful flowers"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Say It With Flowers
            </h1>
            <p className="font-jakarta text-xl sm:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto">
              Curated arrangements for love, memory, and celebration
            </p>
            <p className="poetry-text text-lg mb-8">
              "A flower does not think of competing with the flower next to it. It just blooms."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-dusty hover:bg-dusty-600 text-white font-jakarta font-medium text-lg px-8 py-4"
                onClick={() => navigate('/bouquets')}
              >
                Explore Bouquets
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-forest text-forest hover:bg-forest hover:text-white font-jakarta font-medium text-lg px-8 py-4"
                onClick={() => navigate('/weddings')}
              >
                Weddings & Events
              </Button>
            </div>
          </div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 animate-float">
          <Heart className="h-8 w-8 text-dusty/40" />
        </div>
        <div className="absolute bottom-32 right-16 animate-float" style={{ animationDelay: '1s' }}>
          <Sparkles className="h-6 w-6 text-forest/40" />
        </div>
      </section>

      {/* Popular Bouquets */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Popular Bouquets
            </h2>
            <p className="font-jakarta text-lg text-muted-foreground max-w-2xl mx-auto">
              Each arrangement tells a story, crafted with intention and care
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularBouquets.map((bouquet, index) => (
              <Card 
                key={bouquet.name}
                className="group cursor-pointer border-border hover:shadow-xl transition-all duration-300 overflow-hidden"
                onClick={() => navigate('/bouquets')}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={bouquet.image}
                    alt={bouquet.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="poetry-text text-sm">{bouquet.quote}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-playfair text-2xl font-semibold text-foreground mb-2">
                    {bouquet.name}
                  </h3>
                  <p className="font-jakarta text-muted-foreground mb-3">
                    {bouquet.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-jakarta font-semibold text-forest text-lg">
                      {bouquet.price}
                    </span>
                    <Button 
                      size="sm"
                      className="bg-dusty hover:bg-dusty-600 text-white font-jakarta"
                    >
                      Order Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-ivory-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="font-jakarta text-lg text-muted-foreground mb-6">
                Born from a passion for the poetry of petals, Petal & Stem began as a dream to bring 
                the artistry of flowers to life's most meaningful moments.
              </p>
              <p className="font-jakarta text-lg text-muted-foreground mb-6">
                Located in the heart of Nairobi, our studio is where nature's beauty meets intentional design. 
                Every arrangement is curated with love, crafted with care, and delivered with purpose.
              </p>
              <p className="poetry-text text-lg mb-8">
                "We don't just arrange flowers; we arrange emotions."
              </p>
              <Button 
                variant="outline"
                className="border-forest text-forest hover:bg-forest hover:text-white font-jakarta font-medium"
                onClick={() => navigate('/about')}
              >
                Learn More About Us
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=700&fit=crop"
                  alt="Florist at work"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-dusty/20 rounded-full animate-float" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Stories from the Heart
            </h2>
            <p className="font-jakarta text-lg text-muted-foreground max-w-2xl mx-auto">
              Every arrangement tells a story. Here are some of our favorites.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Heart className="h-5 w-5 text-dusty mr-2" />
                    <span className="font-jakarta text-sm font-medium text-forest">
                      {testimonial.occasion}
                    </span>
                  </div>
                  <p className="font-jakarta text-muted-foreground mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <p className="font-jakarta font-semibold text-foreground">
                    — {testimonial.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-dusty-100 to-ivory-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Ready to Say It With Flowers?
          </h2>
          <p className="font-jakarta text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether it's love, celebration, or remembrance, let us help you find the perfect arrangement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-forest hover:bg-forest-600 text-white font-jakarta font-medium text-lg px-8 py-4"
              onClick={() => window.open('https://wa.me/254700000000', '_blank')}
            >
              <Phone className="mr-2 h-5 w-5" />
              Order via WhatsApp
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-dusty text-dusty hover:bg-dusty hover:text-white font-jakarta font-medium text-lg px-8 py-4"
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
