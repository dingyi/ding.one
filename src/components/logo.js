import React from 'react'
import styled from 'styled-components'
import LogoIcon from '-!svg-react-loader?name=LogoIcon!../static/images/logo.svg'

const Logo = styled.div`
  width: 109px;
  height: 114px;
  margin: 0 auto;
`

export default () => (
  <Logo>
    <LogoIcon />
  </Logo>
)