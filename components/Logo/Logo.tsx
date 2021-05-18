import React from 'react'
import { styled } from 'stitches.config'
import LogoIcon from '../../icons/logo'

export const Wrapper = styled('div', {
  width: '109px',
  height: '114px',
  margin: '0 auto',
})

const Logo = () => {
  return (
    <Wrapper>
      <LogoIcon />
    </Wrapper>
  )
}

export default Logo
