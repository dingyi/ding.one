import { NextSeo } from 'next-seo'
import Layout from "@components/Layouts/Global"
import PageTile from "@components/PageTitle"
import * as util from '@styles/util'

export default function Projects() {

  const description =
    "Cooking, come back later..."

  return (
    <>
      <Layout>
        <NextSeo title="Projects" description="" />
        <PageTile>Projects</PageTile>
        <p className={util.description()}>{description}</p>
        <div className={util.divider()}></div>
      </Layout>
    </>
  )
}
