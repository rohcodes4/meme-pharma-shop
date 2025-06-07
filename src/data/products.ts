
import { Product } from '../types';
import chad from "../assets/chad.jpg";
import elon from "../assets/elon.jpg";
import meme from "../assets/Meme.jpg";
import pepe from "../assets/Pepe.jpg";
import tren from "../assets/tren.jpg";
import woja from "../assets/woja.jpg";

export const products: Product[] = [
  {
    id: '1',
    name: 'Chadcaine',
    tagline:'Snort your way to alpha status.',
    description: 'A high-purity meme stimulant packaged in a sleek resealable bag labeled “Chadcaine – Only for Gigachads.” \nPerfect for degens who believe confidence is currency.',
    form:'White powder in a ziplock with a gold-embossed label.\nSide warning: May cause spontaneous tweeting and delusions of generational wealth.',
    use:'Bump before buying the top. Flex during the crash.',
    price: 10000.00,
    image: chad,
    category: 'Energy',
    inStock: true,
    features: ['24/7 Chart Watching Mode', 'Diamond Hands Locked', 'Chad Energy Maximized', 'Moon Mission Fuel']
  },
  {
    id: '2',
    name: 'Pepesgreens',
    tagline:'Certified trench gas.',
    description: 'Sticky cartoonish buds sealed in a dank bag featuring Pepe with red eyes.\nLab-tested for max chill and zero utility.',
    form:`Vacuum-sealed pouch of “Pepe’s Greens – THC (Totally Hilarious Coin)”`,
    use:'To cope with watching your favorite meme coin get rugged again.',
    price: 15000.00,
    image: pepe,
    category: 'Wellness',
    inStock: true,
    features: ['Rare Pepe Extract', 'Dank Meme Magic', 'Green Dildo Gains', 'Comfy Wojak Vibes']
  },
  {
    id: '3',
    name: 'Elon Tabs',
    tagline:'See through the matrix. Or at least your bags.',
    description: 'Psychedelic tabs with neon Doge, Tesla logos, and Elon’s face morphing into a rocket.',
    form:'Holographic blotter sheets — each tab gives you hallucinations of being a genius.',
    use:'Take one before FOMOing into a project with zero whitepaper.',
    price: 20000.00,
    image: elon,
    category: 'Cognitive',
    inStock: true,
    features: ['Galaxy Brain Mode', 'Mars Mission Ready', 'Doge Spirit Activated', 'Tweet Storm Energy']
  },
  {
    id: '4',
    name: 'Wojakatin',
    tagline:'For when being early still hurts.',
    description: 'Capsules designed to block feelings of regret, sadness, and holding $LUNA to $0.\n Endorsed by 9/10 Wojaks (the 10th got rugged before he could answer).',
    form:'Pink pills with a sad Wojak stamp.',
    use:`Take daily while scrolling CT and pretending it’s all ‘just for the memes’.`,
    price: 15000.00,
    image: woja,
    category: 'Mood',
    inStock: true,
    features: ['Anti-Rekt Protection', 'Chad Wojak Mode', 'Infinite Hopium Supply', 'WAGMI Energy Boost']
  },
  {
    id: '5',
    name: 'Trenchant',
    tagline:'Inject alpha into your portfolio and your delts.',
    description: 'Ultra-meme-strength anabolic enhancer for degens who want physical AND financial pump.\n Now with bonus hopium oil.',
    form:'Neon yellow liquid in a vial labeled “Trenchant – Not For Weak Hands”\nIncludes comically oversized syringe.',
    use:`Pin this before calling everything ‘a future blue chip’.`,
    price: 10000.00,
    image: tren,
    category: 'Cognitive',
    inStock: true,
    features: ['Rugpull Detection Mode', 'FUD Filter Activated', 'Sharp Mind Protocol', 'Scam Radar Enhanced']
  },
  {
    id: '6',
    name: 'MemeLean',
    tagline:'Sip slow. Shill slower.',
    description: 'Grape-flavored syrup made for overworked shillers and influencers.\n Pepe and Doge on the bottle. Contains 0% codeine, 100% degenerate vibes.',
    form:'Purple liquid in a glossy cartoon bottle with a chart dripping downward.',
    use:'Pour up when the market dumps — or when your tweets flop.',
    price: 20000.00,
    image: meme,
    category: 'Energy',
    inStock: true,
    features: ['Purple Gains Protocol', 'Meme Magic Infused', 'Diamond Hand Grip', 'Moon Gravity Defiance']
  }
];
