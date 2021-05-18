import React from 'react'
import { styled } from 'stitches.config'
import { link } from '@styles/link'

export const Wrapper = styled('div', {
  fontSize: '$5',
  fontWeight: '$3',
  lineHeight: '$5',
  margin: 0,
  padding: '2em 0 .6em 0',
  textAlign: 'center',
})

const Bio = () => {
  return (
    <Wrapper>
      Designer, Coder, Minimalist. Now making <a className={link({
        css: {
          color: '#F7417A',
        },
      })} href="https://dex.group">DEX</a>.
    </Wrapper>
  )
}

export default Bio
