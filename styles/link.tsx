import { css } from 'stitches.config'

export const externalLink = css({
  color: '$mint12',
  '&:hover': {
    transition: 'all 0.2s ease',
    textShadow: '0 0 16px $mint12',
  },
  /* '&:after': {
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
  } */
})