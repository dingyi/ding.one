import { css } from 'stitches.config'

/* export const link = css({
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
}) */

export const externalLink = css({
  color: '$mint12',
  display: 'inline-flex',
  paddingRight: '16px',
  paddingLeft: '4px',
  marginLeft: '-3px',
  marginRight: '-2px',
  borderRadius: '4px',
  alignItems: 'stretch',
  '&:hover': {
    transition: 'all 0.2s ease',
    textShadow: '0 0 16px $mint12',
  },
  '&:after': {
    display: 'inline-block',
    padding: 0,
    content: '↗',
    width: '14px',
    height: '16px',
    marginRight: '-16px',
    marginLeft: '4px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
    fontSize: '$2',
    fontWeight: 300,
  }
})