/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6ecf2',
          100: '#c1d0e0',
          200: '#98b3cc',
          300: '#6e96b8',
          400: '#4579a3',
          500: '#2c5e85',
          600: '#003366',
          700: '#002a52',
          800: '#001f3d',
          900: '#001428',
        },
        accent: {
          50: '#fbf7ec',
          100: '#f5ecc8',
          200: '#eddd8e',
          300: '#e4cd54',
          400: '#d4af37',
          500: '#b8962b',
          600: '#947822',
          700: '#6f5a19',
          800: '#4a3c11',
          900: '#2e2509',
        },
        ink: '#222222',
      },
    },
  },
  plugins: [],
};
