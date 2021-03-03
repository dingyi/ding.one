import React from 'react'
import styled from 'styled-components'
import LogoIcon from '../icons/logo'

const Wrapper = styled.div`
  width: 109px;
  height: 114px;
  margin: 0 auto;
`

const Logo = () => (
  <Wrapper>
    <LogoIcon />
  </Wrapper>
)

export default Logo