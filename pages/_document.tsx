import * as React from 'react'
import Script from 'next/script'
import NextDocument, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { getCssText } from 'stitches.config'
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
    } finally {}
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@300;400;500;600&display=swap" />
          <link
            rel="preload"
            href="/fonts/Unbounded-Variable.woff2"
            as="font"
            type="font/woff2"
            crossOrigin=""
          />
          <Script defer data-domain="ding.one" src="/js/script.js"></Script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}