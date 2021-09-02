import React from 'react'
import Source from '@components/Source'
import Nav from '@components/Nav'
import { styled } from 'stitches.config'

export const Box = styled('header', {
  padding: '0 24px',
  display: 'flex',
  justifyContent: 'space-between',
})

const Header = () => {
  return (
    <Box>
      <Nav />
      <Source />
    </Box>
  )
}

export default Header
