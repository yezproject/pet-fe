/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './index.html'],
  theme: {
    extend: {
      backgroundImage: {
        'auth-background': 'url("./src/images/bg-auth.png")',
        'ic-logo': 'url("./src/images/icons/ic_logo.svg")',
      },
    },
    colors: {
      darkColor: '#000000',
      whiteColor: '#FFFFFF',
      darkGrey: '#747A80',
      grayColor: '#EBF0F0',
      primaryColor: '#0052FF',
      outlineColor: '#CFDBD5B2',
      pinkColor: '#F20089',
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
};
