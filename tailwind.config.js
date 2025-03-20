export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A",
        secondary: "#9333EA",
        accent: "#F59E0B",
        dark: "#111827",
        light: "#F3F4F6"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["Fira Code", "monospace"]
      },
      boxShadow: {
        'soft': '0 4px 12px rgba(0, 0, 0, 0.1)',
        'xl': '0 10px 25px rgba(0, 0, 0, 0.3)',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      transitionProperty: {
        'width': 'width',
        'spacing': 'margin, padding',
      }
    }
  },
  plugins: []
};
