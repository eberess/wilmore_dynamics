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
        gray: {
          400: '#9CA3AF',
          600: '#4B5563',
          700: '#374151', // Pour un meilleur contraste
        }
      }
    }
  },
  darkMode: 'class',
} 