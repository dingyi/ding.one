import { css, keyframes } from 'stitches.config'

export const bg = css({
  position: 'fixed',
  width: '100%',
  height: '100%',
  left: 0,
  top: 0,
  opacity: '0.08',
  zIndex: -1,
})

export const page = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  flexGrow: 1,
  margin: '0.5rem',
  borderRadius: '$5',
  padding: '1rem 2rem',
  backgroundColor: '$mint2',
  overflow: 'auto',
  transition: 'backgroundColor 0.2s ease',
  boxShadow: '0 1px 8px rgba(0, 0, 0, 0.015)',
  '@xs': {
    marginLeft: '16rem',
    height: 'calc(100vh - 1rem)',
  },
})

export const video = css({
  width: '100%',
  aspectRatio: '16 / 9',
  borderRadius: '12px',
  overflow: 'hidden',
  marginBottom: '2rem',
})

export const pageColumn = css({
  padding: '2rem 0',
  maxWidth: '48rem',
  width: '100%',
})

export const list = css({
  padding: 0,
  margin: 0,
})

export const header = css({
  fontSize: '$6',
  fontFamily: '$title',
  fontWeight: '$4',
  color: '$title',
  transition: 'color 0.25s ease',
})

export const description = css({
  fontSize: '$3',
  fontWeight: '$2',
  padding: '0.125rem',
  lineHeight: '$2',
  color: '$description',
  transition: 'color 0.25s ease',
  'p': {
    margin: '0 0 0.5rem',
  }
})

export const inset = css({
  padding: '0 0 0.125rem',
  display: 'block',
})

export const divider = css({
  borderTop: '1px solid $whiteA4',
  margin: '$5 0',
  transition: 'border 0.25s ease',
})

export const textDivider = css({
  padding: '1.25rem 0rem 0rem 0.25rem',
  fontSize: '$1',
  color: '$highlight',
})

export const read = css({
  'p': {
    fontSize: '$1',
    fontWeight: '$1',
  },
  'ul': {
    paddingLeft: '1.5rem',
  }
})

export const siteTitle = css({
  fontSize: '$2',
  fontWeight: '$3',
  letterSpacing: '0.2px',
  textTransform: 'uppercase',
  margin: '0.5rem 0 1rem 0.5rem',
  transition: 'color 0.25s ease',
})

export const tileTitle = css({
  fontWeight: '$3',
  letterSpacing: '0.1px',
  lineHeight: 1.1,
  transition: 'color 0.25s ease',
  display: 'inline',
})

export const tileContent = css({
  marginTop: '0.25rem',
  fontSize: '$2',
  lineHeight: '$1',
  color: '$content',
  transition: 'color 0.25s ease',
})

export const icon = css({
  opacity: '.8',
})

export const roundIcon = css({
  width: '$5',
  height: '$5',
  borderRadius: '$pill',
  display: 'flex',
  backgroundColor: 'transparent',
  marginBottom: '$2',
  '& span': {
    borderRadius: '$2',
  }
})

export const externalIcon = css({
  fontSize: '$3',
  width: '16px',
  height: '16px',
  fontWeight: '$1',
})

export const tooltip = css({
  borderRadius: '$2',
  padding: '4px 4px 4px 8px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  fontSize: '$1',
  lineHeight: 1,
  color: '$highlightText',
  backgroundColor: '$contentBackground',
  boxShadow: 'hsl(206 22% 7% / 80%) 0px 6px 18px -10px, hsl(206 22% 7% / 50%) 0px 10px 20px -15px',
  zIndex: '9999',
})

export const badge = css({
  fontSize: '$1',
  padding: '6px 8px 6px 8px',
  lineHeight: '$1',
  backgroundColor: '$footerlink',
  borderRadius: '4px',
  color: '$footerlink',
  marginTop: '0.75rem',
  boxSizing: 'content-box',
  display: 'inline-block',
})

export const arrow = css({
  fill: '$contentBackground',
})

export const shortcutLabel = css({
  marginRight: "4px"
})

export const shortcutText = css({
  fontWeight: '$1',
  fontSize: '11px',
  color: '$highlightText',
})

export const CMDKButton = css({
  fontSize: '$2',
  color: '$highlightText'
})

export const image = css({
  overflow: 'hidden',
  flexShrink: 0,
})

const rolate360 = keyframes({
  '100%': { transform: 'rotate(360deg)' },
})

export const album = css({
  borderRadius: '$pill',
  animation: `${rolate360} 6s linear infinite`,
})