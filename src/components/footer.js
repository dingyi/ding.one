import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.footer`
  grid-row-start: 2;
  grid-row-end: 3;
  margin: 0 auto;
  font-size: .9rem;
  ul:hover a {
    opacity: .8;
  }
`

const Footer = () => (
  <Wrapper>
    <ul>
      <li><a href="https://twitter.com/dingyi">Twitter</a></li>
      <li><a href="https://instagram.com/dingyi/">Instagram</a></li>
      <li><a href="https://dribbble.com/dingyi">Dribbble</a></li>
      <li><a href="https://open.spotify.com/user/dingyi">Spotify</a></li>
      <li><a href="mailto:d@ding.one">Contact</a></li>
    </ul>
  </Wrapper>
)

export default Footer
