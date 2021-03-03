import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.p`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0;
  padding: 2em 0 .6em 0;
  text-align: center;
  .r3 {
    color: #43E7FD !important;
  }
  .dex {
    color: #F7417A!important;
  }
`

const Bio = () => (
  <Wrapper>
    Designer, Coder, Minimalist. Digital Nomad. Now making <a href="https://r3.design"className="r3">R3</a> & <a     href="https://dex.group"className="dex">DEX</a>.
  </Wrapper>
)

export default Bio