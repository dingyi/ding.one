import Layout from "@components/Layouts/Global"
import GridList from "@components/GridList"
import { NextSeo } from 'next-seo'

export default function Home() {
  return (
    <>
      <Layout>
        <NextSeo title="Product designer & design-focused engineer." />
        <GridList />
      </Layout>
    </>
  )
}