
import React from 'react';
import Header from '../components/Header';
import { Card, CardContent } from '../components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen bg-crypto-dark">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-center mb-8 bg-crypto-gradient bg-clip-text text-transparent">
            About PHARMEMESY
          </h1>
          
          <Card className="crypto-card mb-8">
            <CardContent className="p-8">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Welcome to PHARMEMESY, the ultimate destination for crypto traders who refuse to settle for ordinary supplements. 
                We understand that diamond hands require diamond-grade nutrition, and paper hands simply won't cut it in this game.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Our premium line of crypto-inspired supplements is specifically formulated for the modern trader. Whether you're 
                hodling through a bear market or riding the waves to the moon, PHARMEMESY has the perfect blend to keep you sharp, 
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
                Ready to level up your trading game? Join thousands of successful traders who trust PHARMEMESY 
                to keep them sharp and focused. Remember: weak hands sell, but diamond hands hold forever.
              </p>
              <p className="text-crypto-green font-bold text-xl">WAGMI 🚀💎🙌</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
