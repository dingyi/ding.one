import React from "react"
import Link from "next/link"
import External from "@ui/Icons/external"
import { styled } from 'stitches.config'
import * as util from '@styles/util'

export const Item = styled('a', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '$3',
  //width: 'fit-content',
  padding: '0.5rem 0.875rem',
  color: '$highlightText',
  cursor: 'pointer',
  borderRadius: '$round',
  backgroundColor: '$whiteA3',
  boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, .03)',
  transition: 'all .2s ease-out 0s',
  overflow: 'hidden',
  position: 'relative',
  transform: 'translatez(0)',
  zIndex: '9999',
  '& svg': {
    fill: '$highlightText',
  },
  '&:hover': {
    //background: '$mint9',
    backgroundColor: '$gradientButton',
    transition: 'all 0.3s ease-out 0.1s',
  },
  '&:active': {
    background: '$whiteA8',
    transform: 'scaleX(0.985) scaleY(0.985) translateY(0.5px)',
  },
  '&:hover span': {
    transform: 'translateX(101%)',
    transition: 'all 0.6s ease-out 0s',
  },
  '&:hover svg': {
    fill: '$mint4',
  },
  '&:hover p': {
    color: '$mint4',
  },
})

export const Gradient = styled('span', {
  display: 'block',
  position: 'absolute',
  top: '0',
  right: '0',
  width: '300%',
  height: '100%',
  bottom: 'auto',
  margin: 'auto',
  zIndex: '-1',
  backgroundImage: 'linear-gradient(190deg, rgba(73, 0, 165, 1) 0%, rgba(9, 9, 121, 1) 23%, rgba(0, 212, 255, 1) 49%, rgba(67, 231, 253, 1) 73%)',
  transition: 'all 0s ease-out 0s',
  transform: 'translateX(-35%)',
})

export const Left = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
})

export const Label = styled('p', {
  fontWeight: '$2',
  fontSize: '$2',
  margin: '0 0 0 12px',
  color: '$highlightText',
  letterSpacing: '-0.2px',
  transition: 'color 0.2s ease',
})

export default function NavLink({ label, href, external }) {

  return external ? (
    <Item
      target="_blank"
      href={href}
      rel="noopener noreferrer"
    >
      <Gradient />
      <Left>
        <Label>{label}</Label>
      </Left>
      <div className={util.externalIcon()}>
        <External />
      </div>
    </Item>
  ) : (
    <Link href={href}>
      <Item>
        <Gradient />
        <Left>
          <Label>{label}</Label>
        </Left>
      </Item>
    </Link>
  )
}
