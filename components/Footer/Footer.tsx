import React from 'react'
import { styled } from 'stitches.config'
import { link } from '@styles/link'

export const Box = styled('footer', {
  margin: '0 auto',
  gridRow: '2 / 3',
  fontSize: '$2',
  'ul&:hover a': {
    opacity: .8,
  }
})

const Footer = () => {
  return (
    <Box>
      <ul>
        <li><a className={link()} href="https://twitter.com/dingyi" target="_blank" rel="noopener">Twitter</a></li>
        <li><a className={link()} href="https://instagram.com/dingyi/" target="_blank" rel="noopener">Instagram</a></li>
        <li><a className={link()} href="https://dribbble.com/dingyi" target="_blank" rel="noopener">Dribbble</a></li>
        <li><a className={link()} href="https://figma.com/dingyi" target="_blank" rel="noopener">Figma</a></li>
        <li><a className={link()} href="https://open.spotify.com/user/dingyi" target="_blank" rel="noopener">Spotify</a></li>
        <li><a className={link()} href="mailto:dingyi@hey.com">Contact</a></li>
      </ul>
    </Box>
  )
}

export default Footer
