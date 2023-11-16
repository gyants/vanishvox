/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        
        "purple-500": "#7D38B3",
        "purple-700": "#4B0082",
        "gold-500": "#FFD700",
        "gold-800": "#917800",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontFamily: {
      playfairDisplay: ['Playfair Display', 'serif'],
      raleway: ['Raleway', 'sans-serif'],
    },
  },
  plugins: [],
}
