// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ... your configuration
    theme: {
        themes: {
          light: {
            colors: {
              primary: '#DF6851',
              secondary: '#19896B',
              tertiary: '#6B7BE1',
              white: '#FFFFFF',
              black: '#000000',
              shadesgrey:'#F1F1F1',
              materialDark: '#121212',
              primarySuccess50: '#ECFDF3',
              primarySuccess500: '#12B76A',
              lightBeidge: '#EFEBE9',
              alertError: '#FF5252',
              customprimary: '#1976D2',
              Greyscale: '#EFEBE9',
              MediumGrey: '#B7BDC0',
              tintColor: "#424242",
              primaryBlue50: "#E6F2FE",
              secondaryPink100: "#FCE7F6",
              warning: "#FB8C00",
              facebookBlue: "#0570E6",
              whatsappGreen: "#25D366",
              success: "#4CAF50",
              offWhite: "#f7f7f7",
              cardBackground: "#D9D9D9",
              Primarygrey700: "#344054",
              tabColorUnSelected: "#C5CAE9",
              tabSelected: "#6B7BE1",
              tabBackground: "#BBDEFB",
              backgroundColor: "#EEEEEE",
              enquiryViewPrimary: "#CD5C08",
              enquiryViewPrimary50: "#FAEEE6",
              projectViewHeader: "#80CBC3",
              tertiaryBrand: "#6B7BE1",
              insightLayer: "#BA55D3",
              footerColor: "#F8FAFC",
              captionColor: "#858585",
              footertextColor: "#6B7280",
              transparent:"#ffffff00",
              "new-primary": "#DF6851", // brand, titles, btn primary
              "new-blue-2-base": "#141B47", // subtitles, btn secondary, bg
              "new-text-base": "#2D2D2D", // titles, nav
              "new-gray-2": "#545454", // body1
              "new-blue-gray": "#E2E8F0", // body2
              "new-gray-3": "#FBFBFB",
              "new-news-bg": "#F2F2FF",
              "new-yellow": "#FFD687",
              "new-light-blue": "#67748E",
              "new-gray-3": "#D2D6DA",
              "new-blue-3-base": "#252F40"
            },
          },
        },
      }
  })
  app.vueApp.use(vuetify)
})
