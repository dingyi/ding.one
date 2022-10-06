import { NextSeo } from 'next-seo'
import Layout from "@components/Layouts/Global"
//import NewsletterTile from "@components/Tiles/NewsletterTile"
//const { Client } = require("@notionhq/client")
import * as util from '@styles/util'

export default function Newsletters({ list }: any) {

  return (
    <>
      <Layout>
        <NextSeo title="Newsletters" description="" />
        <h1 className={util.header()}>Newsletters</h1>
        <p className={util.description()}>
          Cooking, come back later...
        </p>
        <div className={util.divider()}></div>
      </Layout>
    </>
  )
}
//notion API
/* export async function getStaticProps() {
  const notion = new Client({ auth: process.env.NOTION_API_KEY })

  const response = await notion.databases.query({
    database_id: process.env.NOTION_NEWSLETTERS_ID,
    sorts: [
      {
        property: "Name",
        direction: "ascending",
      },
    ],
  })

  return {
    props: {
      list: response.results,
    },
    revalidate: 60,
  }
} */
