import React from 'react'
import styled from 'styled-components'

const Footer = styled.footer`
  grid-row-start: 2;
  grid-row-end: 3;
  margin: 0 auto;
  font-size: .9rem;
  ul:hover a {
    opacity: .6;
  }
`

export default () => (
  <Footer>
    <ul>
      <li><a href="https://twitter.com/dingyi">Twitter</a></li>
      <li><a href="https://instagram.com/dingyi/">Instagram</a></li>
      <li><a href="https://dribbble.com/dingyi">Dribbble</a></li>
      <li><a href="https://open.spotify.com/user/dingyi">Spotify</a></li>
      <li><a href="mailto:dingyi@me.com">Contact</a></li>
    </ul>
  </Footer>
)
