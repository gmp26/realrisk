const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
        colors: {
          dblue: {
            '100': '#f8f8ff',
            '500': '#0078ef',
            '600': '#0067de',
            '700': '#0056cd',
            }
        }
    }
  },
  variants: {},
  plugins: [
               function({ addVariant, e }) {
                 addVariant('target', ({ modifySelectors, separator }) => {
                   modifySelectors(({ className }) => {
                     return `.${e(`disabled${separator}${className}`)}:target`
                   })
                 })
               }
             ]
}
