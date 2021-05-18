import { global } from 'stitches.config'

export const globalStyles = global({
  body: {
    backgroundColor: '$black',
    color: '$white',
    fontFamily: '$sans',
    margin: 0,
    fontSize: '$2',
    fontWeight: '$2',
    lineHeight: '$1',
    overflow: 'hidden'
  },

  ul: {
    padding: '0',
    'li': {
      display: 'inline',
      fontWeight: '$1',
      padding: '0 .6em',
      fontSize: '$3',
      letterSpacing: .1
    },
  },

  figure: {
    margin: 0
  },

  'pre, code': {
    margin: 0,
    fontFamily: '$mono'
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