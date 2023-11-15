/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "laptop-image": "url('../assets/background-form.jpg')"
      }, 
      fontFamily: {
        "poppins": "'Poppins', sans-serif",
      }
    },
  },
  plugins: [],
}

