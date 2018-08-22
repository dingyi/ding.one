import React from 'react'
import styled from 'styled-components'

const Bio = styled.p`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0;
  padding: 2em 0 .6em 0;
  text-align: center;
  .raft {
    color: #F9D989 !important;
  }
  .dex {
    color: #43E7FD !important;
  }
  span {
    color: #F7417A;
  }
`

export default () => (
  <Bio>
    Designer, Coder, Minimalist. Digital Nomad. Making <a href="https://raft.design"className="raft">RΛFT</a> & <a     href="https://dex.group"className="dex">DE<span>X</span></a>.
  </Bio>
)
