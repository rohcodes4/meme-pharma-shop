
import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Chadcaine',
    description: 'Pure uncut alpha energy for degens who never sleep. When you need to stay up for 72 hours straight watching charts and hunting for the next 100x gem. Diamond hands guaranteed.',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=500&h=500&fit=crop',
    category: 'Energy',
    inStock: true,
    features: ['24/7 Chart Watching Mode', 'Diamond Hands Locked', 'Chad Energy Maximized', 'Moon Mission Fuel']
  },
  {
    id: '2',
    name: 'Pepesgreens',
    description: 'Rare Pepe essence extracted from the dankest memes. Feel good, ape better. The secret sauce that turns paper hands into diamond hands. Pure hopium in pill form.',
    price: 42.0,
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=500&h=500&fit=crop',
    category: 'Wellness',
    inStock: true,
    features: ['Rare Pepe Extract', 'Dank Meme Magic', 'Green Dildo Gains', 'Comfy Wojak Vibes']
  },
  {
    id: '3',
    name: 'Elon Tabs',
    description: 'Big brain pills for galaxy-brain plays. Channel the energy of papa Elon and make moves that send Dogecoin to Mars. Perfect for those 4AM "this will change everything" tweets.',
    price: 420.69,
    image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=500&h=500&fit=crop',
    category: 'Cognitive',
    inStock: true,
    features: ['Galaxy Brain Mode', 'Mars Mission Ready', 'Doge Spirit Activated', 'Tweet Storm Energy']
  },
  {
    id: '4',
    name: 'Wojakatin',
    description: 'Anti-rekt formula for when the market dumps your bags into oblivion. Transform from crying wojak to chad wojak. Essential for surviving bear markets and rugpulls.',
    price: 33.33,
    image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500&h=500&fit=crop',
    category: 'Mood',
    inStock: true,
    features: ['Anti-Rekt Protection', 'Chad Wojak Mode', 'Infinite Hopium Supply', 'WAGMI Energy Boost']
  }
];
