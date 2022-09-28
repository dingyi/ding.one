import React from 'react'
import { AppProps } from 'next/app'
import Menu from "@components/Menu"
import CommandMenu from "@components/CommandMenu"
import { styled } from 'stitches.config'
import { globalStyles } from '@styles/global'
import { CMDK } from '@styles/CommandMenu'
import { ThemeProvider } from 'next-themes'
import PlausibleProvider from 'next-plausible'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'
import '@styles/reset.css'

export const Wrapper = styled('div', {
  minHeight: '100vh',
  margin: 0,
  padding: 0,
  display: 'grid',
  alignContent: 'space-between',
})

export default function App({ Component, pageProps }: AppProps) {
  globalStyles()
  CMDK()

  const [open, setOpen] = React.useState(false)

  return (
    <PlausibleProvider domain="ding.one">
      <ThemeProvider attribute="class">
        <DefaultSeo {...SEO} />
        <Menu />
        <Component {...pageProps} />
        <CommandMenu open={open} setOpen={setOpen} />
      </ThemeProvider>
    </PlausibleProvider>
  )
}
