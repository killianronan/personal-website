const svgToDataUri = require("mini-svg-data-uri");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Adjust this as needed for your project structure
  ],
  theme: {
    extend: {
      backgroundImage: {
        'dot-pattern': `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none">
            <circle fill="rgba(255, 255, 255, 0.2)" cx="16" cy="16" r="0.8"></circle>
          </svg>`
        )}")`,
        'blog-dot-pattern': `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none">
            <circle fill="rgba(0, 0, 0, 0.2)" cx="16" cy="16" r="0.8"></circle>
          </svg>`
        )}")`,
      },
    },
  },
};
