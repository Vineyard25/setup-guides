export default {
  content: ["./index.html"],
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
      },
      colors: {
        grape: {
          50: '#f5f3f7',
          100: '#ebe8ef',
          200: '#d4cfe0',
          300: '#b5aac8',
          400: '#9583ab',
          500: '#7a6590',
          600: '#655177',
          700: '#534461',
        },
        ocean: {
          50: '#f0f5f5',
          100: '#e0ebeb',
          200: '#c1d7d9',
          300: '#99bcc0',
          400: '#6d9da3',
          500: '#528189',
          600: '#416871',
          700: '#37555c',
        },
      },
    },
  },
};