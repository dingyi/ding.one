import React from "react"
import Layout from "@components/Layouts/Global"
import * as util from '@styles/util'

export default function Gear() {

  const description =
    "Cooking, come back later..."

  return (
    <>
      <Layout>
        <h1 className={util.header()}>Gear</h1>
        <p className={util.description()}>{description}</p>
      </Layout>
    </>
  )
}
