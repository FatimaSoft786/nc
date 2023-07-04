module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      screens: {
        sm: '375px',
        // => @media (min-width: 640px) { ... }
  
        md: '768px',
        // => @media (min-width: 768px) { ... }
  
        lg: '1024px',
        // => @media (min-width: 1024px) { ... }
  
        xl: '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      extend: {
        
        fontFamily: {
          'poppins': ['Poppins', 'sans-serif']
        },
        fontSize: {
          'header': '1rem'
        },
        fontWeight: {
          regular: 400,
          medium: 500,
          bold: 600
        },
        colors: {
          'primary': '#FF5B60',
          
           
        }
      }
    },
    plugins: [],
  }