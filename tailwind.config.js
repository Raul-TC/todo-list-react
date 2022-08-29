module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    backgroundImage: {
      'light-mobile': "url('./assets/bg-mobile-light.jpg')",
      'light-desktop': "url('./assets/bg-desktop-light.jpg')",
      'dark-mobile': "url('./assets/bg-mobile-dark.jpg')",
      'dark-desktop': "url('./assets/bg-desktop-dark.jpg')",
      moon: "url('./assets/icon-moon.svg')",
      sun: "url('./assets/icon-sun.svg')",
      iconCheck: "url('./assets/icon-check.svg')",
      deleteTask: "url('./assets/icon-cross.svg')"
    },
    extend: {
      height: {
        '20vh': '20vh',
        '80vh': '80vh'
      },
      width: {
        '90%': '90%'
      },
      maxWidth: {
        85: '85%'
      },
      letterSpacing: {
        '8px': '10px'
      },
      screens: {
        md: '375px'
      },
      colors: {
        'footer-color': '#F8F8FA',
        'container-task': '#FFFFFF',
        'container-task-dark': '#25273C',
        'footer-background-dark': '#171723'
      }
    }

  },
  plugins: []
}
