import * as React from 'react'
import NextDocument, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { getCssText } from 'stitches.config'

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
            <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
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
          <link href={FONT_FIRA_CODE} rel="preload" as="style" />
          <link href={FONT_FIRA_CODE} rel="stylesheet" media="all" />
          <noscript>
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