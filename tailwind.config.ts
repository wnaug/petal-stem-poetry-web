
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
			fontFamily: {
				'playfair': ['Playfair Display', 'serif'],
				'jakarta': ['Plus Jakarta Sans', 'sans-serif'],
			},
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
				// Boutique floral palette
				dusty: {
					50: '#fdf7f5',
					100: '#fae9e6',
					200: '#f4d0c7',
					300: '#ecb5a4',
					400: '#e19680',
					500: '#d47a61',
					600: '#c36251',
					700: '#a34f45',
					800: '#87443e',
					900: '#703c38',
					DEFAULT: '#d47a61', // dusty pink
				},
				ivory: {
					50: '#fefefe',
					100: '#fdfdfc',
					200: '#fcfbf8',
					300: '#faf7f3',
					400: '#f7f2ec',
					500: '#f4ede4',
					600: '#ebe2d5',
					700: '#d9ccb9',
					800: '#c7b59e',
					900: '#a69580',
					DEFAULT: '#f4ede4',
				},
				forest: {
					50: '#f0f9f0',
					100: '#dcf2dc',
					200: '#bbe5bb',
					300: '#8dd08d',
					400: '#57b457',
					500: '#339533',
					600: '#267926',
					700: '#206020',
					800: '#1f4f1f',
					900: '#1a421a',
					DEFAULT: '#339533',
				},
				taupe: {
					50: '#f9f8f6',
					100: '#f2f0ec',
					200: '#e6e1da',
					300: '#d5cec2',
					400: '#c1b6a6',
					500: '#b0a193',
					600: '#9d8f80',
					700: '#837769',
					800: '#6c625a',
					900: '#59514b',
					DEFAULT: '#b0a193',
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
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
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px) rotate(0deg)'
					},
					'50%': {
						transform: 'translateY(-10px) rotate(2deg)'
					}
				},
				'petal-fall': {
					'0%': {
						transform: 'translateY(-100vh) rotate(0deg)',
						opacity: '0'
					},
					'10%': {
						opacity: '1'
					},
					'90%': {
						opacity: '1'
					},
					'100%': {
						transform: 'translateY(100vh) rotate(360deg)',
						opacity: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'petal-fall': 'petal-fall 8s linear infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
