import React from 'react'
import styled from 'styled-components'
import SourceIcon from '-!svg-react-loader?name=SourceIcon!../static/images/source.svg'

const ShowCode = styled.a`
  width: 20px;
  height: 20px;
  cursor: pointer;
  position: absolute;
  top: 30px;
  right: 30px;
  :hover .code {
    fill: #fff;
  }
  :after {
    display: none;
  }
`

export default () => (
  <ShowCode href="https://github.com/dingyi/ding.one" target="_blank">
    <SourceIcon />
  </ShowCode>
)