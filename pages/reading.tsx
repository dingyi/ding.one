import { NextSeo } from 'next-seo'
import React from "react"
import Layout from "@components/Layouts/Global"
import * as util from '@styles/util'

export default function Reading() {

  const description =
    "Cooking, come back later..."

  return (
    <>
      <Layout>
        <NextSeo title="Reading List" description="" />
        <h1 className={util.header()}>Reading List</h1>
        <p className={util.description()}>{description}</p>
        <div className={util.divider()}></div>
      </Layout>
    </>
  )
}
