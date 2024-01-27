/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlack: '#0e0e0e',
        purple: '#5D34FF',
        tPurple: '#A566FF',
        bColor: '#231F20',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'best': ['Bestigia', 'sans-serif',]
      },
      fontSize: {
        xl0: ['32px', '48px'],
        xl64: ['62px', '76.8px'],
      },
      backgroundImage: {
        'hero-img': "url('/public/src/img/backgroundImage.png')",
      },
      minHeight: {
        'section': '860px',
      },
    },
  },
  plugins: [],
};
