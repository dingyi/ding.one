import { styled } from 'stitches.config'
import NavLink from "@components/NavLink"
import Logo from "@ui/Icons/logo"
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
import Designers from "@ui/Icons/designers"
import Twitter from "@ui/Icons/twitter"
import Instagram from "@ui/Icons/instagram"
import Github from "@ui/Icons/github"
import Figma from "@ui/Icons/figma"
import styles from "./menu.module.css"

export const SiteTitle = styled('div', {
  margin: '0.5rem 0 1rem 0.5rem',
  transition: 'color 0.25s ease',
  'svg': {
    width: '32px',
    height: '32px',
  }
})

export const Container = styled('div', {
  padding: '0.15rem',
  width: '15rem',
  justifyContent: 'space-between',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  flexShrink: 0,
  position: 'fixed',
  top: 0,
  height: 'calc(100vh - 1rem)',
  margin: '0.5rem',
})

export const Upper = styled('div', {
  overflow: 'auto',
  flexShrink: 1,
})

export const Divider = styled('p', {
  padding: '1.25rem 0 0.5rem 0.75rem',
  fontSize: '$0',
  fontWeight: '$2',
  color: '$whiteA11',
  marginBottom: 0,
  textTransform: 'uppercase',
})

export default function Menu() {
  return (
    <Container>
      <Upper>
        <SiteTitle>
          <Logo />
        </SiteTitle>
        <nav className={styles.nav}>
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
            external="true"
          />
          <NavLink
            svg={<Instagram />}
            href="https://instagram.com/dingyi"
            label="Instagram"
            external="true"
          />
          <NavLink
            svg={<Figma />}
            href="https://figma.com/@ding"
            label="Figma"
            external="true"
          />
          <NavLink
            svg={<Github />}
            href="https://Github.com/dingyi"
            label="Github"
            external="true"
          />
        </nav>
      </Upper>
    </Container>
  )
}
