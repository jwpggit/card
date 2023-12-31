/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'



export function setColor(variablecolor) {
  console.log('colorCheck',variablecolor)
}

export default createVuetify({
  components,
  theme: {
    themes: {
      light: {
        colors: {
          surface: '#ffffff',
          primary: '#f00',
          secondary: '#000000',
          background: '#ffffff',
          error: '#ff0080',
        },
      },
    },
  },
})
