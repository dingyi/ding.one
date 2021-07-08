import { createCss, StitchesCss } from '@stitches/react'
import { mint, mintDark, whiteA, blackA } from '@radix-ui/colors'

export const stitches = createCss({
  theme: {
    fonts: {
      system: 'system-ui',
      sans: 'Overpass, sans-serif',
      mono: 'Fira Mono, monospace',
    },
    colors: {
      ...mintDark,
      ...whiteA,
      background: '$mint1',
      link: '$mint12',
      highlight: '$whiteA12',
    },
    fontSizes: {
      1: '12px',
      2: '14px',
      3: '16px',
      4: '20px',
      5: '24px',
      6: '32px',
    },
    fontWeights: {
      1: '300',
      2: '400',
      3: '800',
    },
    lineHeights: {
      1: '18px',
      2: '21px',
      3: '24px',
      4: '30px',
      5: '36px',
      6: '48px',
    },
    space: {
      1: '4px',
      2: '8px',
      3: '16px',
      4: '32px',
      5: '64px',
      6: '128px',
    },
    sizes: {
      1: '4px',
      2: '8px',
      3: '16px',
      4: '32px',
      5: '64px',
      6: '128px',
    },
    radii: {
      1: '2px',
      2: '4px',
      3: '8px',
      round: '9999px',
    },
    letterSpacings: {},
    borderWidths: {},
    borderStyles: {},
    shadows: {
      ...mintDark,
      ...whiteA,
      lightShadow: '$whiteA11',
      mint: '$mint11',
    },
    zIndices: {},
    transitions: {},
    // media: {
    //   bp1: '(min-width: 575px)',
    //   bp2: '(min-width: 750px)',
    //   bp3: '(min-width: 1000px)',
    //   bp4: '(min-width: 1200px)',
    // },
  }
})

export type CSS = StitchesCss<typeof stitches>

export const { css, styled, global, keyframes, getCssString, theme } = stitches

export const lightTheme = theme('light', {
  colors: {
    ...mint,
    ...blackA,
    background: '$mint3',
    link: '$mint12',
    highlight: '$blackA12',
  },
})