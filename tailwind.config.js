/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        leaf: {
          50: '#f2f9f5',
          100: '#e1f2e8',
          200: '#c4e4d2',
          300: '#99cfb3',
          400: '#67b38f',
          500: '#439772',
          600: '#327a5b',
          700: '#29614a',
          800: '#1e4635',
          900: '#123024',
          950: '#091c15',
        },
        gold: {
          50: '#fdfbf0',
          100: '#f9f4d7',
          200: '#f3e6a9',
          300: '#ebd374',
          400: '#e2bf44',
          500: '#d4af37',
          600: '#b89028',
          700: '#936e22',
          800: '#7a5722',
          900: '#674721',
        },
        terracotta: {
          500: '#e05a2b',
          600: '#c8471b',
        },
        cream: {
          50: '#ffffff',
          100: '#fdfbf7',
          200: '#f8f4eb',
          300: '#f0e9d9',
        }
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
