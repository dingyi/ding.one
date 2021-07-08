import { styled } from 'stitches.config'
import Logo from '@components/Logo'
import Bio from '@components/Bio'
import Footer from '@components/Footer'
import Source from '@components/Source'
import DarkMode from '@components/DarkMode'

export const Wrapper = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
})

export default function Home() {
  return (
    <>
      <Wrapper>
        <Logo />
        <Bio />
      </Wrapper>
      <Footer />
      <Source />
      <DarkMode />
    </>
  )
}
