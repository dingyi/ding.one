import React from 'react'
import { styled } from 'stitches.config'
import { link } from '@styles/link'
import CodeIcon from '../../icons/code'

export const ShowCode = styled('a', {
  width: '20px',
  height: '20px',
  cursor: 'pointer',
  position: 'absolute',
  top: '30px',
  right: '30px',
  '&:hover .code': {
    fill: '$white',
  },
  '&:after': {
    display: 'none',
  }
})

const Source = () => {
  return (
    <ShowCode
      className={link()}
      href="https://github.com/dingyi/ding.one"
      target="_blank"
      rel="noreferrer"
      aria-label="Fork it"
    >
      <CodeIcon />
    </ShowCode>
  )
}

export default Source
