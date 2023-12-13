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
      grayColor: '#747A80',
      primaryColor: '#0052FF',
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
};
