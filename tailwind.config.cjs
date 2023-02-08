/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {}
  },
  daisyui: {
    themes: [
      {pseudoforce: {
        "primary": "#ea8c93",
        "secondary": "#5b16bc",
        "accent": "#e59f49",
        "neutral": "#38233E",
        "base-100": "#3C313F",
        "info": "#1245ED",
        "success": "#20A254",
        "warning": "#F8AE25",
        "error": "#DC384B",
        },
      },
    ],
  },
  plugins: [require("daisyui")]
};
