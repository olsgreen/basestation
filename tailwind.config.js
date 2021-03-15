module.exports = {
  purge: [
      //'./*.php',
      //'./*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      /*height: theme => ({
        "screen-90": "90vh",
      }),
      zIndex: theme => ({
         '-10': '-10',
      }),
      maxWidth: theme => ({
          'xxs': '10rem'
      }),
      margin: theme => ({
         'screen-90': '90vh'
      }),*/
      fontFamily: theme => ({
          'heading': ['-apple-system','BlinkMacSystemFont','Segoe UI','Helvetica','Arial','sans-serif','Apple Color Emoji','Segoe UI Emoji'],
          'body': ['-apple-system','BlinkMacSystemFont','Segoe UI','Helvetica','Arial','sans-serif','Apple Color Emoji','Segoe UI Emoji'],
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
