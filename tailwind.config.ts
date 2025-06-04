
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				crypto: {
					dark: '#050505',
					darker: '#020202',
					green: '#00ff88',
					'green-light': '#4ade80',
					'green-dark': '#059669',
					purple: '#8b5cf6',
					'purple-light': '#a78bfa',
					'purple-dark': '#7c3aed',
					blue: '#3b82f6',
					'blue-light': '#60a5fa',
					pink: '#ec4899',
					'pink-light': '#f472b6',
					orange: '#f97316',
					'orange-light': '#fb923c',
					yellow: '#eab308',
					'yellow-light': '#fbbf24',
				},
			},
			backgroundImage: {
				'crypto-gradient': 'linear-gradient(135deg, #00ff88 0%, #8b5cf6 50%, #ec4899 100%)',
				'crypto-gradient-dark': 'linear-gradient(135deg, #020202 0%, #0a0a0a 50%, #1a1a1a 100%)',
				'hero-pattern': 'radial-gradient(circle at 25% 25%, #00ff88 0%, transparent 50%), radial-gradient(circle at 75% 75%, #8b5cf6 0%, transparent 50%)',
				'card-gradient': 'linear-gradient(145deg, rgba(0, 255, 136, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': { 
						transform: 'translateY(0px) rotate(0deg)' 
					},
					'50%': { 
						transform: 'translateY(-15px) rotate(1deg)' 
					}
				},
				'glow': {
					'0%, 100%': { 
						boxShadow: '0 0 20px rgba(0, 255, 136, 0.3)' 
					},
					'50%': { 
						boxShadow: '0 0 40px rgba(0, 255, 136, 0.6), 0 0 60px rgba(139, 92, 246, 0.3)' 
					}
				},
				'pulse-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 5px rgba(0, 255, 136, 0.3)' 
					},
					'50%': { 
						boxShadow: '0 0 20px rgba(0, 255, 136, 0.8), 0 0 30px rgba(139, 92, 246, 0.4)' 
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'glow': 'glow 3s ease-in-out infinite alternate',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite'
			},
			spacing: {
				'18': '4.5rem',
				'88': '22rem',
				'128': '32rem',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
