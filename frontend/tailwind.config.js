/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle, var(--tw-gradient-stops))',
        'custom-gradient': 'linear-gradient(to right, #e73c9f, #a032c6, #4125f8)',
      },
      gradientColorStops: () => ({
        'primary': '#6e1074',
        'between': '#4a0e58',
        'secondary': '#1f0b35',
      }),
      colors: {
        'cus-bg': '#0f0b29',
        'cus-card': '#e6ddd6',
        'cus-card': '#F2EBFF',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'),],
}

