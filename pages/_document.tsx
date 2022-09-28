import * as React from 'react'
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
    } finally {
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="stylesheet" href="https://use.typekit.net/gxo7gwj.css" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}