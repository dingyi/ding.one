import { css } from 'stitches.config'

export const link = css({
  position: 'relative',
  boxSizing: 'border-box',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  display: 'inline-block',
  color: '$link',
  textDecoration: 'none',
  transition: 'color .2s ease-out, background 1s ease-in',
  '&:after': {
    content: '',
    display: 'block',
    height: '2px',
    width: 0,
    backgroundColor: '$link',
    transition: 'width .2s ease, background-color .2s ease',
    margin: 0,
    position: 'absolute',
    top: '45%',
  },
  '&:hover': {
    color: '$link',
  },

  '&:hover:after': {
    width: '100%',
  },

  '&:focus': {
    outline: 'none',
  },
})