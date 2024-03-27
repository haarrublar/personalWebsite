/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./website/templates/**/*.{html,js}",
    "./blog/templates/**/*.{html,js}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      colors: {
        primary: colors.pink,
        gray: colors.gray,
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.600')}`,
              },
              code: { color: theme('colors.primary.400') },
              'text-decoration': 'none',
            },
            'h1,h2': {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
            },
            h3: {
              fontWeight: '600',
            },
            code: {
              color: theme('colors.indigo.500'),
            },
            lineHeight: '1.5',
          },
        },
        invert: {
          css: {
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.400')}`,
              },
              code: { color: theme('colors.primary.400') },
              'text-decoration': 'none'
            },
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.gray.100'),
            },
            lineHeight: '1.5',
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/forms'), 
    require('@tailwindcss/typography'),
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.lowercase': {
          textTransform: 'lowercase',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    }),
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.uppercase': {
          textTransform: 'uppercase',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    }),
  ],
}
