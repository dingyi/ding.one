import { createCss, StitchesCss } from '@stitches/react'

const stitchesConfig = createCss({
  theme: {
    fonts: {
      system: 'system-ui',
      sans: 'Overpass, sans-serif',
      mono: 'Fira Mono, monospace',
    },
    colors: {
      black: 'rgba(19, 19, 21, 1)',
      white: 'rgba(255, 255, 255, 1)',
      gray: 'hsla(0,0%,100%,.6)',
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
    shadows: {},
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

export type CSS = StitchesCss<typeof stitchesConfig>

export const { css, styled, global, keyframes, getCssString } = stitchesConfig