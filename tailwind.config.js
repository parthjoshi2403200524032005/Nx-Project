/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

// tailwind.config.js

module.exports = {
  theme: {
    extend: {
      fontSize: {
        'header-h1': ['24px', { lineHeight: '100%' }],
        'header-h2': ['20px', { lineHeight: '100%' }],
        'header-h3': ['19px', { lineHeight: '100%' }],
        'header-h4': ['19px', { lineHeight: '100%' }],
        'header-h5': ['19px', { lineHeight: '100%' }],
        'header-h6': ['19px', { lineHeight: '100%' }],
      },
      screens: {
        'sm': '640px',
        // Define other breakpoints if needed
      },
      // Optionally extend other styles
    },
  },
  plugins: [],
};
