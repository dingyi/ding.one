import React from 'react'
import { styled } from 'stitches.config'
import { link } from '@styles/link'

export const Box = styled('div', {
  fontSize: '$3',
})

const Nav = () => {
  return (
    <Box>
      <ul>
        <li><a className={link()} href="https://portfolio.ding.one/" target="_blank" rel="noreferrer">Portfolio</a></li>
        <li><a className={link()} href="https://newsletter.dex.group/" target="_blank" rel="noreferrer">Newsletter</a></li>
      </ul>
    </Box>
  )
}

export default Nav
