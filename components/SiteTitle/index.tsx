import Link from "next/link"
import Logo from "@ui/Icons/logo"
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import { styled } from 'stitches.config'

const Container = styled('div', {
  margin: 0,
  display: 'flex',
  flexShrink: 0,
  alignItems: 'center',
  marginRight: '$2',
  'svg': {
    width: '32px',
    height: '32px',
    margin: '0 auto',
  },
  '@xs': {
    margin: '0.5rem 0 1rem 0.5rem',
    alignItems: 'flex-start',
    'svg': {
      margin: 0,
    },
  },
})

export default function SiteTitle() {
  return (
    <>
      <Container>
        <Link href="/" aria-label="Ding" passHref>
          <Logo />
          <VisuallyHidden.Root>Ding</VisuallyHidden.Root>
        </Link>
      </Container>
    </>
  )
}