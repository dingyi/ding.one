import React from 'react'
import { styled } from 'stitches.config'
import { link } from '@styles/link'
import CodeIcon from '../../icons/code'

export const Box = styled('div', {
  marginTop: '$3',
})

export const ShowCode = styled('a', {
  width: '20px',
  height: '20px',
  cursor: 'pointer',
  '&:hover .code': {
    fill: '$highlight',
  },
  '&:after': {
    display: 'none',
  }
})

const Source = () => {
  return (
    <Box>
      <ShowCode
        className={link()}
        href="https://github.com/dingyi/ding.one"
        target="_blank"
        rel="noreferrer"
        aria-label="Fork it"
      >
        <CodeIcon />
      </ShowCode>
    </Box>
  )
}

export default Source
