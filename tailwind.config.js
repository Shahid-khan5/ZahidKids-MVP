/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        urdu: ['Noto Nastaliq Urdu', 'serif'],
        pashto: ['Noto Naskh Arabic', 'serif'],
      },
    },
  },
  plugins: [],
};