/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      'light', 
      'dark',
      {
        silk: {
          "color-scheme": "light",
          "color-base-100": "oklch(97% 0.0035 67.78)",
          "color-base-200": "oklch(95% 0.0081 61.42)",
          "color-base-300": "oklch(90% 0.0081 61.42)",
          "color-base-content": "oklch(40% 0.0081 61.42)",
          "color-primary": "oklch(23.27% 0.0249 284.3)",
          "color-primary-content": "oklch(94.22% 0.2505 117.44)",
          "color-secondary": "oklch(23.27% 0.0249 284.3)",
          "color-secondary-content": "oklch(73.92% 0.2135 50.94)",
          "color-accent": "oklch(23.27% 0.0249 284.3)",
          "color-accent-content": "oklch(88.92% 0.2061 189.9)",
          "color-neutral": "oklch(20% 0 0)",
          "color-neutral-content": "oklch(80% 0.0081 61.42)",
          "color-info": "oklch(80.39% 0.1148 241.68)",
          "color-info-content": "oklch(30.39% 0.1148 241.68)",
          "color-success": "oklch(83.92% 0.0901 136.87)",
          "color-success-content": "oklch(23.92% 0.0901 136.87)",
          "color-warning": "oklch(83.92% 0.1085 80)",
          "color-warning-content": "oklch(43.92% 0.1085 80)",
          "color-error": "oklch(75.1% 0.1814 22.37)",
          "color-error-content": "oklch(35.1% 0.1814 22.37)",
          "--radius-selector": "2rem",
          "--radius-field": "0.5rem",
          "--radius-box": "1rem",
          "--size-selector": "0.25rem",
          "--size-field": "0.25rem",
          "--border": "2px",
          "--depth": "1",
          "--noise": "0"
        }
      }
    ],
  },
}; 