import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import Menu from "@components/Menu"
//import CMDK from "@components/CMDK"
import { styled } from 'stitches.config'
import { globalStyles } from '@styles/global'
import { ThemeProvider } from 'next-themes'
import PlausibleProvider from 'next-plausible'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'
import '@styles/reset.css'
import "@styles/CommandMenu.scss"

export const Wrapper = styled('div', {
  minHeight: '100vh',
  margin: 0,
  padding: 0,
  display: 'grid',
  alignContent: 'space-between',
})

export default function App({ Component, pageProps }: AppProps) {
  globalStyles()

  return (
    <PlausibleProvider domain="ding.one">
      <ThemeProvider attribute="class">
        <DefaultSeo {...SEO} />
        <Menu />
        <Component {...pageProps} />
      </ThemeProvider>
    </PlausibleProvider>
  )
}
