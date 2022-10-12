import { globalCss } from '@stitches/react'

export const globalStyles = globalCss({
  '@font-face': {
    fontFamily: 'Unbounded VF',
    src: 'url(/fonts/Unbounded-Variable.woff2) format("woff2-variations")',
    fontWeight: '1 999',
    fontDisplay: 'block',
  },
  'html, body': {
    backgroundColor: '$background',
    color: '$content',
  },
  body: {
    fontFamily: '$sans',
    fontSize: '$3',
    fontWeight: '$2',
    overflow: 'hidden',
    height: "100%",
  },

  'html, body, p, h1, h2, h3, h4, h5, button': {
    padding: 0,
    margin: 0,
    position: 'relative',
  },

  ul: {
    padding: 0,
    margin: 0,
    'li': {
      display: 'inline',
      margin: 0,
      fontWeight: '$1',
      padding: '0 .6em',
    },
  },

  p: {
    letterSpacing: '0.1px',
    lineHeight: '$2',
    marginBottom: '1rem',
  },

  a: {
    color: '$mint12',
    textDecoration: 'none',
    '&:hover': {
      transition: 'all 0.2s ease',
      color: '$mint12',
    },
  },

  'h1, h2, h3, h4, h5': {
    color: '$mint12',
  },

  h1: {
    fontFamily: '$title',
    fontSize: '$5',
    paddingBottom: '$4',
  },

  h2: {
    fontSize: '$4',
    paddingBottom: '$4',
  },

  h3: {
    fontSize: '$3',
  },

  h4: {
    fontSize: '$2',
  },

  figure: {
    margin: 0
  },

  img: {
    width: '100%',
  },

  'pre, code': {
    margin: 0,
    fontFamily: '$mono'
  },

  code: {
    borderRadius: 3,
    padding: '0px 4px',
    margin: 0,
  },

  '::selection': {
    backgroundColor: 'hsla(52, 100%, 49%, 0.99)',
    color: '$black',
  },

  '.dark-theme .bg': {
    opacity: '0.08',
  },

  '.dark-theme .iconInvert': {
    filter: 'invert(1)',
    transition: 'color 0.2s ease',
  },

  '.inline': {
    display: 'inline',
  },

  '.tag': {
    padding: '0 4px',
    marginLeft: 4,
    borderRadius: 3,
    fontSize: '$1',
    transition: 'all 0.2s ease',
  },

  '.defaultTag': {
    backgroundColor: '#f1f1f0',
  },
  '.grayTag': {
    backgroundColor: '#e3e2e0',
  },
  '.brownTag': {
    backgroundColor: '#ece1db',
  },
  '.orangeTag': {
    backgroundColor: 'rgb(255 115 0 / 20%)',
  },
  '.yellowTag': {
    backgroundColor: 'rgb(255 247 0 / 20%)',
  },
  '.greenTag': {
    backgroundColor: 'rgb(32 255 0 / 20%)',
  },
  '.blueTag': {
    backgroundColor: '#d7e5ee',
  },
  '.purpleTag': {
    backgroundColor: '#e6dfed',
  },
  '.pinkTag': {
    backgroundColor: 'rgb(251 0 118 / 20%)',
  },
  '.redTag': {
    backgroundColor: 'rgb(255 7 7 / 20%)',
  },

})