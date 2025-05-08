
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
				"pahacraft": {
					"50": "#fbf5f2",
					"100": "#f6e9e2",
					"200": "#eed2c5",
					"300": "#e4b4a1",
					"400": "#d88c72",
					"500": "#c65f46",
					"600": "#b9523f",
					"700": "#9a4035",
					"800": "#7c3730",
					"900": "#64302a",
					"950": "#351714"
				},
				"pahacraft-accent": {
					"50": "#f3f8f6",
					"100": "#e0ece6",
					"200": "#c2d8cd",
					"300": "#9abca9",
					"400": "#699a83",
					"500": "#4d7e68",
					"600": "#2c5545",
					"700": "#254a3c",
					"800": "#1f3d32",
					"900": "#1a332a",
					"950": "#0c1c17"
				},
				"pahacraft-beige": {
					"50": "#fdfbf8",
					"100": "#f6f0e8",
					"200": "#eadecb",
					"300": "#dac5a8",
					"400": "#c6a480",
					"500": "#b58c63",
					"600": "#9b7653",
					"700": "#805c44",
					"800": "#6a4c3a",
					"900": "#583f32",
					"950": "#302019"
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
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
