import styles from "./navLink.module.css"
import React, { useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import External from "@ui/Icons/external"
import * as Tooltip from "@radix-ui/react-tooltip"
import { styled } from 'stitches.config'
import * as util from '@styles/util'

export const Item = styled('a', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0.5rem 0.575rem 0.5rem 0.875rem',
  position: 'static',
  width: '100%',
  height: '2.25rem',
  color: '$menu',
  cursor: 'pointer',
  borderRadius: 6,
  marginTop: 2,
  border: '0.5px solid transparent',
  transition: 'all 0.1s ease',
  '&:hover': {
    background: '$whiteA3',
  },
  '&:active': {
    background: '$whiteA4',
    transform: 'scaleX(0.985) scaleY(0.985) translateY(0.5px)',
  },
  '&[aria-current="page"]': {
    background: '$whiteA4',
    border: '0.5px solid $highlightActiveBorder',
  },
})

export const Left = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
})

export const Label = styled('p', {
  fontWeight: '$3',
  fontSize: '$2',
  margin: '0 0 0 12px',
  color: '$menu',
  letterSpacing: '-0.2px',
  transition: 'color 0.2s ease',
})

export const Shortcut = styled('div', {
  background: '$numberBackground',
  borderRadius: '$2',
  width: '16px',
  height: '16px',
  justifyContent: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const ShortcutText = styled('span', {
  fontWeight: '$1',
  fontSize: '11px',
  color:'$highlightText',
})

export default function NavLink({ svg, label, href, shortcut, external }: any) {
  const router = useRouter()

  const ariaCurrent =
    router.asPath.includes(href) && href !== "/"
      ? "page"
      : router.pathname === href
      ? "page"
      : undefined

  useEffect(() => {
    document.addEventListener("keypress", function (event) {
      if (event.key === shortcut) {
        router.push(href)
      }
    })
  })

  return external ? (
    <Item
      target="_blank"
      href={href}
      rel="noopener noreferrer"
    >
      <Left>
        <div className={util.icon()}>
          {svg}
        </div>

        <Label>{label}</Label>
      </Left>
      <div className={styles.desktopOnly}>
        <div
          className={util.externalIcon({
            css: {
              display: 'flex',
              alignItems: 'center',
              '& svg': {
                fill: '$highlightText',
              },
            }
          })}
        >
          <External />
        </div>
      </div>
    </Item>
  ) : (
    <Link href={href}>
      <Item aria-current={ariaCurrent}>
        <Left>
          <div className={util.icon()}>
            {svg}
          </div>
          <Label>{label}</Label>
        </Left>
        {shortcut ? (
          <Tooltip.Provider delayDuration={200} skipDelayDuration={300}>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <Shortcut>
                  <ShortcutText>{shortcut}</ShortcutText>
                </Shortcut>
              </Tooltip.Trigger>

              <Tooltip.Content className={util.tooltip()}>
                <span style={{ marginRight: "4px" }}>Press</span>
                <Shortcut>
                  <ShortcutText>{shortcut}</ShortcutText>
                </Shortcut>
              </Tooltip.Content>
            </Tooltip.Root>
          </Tooltip.Provider>
        ) : null}
      </Item>
    </Link>
  )
}
