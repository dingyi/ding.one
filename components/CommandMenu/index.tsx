import React from 'react'
import { Command } from 'cmdk'
import Home from "@ui/Icons/home"
import About from "@ui/Icons/about"
import Projects from "@ui/Icons/projects"
import Posts from "@ui/Icons/posts"
import Stack from "@ui/Icons/stack"
import Reading from "@ui/Icons/reading"
import Fav from "@ui/Icons/fav"
import Newsletters from "@ui/Icons/newsletters"
import Podcasts from "@ui/Icons/podcasts"

export default function CommandMenu() {

  return (
    <div className="linear">
      <Command label="Global Command Menu">
        <Command.Input
          autoFocus
          placeholder="Type a command or search..."
        />
        <Command.List>
          <Command.Empty>No results found.</Command.Empty>
          {items.map(({ icon, label, shortcut }) => {
            return (
              <Command.Item key={label} value={label}>
                {icon}
                {label}
                <div cmdk-linear-shortcuts="">
                  {shortcut.map((key) => {
                    return <kbd key={key}>{key}</kbd>
                  })}
                </div>
              </Command.Item>
            )
          })}
        </Command.List>
      </Command>
    </div>
)}

const items = [
  {
    icon: <Home />,
    label: 'Home',
    shortcut: ['0'],
  },
  {
    icon: <About />,
    label: 'About',
    shortcut: ['1'],
  },
  {
    icon: <Projects />,
    label: 'Projects',
    shortcut: ['2'],
  },
  {
    icon: <Posts />,
    label: 'Posts',
    shortcut: ['3'],
  },
  {
    icon: <Stack />,
    label: 'Stack',
    shortcut: ['4'],
  },
  {
    icon: <Reading />,
    label: 'Reading List',
    shortcut: ['5'],
  },
  {
    icon: <Fav />,
    label: 'Inspired Tweets',
    shortcut: ['6'],
  },
  {
    icon: <Newsletters />,
    label: 'Newsletters',
    shortcut: ['7'],
  },
  {
    icon: <Podcasts />,
    label: 'Podcasts',
    shortcut: ['8'],
  },
]
