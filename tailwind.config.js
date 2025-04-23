/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#1a1a1a',
        'dark-surface': '#2d2d2d',
        'dark-border': '#404040',
        'dark-text': '#e5e5e5',
        'dark-text-secondary': '#a3a3a3',
        'accent': '#3b82f6',
        'accent-hover': '#2563eb',
      },
      spacing: {
        'sidebar': '4rem',
        'sidebar-expanded': '12rem',
      },
      transitionProperty: {
        'width': 'width',
      },
    },
  },
  plugins: [],
} 