import React from 'react'
import { styled } from 'stitches.config'
import { link } from '@styles/link'

export const Box = styled('footer', {
  margin: '0 auto',
  fontSize: '$1',
  'a': {
    color: '$footerlink',
  },
  'ul&:hover a': {
    opacity: '.8',
  }
})

const Footer = () => {
  return (
    <Box>
      <ul>
        <li><a className={link()} href="https://twitter.com/dingyi" target="_blank" rel="noreferrer">Twitter</a></li>
        <li><a className={link()} href="https://instagram.com/dingyi/" target="_blank" rel="noreferrer">Instagram</a></li>
        <li><a className={link()} href="https://dribbble.com/dingyi" target="_blank" rel="noreferrer">Dribbble</a></li>
        <li><a className={link()} href="https://figma.com/@ding" target="_blank" rel="noreferrer">Figma</a></li>
        <li><a className={link()} href="https://open.spotify.com/user/dingyi" target="_blank" rel="noreferrer">Spotify</a></li>
        <li><a className={link()} href="mailto:dingyi@hey.com">Contact</a></li>
      </ul>
    </Box>
  )
}

export default Footer
