import { styled } from 'stitches.config'
import Logo from '@components/Logo'
import Bio from '@components/Bio'
import Footer from '@components/Footer'
import Header from '@components/Header'
//import DarkMode from '@components/DarkMode'

export const Wrapper = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
})

export default function Home() {
  return (
    <>
      <Header />
      <Wrapper>
        <Logo />
        <Bio />
      </Wrapper>
      <Footer />
      {/* <DarkMode /> */}
    </>
  )
}
