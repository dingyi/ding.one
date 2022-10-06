import React from "react"
import { useRouter } from "next/router"
import { Command } from "cmdk"
import tinykeys from "tinykeys"
import useOnClickOutside from "use-onclickoutside"
import { useTheme } from "next-themes"
import Home from "@ui/Icons/home"
import About from "@ui/Icons/about"
import Projects from "@ui/Icons/projects"
import Posts from "@ui/Icons/posts"
import Stack from "@ui/Icons/stack"
import Reading from "@ui/Icons/reading"
import Gear from "@ui/Icons/gear"
import Bookmarks from "@ui/Icons/bookmarks"
import Newsletters from "@ui/Icons/newsletters"
import Podcasts from "@ui/Icons/podcasts"

export default function CommandMenu({ open, setOpen}) {

  const router = useRouter()
  const { setTheme } = useTheme()

  const ref = React.useRef(null)
  useOnClickOutside(ref, () => {
    if (open) setOpen(false)
  })

  // Toggle the menu when ⌘K is pressed
  React.useEffect(() => {
    let unsubscribe = tinykeys(window, {
      "$mod+KeyK": () => {
        setOpen((open) => !open)
      },
    })
    return () => {
      unsubscribe()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const handleSetTheme = (val: string) => {
    setTheme(val)
    setOpen(false)
  }

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Global Command Menu"
    >
      <div cmdk-header="">
        <Command.Input
          autoFocus
          placeholder="Type a command or search..." />
        <button
          aria-label="Close command menu"
          cmdk-header-esc=""
          onClick={() => setOpen(false)}
          tabIndex={-1}
        >
          Close
        </button>
      </div>
      <Command.List>
        <Command.Empty>No results found.</Command.Empty>
        <Command.Group heading="Navigation">
          <Item
            shortcut="0"
            onSelect={() => {
              router.push("/")
              setOpen(false)
            }}
          >
            <Home />
            Home
          </Item>
          <Item
            shortcut="1"
            onSelect={() => {
              router.push("/about")
              setOpen(false)
            }}
          >
            <About />
            About
          </Item>
          <Item
            shortcut="2"
            onSelect={() => {
              router.push("/projects")
              setOpen(false)
            }}
          >
            <Projects />
            Projects
          </Item>
          <Item
            shortcut="3"
            onSelect={() => {
              router.push("/posts")
              setOpen(false)
            }}
          >
            <Posts />
            Posts
          </Item>
          <Item
            shortcut="4"
            onSelect={() => {
              router.push("/stack")
              setOpen(false)
            }}
          >
            <Stack />
            Stack
          </Item>
          <Item
            shortcut="5"
            onSelect={() => {
              router.push("/gear")
              setOpen(false)
            }}
          >
            <Gear />
            Gear
          </Item>
          <Item
            shortcut="6"
            onSelect={() => {
              router.push("/reading")
              setOpen(false)
            }}
          >
            <Reading />
            Reading
          </Item>
          <Item
            shortcut="7"
            onSelect={() => {
              router.push("/bookmarks")
              setOpen(false)
            }}
          >
            <Bookmarks />
            Bookmarks
          </Item>
          <Item
            shortcut="8"
            onSelect={() => {
              router.push("/newsletters")
              setOpen(false)
            }}
          >
            <Newsletters />
            Newsletters
          </Item>
          <Item
            shortcut="9"
            onSelect={() => {
              router.push("/podcasts")
              setOpen(false)
            }}
          >
            <Podcasts />
            Podcasts
          </Item>
        </Command.Group>
        <Command.Group heading="Appearance">
          <Command.Item onSelect={handleSetTheme} value="system">
            <Home />
            System
          </Command.Item>
          <Command.Item onSelect={handleSetTheme} value="light">
            <Home />
            Light
          </Command.Item>
          <Command.Item onSelect={handleSetTheme} value="dark">
            <Home />
            Dark
          </Command.Item>
        </Command.Group>
      </Command.List>
    </Command.Dialog>
)}

function Item({
  children,
  shortcut,
  onSelect = () => { },
}: {
  children: React.ReactNode
  shortcut?: string
  onSelect?: (value: string) => void
}) {
  return (
    <Command.Item onSelect={onSelect}>
      {children}
      {shortcut && (
        <div cmdk-shortcuts="">
          {shortcut.split(' ').map((key) => {
            return <kbd key={key}>{key}</kbd>
          })}
        </div>
      )}
    </Command.Item>
  )
}