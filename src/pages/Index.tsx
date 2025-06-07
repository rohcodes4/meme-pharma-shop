import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import PopularProductsTicker from '../components/PopularProductsTicker';
import Header from '../components/Header';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const Index = () => {
  const featuredProducts = products.slice(0, 3);

  const testimonials = [
    {
      name: "DegenerateApe420",
      handle: "@DegenApe420",
      text: "Chadcaine got me through a 96-hour chart watching session. Caught a 50x on $PEPE. This stuff is pure alpha fuel! 🚀",
      avatar: "🦍"
    },
    {
      name: "DiamondHandsOnly",
      handle: "@DiamondHands",
      text: "Wojakatin saved me from panic selling during the last crash. Turned my paper hands into pure diamond. Never selling again! 💎🙌",
      avatar: "💎"
    },
    {
      name: "MoonBoyMaxi",
      handle: "@MoonBoy",
      text: "Pepesgreens + Elon Tabs combo hit different. Made 10x on three different shitcoins in one week. This is not financial advice but... 🌙",
      avatar: "🌙"
    }
  ];

  return (
    <div className="min-h-screen bg-crypto-dark">
      <Header />      
      
      {/* Hero Section */}
      <section className="relative py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-15" />
        <div className="container mx-auto text-center relative z-10 max-w-6xl">
          <h1 className="text-5xl md:text-8xl font-bold mb-8 bg-crypto-gradient bg-clip-text text-transparent animate-float">
            Pharmemecy
          </h1>
          <p className="text-xl md:text-3xl text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed">
            The ultimate <span className="text-crypto-green font-bold">degen pharmacy</span> for crypto chads
          </p>
          {/* <p className="text-lg md:text-xl text-purple-300 mb-12 max-w-3xl mx-auto">
            Premium supplements to keep you diamond-handed through bull runs, bear markets, and 100x moonshots. 
            <span className="text-crypto-green"> WAGMI! 🚀</span>
          </p> */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-6">
            <Link to="/products">
              <Button className="crypto-button text-xl px-12 py-6 text-black font-bold hover:shadow-2xl">
                Start Aping 🦍
              </Button>
            </Link>
            {/* <Button variant="outline" className="text-xl px-12 py-6 border-2 border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-black transition-all duration-300">
              Learn the Alpha 📈
            </Button> */}
          </div>
        </div>
      </section>

      {/* Popular Products Ticker */}
      <PopularProductsTicker />

      {/* Featured Products */}
      <section className="py-10 px-4 bg-gradient-to-b from-transparent to-purple-900/20">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-5xl font-bold text-center mb-6 text-crypto-green">
            Chad Tier Products
          </h2>
          <p className="text-center text-gray-300 text-xl mb-16 max-w-2xl mx-auto">
            Handpicked by the most alpha degens in the space 💊
          </p>
          <div className="grid md:grid-cols-3 gap-10">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-16">
            <Link to="/products">
              <Button className="crypto-button text-lg px-10 py-4">
                View All Alpha Products 🔥
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-crypto-darker via-gray-900 to-crypto-darker">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold text-center mb-6 text-crypto-green">
            Degen Testimonials
          </h2>
          <p className="text-center text-gray-300 text-xl mb-16">
            Real reviews from real apes who made it 🦍💎
          </p>
          <div className="grid md:grid-cols-1 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="crypto-card border-crypto-green/30 hover:border-crypto-green/60 transition-all duration-300 hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="text-4xl mr-4">{testimonial.avatar}</div>
                    <div>
                      <h4 className="font-bold text-crypto-green text-lg">{testimonial.name}</h4>
                      <p className="text-purple-300 text-sm">{testimonial.handle}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900/30 via-crypto-dark to-purple-900/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold text-center mb-16 text-crypto-green">
            Why Degens Choose Us
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="crypto-card p-10 text-center hover:scale-105 transition-all duration-300 border-purple-500/30">
              <div className="text-6xl mb-6">💎</div>
              <h3 className="text-2xl font-bold text-crypto-green mb-6">Diamond Hands Formula</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Scientifically engineered for hodlers who never sell. Even when it dumps 90%.
              </p>
            </div>
            {/* <div className="crypto-card p-10 text-center hover:scale-105 transition-all duration-300 border-crypto-green/30">
              <div className="text-6xl mb-6">🚀</div>
              <h3 className="text-2xl font-bold text-crypto-green mb-6">Moon Mission Ready</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Boost your aping performance to astronomical levels. Next stop: Mars.
              </p>
            </div> */}
            <div className="crypto-card p-10 text-center hover:scale-105 transition-all duration-300 border-purple-500/30">
              <div className="text-6xl mb-6">🔥</div>
              <h3 className="text-2xl font-bold text-crypto-green mb-6">Pure Chad Energy</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Feel the unstoppable power of a true crypto gigachad. No paper hands allowed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 px-4 bg-gradient-to-r from-crypto-green/10 to-purple-500/10">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-crypto-green">
            Ready to Ascend? 🚀
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Join thousands of degens who've leveled up their trading game. 
            <span className="text-purple-300"> Don't stay poor, fren.</span>
          </p>
          <Link to="/products">
            <Button className="crypto-button text-2xl px-16 py-8 font-bold">
              Let's Fucking Go! 🦍💎
            </Button>
          </Link>
        </div>
      </section> */}

        {/* About Section */}
      <section className=" px-4 bg-gradient-to-r from-purple-900/30 via-crypto-dark to-purple-900/30">
        <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-center mb-8  text-crypto-green">
            About Pharmemecy
          </h1>
          
          <Card className="crypto-card mb-8">
            <CardContent className="p-8">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Welcome to Pharmemecy, the ultimate destination for crypto traders who refuse to settle for ordinary supplements. 
                We understand that diamond hands require diamond-grade nutrition, and paper hands simply won't cut it in this game.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Our premium line of crypto-inspired supplements is specifically formulated for the modern trader. Whether you're 
                hodling through a bear market or riding the waves to the moon, Pharmemecy has the perfect blend to keep you sharp, 
                focused, and ready for anything the market throws at you.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="crypto-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-crypto-green mb-4">Our Mission</h3>
                <p className="text-gray-400">
                  To empower crypto traders with premium supplements that enhance focus, energy, and decision-making. 
                  We believe every trader deserves to perform at their peak, especially during those crucial market moments.
                </p>
              </CardContent>
            </Card>

            <Card className="crypto-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-crypto-green mb-4">Why Choose Us?</h3>
                <p className="text-gray-400">
                  We're not just another supplement company. We're traders, by traders, for traders. 
                  Every product is tested by real crypto enthusiasts who understand the demands of the market.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="crypto-card">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-crypto-green mb-4">Join the Community</h3>
              <p className="text-gray-400 mb-6">
                Ready to level up your trading game? Join thousands of successful traders who trust Pharmemecy 
                to keep them sharp and focused. Remember: weak hands sell, but diamond hands hold forever.
              </p>
              <p className="text-crypto-green font-bold text-xl">WAGMI 🚀💎🙌</p>
            </CardContent>
          </Card>
        </div>
      </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-800 bg-crypto-darker">
        <div className="container mx-auto text-center">
          <p className="text-gray-400 text-lg">
            &copy; 2025 Pharmemecy. All rights reserved. 
            <span className="text-crypto-green"> WAGMI 🚀 Not financial advice, just pure alpha.</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
