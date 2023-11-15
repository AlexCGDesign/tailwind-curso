const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    
    

    extend: {
      
      backgroundImage: {
        "ipad-image": "url('../assets/ipad.jpg')",
        "laptop-image": "url('../assets/laptop.jpg')",
        "nike-image": "url('../assets/nike.jpg')",
      },

      screens:{
        "3xl": "1900px"
      },

      colors: {
        "color-primario": "#564D65",
        "color-blanco": "#fff",
        "red": {
          "100": "#000",
          "500": "blue",
          "900": "yellow" 
        },
      },

      spacing:{
        "10px": "10px",
        "20px": "20px",
        "30px": "30px"
      },

    },
  },
  plugins: [],
}

