/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html',  './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: ['@tailwindcss/forms'],
  animation: {
    'spin-slow': 'spin 3s linear infinite',
  }
};

