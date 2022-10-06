import { NextSeo } from 'next-seo'
import Layout from "@components/Layouts/Global"
import * as util from '@styles/util'

export default function Posts({ list }) {

  return (
    <>
      <Layout>
        <NextSeo title="Posts" description="" />
        <h1 className={util.header()}>Posts</h1>
        <p className={util.description()}>
          Still figuring out how to use <a target="_blank" href="https://www.contentlayer.dev/" rel="noopener noreferrer">contentlayer</a> to render mdx...
        </p>
        <div className={util.divider()}></div>
      </Layout>
    </>
  )
}
