import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  color: {
    neutrals: {
      '000': '#FFFFFF',
      '050': '#F5F7FA',
      '100': '#E4E7EB',
      '200': '#CBD2D9',
      '300': '#9AA5B1',
      '400': '#52667A',
      '500': '#313D49',
      '600': '#29333D',
      '700': '#212931',
      '800': '#181F25',
      '900': '#101418',
      '999': '#080A0C',
    },
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
  styles: {
    global: {
      body: {
        bgGradient: 'linear(to-r, pink.500, orange.500)',
      },
    },
  },
})
