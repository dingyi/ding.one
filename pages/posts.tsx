import React from "react"
import Layout from "@components/Layouts/Global"
import * as util from '@styles/util'

export default function Posts({ list }: any) {

  return (
    <>
      <Layout>
        <h1 className={util.header()}>Posts</h1>
        <p className={util.description()}>
          Still figuring out how to use <a target="_blank" href="https://www.contentlayer.dev/" rel="noopener noreferrer">contentlayer</a> to render mdx...
        </p>
      </Layout>
    </>
  )
}
