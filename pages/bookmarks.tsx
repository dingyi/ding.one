import Head from "next/head"
import React from "react"
import Layout from "@components/Layouts/Global"
import * as util from '@styles/util'

export default function Bookmarks() {

  const description =
    "Cooking, come back later..."

  return (
    <>
      <Head>
        <title>{"Projects"}</title>
        <meta name="description" content={description} />
      </Head>
      <Layout>
        <h1 className={util.header()}>Bookmarks</h1>
        <p className={util.description()}>{description}</p>
      </Layout>
    </>
  )
}
