/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-overlay': 'rgba(0, 0, 0, 0.5)',
      },
      fontFamily: {
        'lora': ['Lora', 'serif']
      }
    },
  },
  plugins: [],
}

// font-family: 'Lora', serif;