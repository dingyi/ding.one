import * as React from 'react'
import NextDocument, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { getCssString } from 'stitches.config'

const FONT_SANS = 'https://fonts.googleapis.com/css?family=Inter:400,500,600,700&display=swap';
const FONT_FIRA_CODE = 'https://fonts.googleapis.com/css?family=Fira+Mono&display=swap';

export default class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    try {
      const initialProps = await NextDocument.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssString() }} />
          </>
        ),
      }
    } finally {
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.png" />

          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href={FONT_SANS} rel="preload" as="style" />
          <link href={FONT_SANS} rel="stylesheet" media="all" />
          <link href={FONT_FIRA_CODE} rel="preload" as="style" />
          <link href={FONT_FIRA_CODE} rel="stylesheet" media="all" />
          <noscript>
            <link href={FONT_SANS} rel="stylesheet" />
            <link href={FONT_FIRA_CODE} rel="stylesheet" />
          </noscript>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}