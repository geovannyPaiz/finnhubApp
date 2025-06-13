/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all of your component files.
    content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
      extend: {
        fontFamily: {
          trebuchet: ["TrebuchetMS"],
          "trebuchet-italic": ["Trebuchet-MS-Italic"],
        },
        colors: {
          'custom-background': '#2f2e2e',
           primary: "#1eba54",
           secondary: '#979797'
        },
      },
    },
    plugins: [],
  }