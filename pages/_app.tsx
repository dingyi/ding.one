import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { globalStyles } from '@styles/global'
import { styled } from 'stitches.config'
import { ThemeProvider } from 'next-themes'
import PlausibleProvider from 'next-plausible'

export const Wrapper = styled('div', {
  display: 'grid',
  minHeight: '100vh',
  margin: 0,
  padding: 0,
  gridTemplateRows: '1fr auto'
})

function App({ Component, pageProps }: AppProps) {
  globalStyles()

  return (
    <PlausibleProvider domain="ding.one">
      <ThemeProvider attribute="class">
        <Head>
          <title>Ding</title>
          <meta name="description" content="A product designer & maker." />
        </Head>
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
      </ThemeProvider>
    </PlausibleProvider>
  )
}

export default App
