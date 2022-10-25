import { styled } from 'stitches.config'
import SiteTitle from "@components/SiteTitle"
import NavLink from "@components/NavLink"
import LocalTime from "@components/LocalTime"
import Home from "@ui/Icons/home"
import About from "@ui/Icons/about"
import Projects from "@ui/Icons/projects"
import Posts from "@ui/Icons/posts"
import Stack from "@ui/Icons/stack"
import Gear from "@ui/Icons/gear"
import Reading from "@ui/Icons/reading"
import Bookmarks from "@ui/Icons/bookmarks"
import Newsletters from "@ui/Icons/newsletters"
import Podcasts from "@ui/Icons/podcasts"
import Twitter from "@ui/Icons/twitter"
import Instagram from "@ui/Icons/instagram"
import Github from "@ui/Icons/github"
import Figma from "@ui/Icons/figma"


const Container = styled('div', {
  padding: '0.15rem',
  width: '100%',
  margin: 0,
  backgroundColor: '$mint1',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  flexShrink: 0,
  position: 'sticky',
  top: 0,
  height: '3rem',
  overflow: 'scroll hidden',
  zIndex: '$max',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
  '@xs': {
    height: 'calc(100vh - 1rem)',
    width: '15rem',
    margin: '0.5rem',
    backgroundColor: 'transparent',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    position: 'fixed',
    top: 0,
  }
})

const Main = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  '@xs': {
    flexDirection: 'column',
  },
})

const Nav = styled('nav', {
  display: 'flex',
  flexDirection: 'row',
  gap: '$1',
  '@xs': {
    flexDirection: 'column',
    gap: 2,
  },
})

const Divider = styled('p', {
  display: 'none',
  '@xs': {
    display: 'block',
    padding: '1rem 0 0.5rem 0.75rem',
    fontSize: '$0',
    fontWeight: '$2',
    color: '$whiteA11',
    marginBottom: 0,
    textTransform: 'uppercase',
  },
})

const Footer = styled('div', {
  display: 'flex',
  margin: '0.5rem 1rem',
  '@mo': {
    display: 'none',
  },
})

export default function Menu() {
  return (
    <Container>
      <Main>
        <SiteTitle />
        <Nav>
          <NavLink
            svg={<Home />}
            href="/"
            label="Home"
            shortcut="0"
          />
          <NavLink
            svg={<About />}
            href="/about"
            label="About"
            shortcut="1"
          />
          <NavLink
            svg={<Projects />}
            href="/projects"
            label="Projects"
            shortcut="2"
          />
          <NavLink
            svg={<Posts />}
            href="/posts"
            label="Posts"
            shortcut="3"
          />
          <Divider>Resources</Divider>
          <NavLink
            svg={<Stack />}
            href="/stack"
            label="Stack"
            shortcut="4"
          />
          <NavLink
            svg={<Gear />}
            href="/gear"
            label="Gear"
            shortcut="5"
          />
          <NavLink
            svg={<Reading />}
            href="/reading"
            label="Reading List"
            shortcut="6"
          />
          <NavLink
            svg={<Bookmarks />}
            href="/bookmarks"
            label="Bookmarks"
            shortcut="7"
          />
          <NavLink
            svg={<Newsletters />}
            href="/newsletters"
            label="Newsletters"
            shortcut="8"
          />
          <NavLink
            svg={<Podcasts />}
            href="/podcasts"
            label="Podcasts"
            shortcut="9"
          />
          <Divider>Social</Divider>
          <NavLink
            svg={<Twitter />}
            href="https://twitter.com/dingyi"
            label="Twitter"
            external
          />
          <NavLink
            svg={<Instagram />}
            href="https://instagram.com/dingyi"
            label="Instagram"
            external
          />
          <NavLink
            svg={<Figma />}
            href="https://figma.com/@ding"
            label="Figma"
            external
          />
          <NavLink
            svg={<Github />}
            href="https://Github.com/dingyi"
            label="Github"
            external
          />
        </Nav>
      </Main>
      <Footer>
        <LocalTime />
      </Footer>
    </Container>
  )
}
