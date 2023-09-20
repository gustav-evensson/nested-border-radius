/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      background: '#131518',
      primary: '#82a4c0',
      secondary: '#ffffff',
      paragraph: '#929292',
      highlight: '#ffffff10',
      focusHighlight: '#ffffff30'
    }
  },
  plugins: [],
}

