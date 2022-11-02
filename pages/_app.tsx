import React from "react"
import Head from "next/head"
import { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'
import Menu from "@components/Menu"
import { ThemeProvider } from 'next-themes'
import PlausibleProvider from 'next-plausible'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'
import { globalStyles } from '@styles/global'
import '@styles/reset.css'

export default function App({ Component, pageProps }: AppProps) {
  globalStyles()

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      </Head>
      <PlausibleProvider domain="ding.one">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
        >
          <DefaultSeo {...SEO} />
          <Menu />
          <Component {...pageProps} />
          <Analytics />
        </ThemeProvider>
      </PlausibleProvider>
    </>
  )
}
