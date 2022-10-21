import React from "react"
import Head from "next/head"
import { AppProps } from 'next/app'
import Menu from "@components/Menu"
import CommandMenu from "@components/CommandMenu"
import { ThemeProvider } from 'next-themes'
import PlausibleProvider from 'next-plausible'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'
import { globalStyles } from '@styles/global'
import '@styles/reset.css'
import { CMDK } from '@styles/CommandMenu'

export default function App({ Component, pageProps }: AppProps) {
  globalStyles()
  CMDK()

  const [open, setOpen] = React.useState(false)

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <script defer data-domain="ding.one" src="/js/script.js"></script>
      </Head>
      <PlausibleProvider domain="ding.one">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
        >
          <DefaultSeo {...SEO} />
          <Menu />
          <Component {...pageProps} />
          <CommandMenu open={open} setOpen={setOpen} />
        </ThemeProvider>
      </PlausibleProvider>
    </>
  )
}
