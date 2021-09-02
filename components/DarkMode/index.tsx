import React from 'react'
import { useTheme } from 'next-themes'
import { styled } from 'stitches.config'

const DarkMode = () => {
  const { theme, setTheme } = useTheme()

  const toggle = () => {
    //setTheme(theme === 'dark' ? lightTheme : 'dark')
  }

  return (

    <Wrapper>
      <Toggle>
        <input
          type="checkbox"
          title="toggle"
          placeholder="toggle"
          onChange={toggle}
          //checked={theme === lightTheme}
        />
        <div></div>
      </Toggle>
    </Wrapper>
  )
}

export const Wrapper = styled('div', {
  position: 'fixed',
  bottom: 20,
  right: 24,
  transform: 'scale(0.6)'
})

export const Toggle = styled('label', {
  cursor: 'pointer',
  input: {
    display: 'none',
    '& + div': {
      borderRadius: '50%',
      width: 36,
      height: 36,
      position: 'relative',
      boxShadow: 'inset 16px -16px 0 0 $lightShadow',
      transform: 'scale(1) rotate(-2deg)',
      transition: 'box-shadow 0.5s ease 0s, transform 0.4s ease 0.1s',
      '&:before': {
        content: "",
        width: 'inherit',
        height: 'inherit',
        borderRadius: 'inherit',
        position: 'absolute',
        left: 0,
        top: 0,
        transition: 'background-color 0.3s ease'
      },
      '&:after': {
        content: "",
        width: 8,
        height: 8,
        borderRadius: '50%',
        margin: '-4px 0 0 -4px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        boxShadow: '0 -23px 0 $mint, 0 23px 0 $mint, 23px 0 0 $mint, -23px 0 0 $mint, 15px 15px 0 $mint, -15px 15px 0 $mint, 15px -15px 0 $mint, -15px -15px 0 $mint',
        transform: 'scale(0)',
        transition: 'all 0.3s ease'
      }
    },
    '&:checked + div': {
      boxShadow: 'inset 32px -32px 0 0 $lightShadow',
      transform: 'scale(0.5) rotate(0deg)',
      transition: 'transform 0.3s ease 0.1s, box-shadow 0.2s ease 0s',
      '&:before': {
        background: '$mint10',
        transition: 'background-color 0.3s ease 0.1s',
      },
      '&:after': {
        transform: 'scale(1.5)',
        transition: 'transform 0.5s ease 0.15s',
      }
    }
  }
})

export default DarkMode