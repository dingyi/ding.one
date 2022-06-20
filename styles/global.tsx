import { globalCss } from '@stitches/react'

export const globalStyles = globalCss({
  body: {
    backgroundColor: '$background',
    color: '$white',
    fontFamily: '$sans',
    margin: 0,
    fontSize: '$2',
    fontWeight: '$2',
    lineHeight: '$1',
    overflow: 'hidden'
  },

  '.bg': {
    position:'fixed',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    opacity: '0.08',
    zIndex: -1,
  },

  '.dark-theme .bg': {
    opacity: '0.08',
  },

  '.dark-theme .iconInvert': {
    filter: 'invert(1)',
    transition: 'color 0.2s ease',
  },

  '.tag': {
    padding: '3px 4px',
    marginLeft: 3,
    borderRadius: 3,
    fontSize: 1,
    lineLeight: 1,
    color: 'rgba(0, 0, 0, 0.74)',
    transition: 'all 0.2s ease',
  },

  'html, body, p, h1, h2, h3, h4, h5, button': {
    padding: 0,
    margin: 0,
    fontFamily: '$sans',
    position: 'relative',
  },

  p: {
    letterSpacing: '0.1px',
    fontWeight: 390,
  },

  a: {
    color: 'inherit',
    textDecoration: 'none',
  },

  ul: {
    padding: '0',
    'li': {
      display: 'inline',
      fontWeight: '$1',
      padding: '0 .6em',
    },
  },

  figure: {
    margin: 0
  },

  'pre, code': {
    margin: 0,
    fontFamily: '$mono'
  },

  code: {
    //background: var(--gray5);
    borderRadius: 3,
    padding: '0px 4px',
    margin: 0,
  },

  svg: {
    display: 'inline-block',
    verticalAlign: 'middle',
  },

  '::selection': {
    backgroundColor: 'hsla(52, 100%, 49%, 0.99)',
    color: '$black',
  },
})