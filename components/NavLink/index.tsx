import { useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { usePlausible } from 'next-plausible'
import External from "@ui/Icons/external"
import * as Tooltip from "@radix-ui/react-tooltip"
import { styled } from 'stitches.config'
import * as util from '@styles/util'

const Item = styled('a', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  height: '2rem',
  width: '2rem',
  color: '$menu',
  cursor: 'pointer',
  borderRadius: 6,
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
  '@xs': {
    padding: '0.5rem 0.5rem 0.5rem 0.875rem',
    width: '100%',
    height: '2.25rem',
    justifyContent: 'space-between',
  },
})

const Left = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
})

const Right = styled('div', {
  display: 'none',
  '@xs': {
    display: 'block',
  },
})

const Label = styled('p', {
  fontWeight: '$3',
  fontSize: '$2',
  margin: '0 0 0 12px',
  color: '$menu',
  letterSpacing: '-0.2px',
  transition: 'color 0.2s ease',
  display: 'none',
  '@xs': {
    display: 'block',
  },
})

const Shortcut = styled('div', {
  background: '$numberBackground',
  borderRadius: '$2',
  width: '16px',
  height: '16px',
  justifyContent: 'center',
  display: 'none',
  flexDirection: 'column',
  alignItems: 'center',
  '@xs': {
    display: 'flex',
  },
})

type Props = {
  svg: React.ReactNode
  label: string
  href: string
  shortcut?: string
  external?: boolean  // 👈️ mark optional

}

export default function NavLink({ svg, label, href, shortcut, external }: Props) {

  const router = useRouter()
  const plausible = usePlausible()

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
      aria-label={label}
      onClick={() => {
        plausible('Social Link')
      }}
    >
      <Left>
        <div className={util.icon()}>
          {svg}
        </div>

        <Label>{label}</Label>
      </Left>
      <Right>
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
      </Right>
    </Item>
  ) : (
    <Link href={href} passHref legacyBehavior>
      <Item
        aria-current={ariaCurrent}
        aria-label={label}
      >
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
                  <span className={util.shortcutText()}>{shortcut}</span>
                </Shortcut>
              </Tooltip.Trigger>

              <Tooltip.Content className={util.tooltip()}>
                  <span className={util.shortcutLabel()}>Press</span>
                <Shortcut>
                  <span className={util.shortcutText()}>{shortcut}</span>
                </Shortcut>
                <Tooltip.Arrow className={util.arrow()} />
              </Tooltip.Content>
            </Tooltip.Root>
          </Tooltip.Provider>
        ) : null}
      </Item>
    </Link>
  )
}
