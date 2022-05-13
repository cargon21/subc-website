module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
  },
  // content: ["./src/**/*.{js,jsx,ts,tsx}"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'suffolk-blue': '#13203b',  
        'suffolk-gold': '#cba038'      
      },

      spacing: {  
        '5vh': '5vh', 
        '8vh': '8v',
        '10vh': '10vh', 
        '15vh': '15vh', 
        '70vh': '70vh',    
        '90vh': '90vh',  
        '95vh': '95vh'    
      },

      fontFamily: {
        HansonBold: ['HansonBold'],
        RadioGrotesk: ['RadioGrotesk'],
        KawinganBold: ['KawinganBold'],
        KawinganRegular: ['KawinganRegular'],
      },

      backgroundImage: {
        'Image1': "url('./Images/BackgroundImages/bgImage1.jpg')",         
      },

      height: {
        'vid-h-2': '390px',
        'vid-h-1': '195px',
      },

      width: {
        'vid-w-2': '700px',
        'vid-w-1': '350px',
      }

    },
  },
  plugins: [],
}
