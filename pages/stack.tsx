import { NextSeo } from 'next-seo'
import Layout from "@components/Layouts/Global"
import StackTile from "@components/Tiles/StackTile"
const { Client } = require("@notionhq/client")
import * as util from '@styles/util'

export default function Stack({ list }: any) {

  const description =
    "We live on tools, tools shape our tastes, and tools come and go frequently. This is a living document writing in Notion with everything that I'm using nowadays."

  return (
    <>
      <Layout>
        <NextSeo title="Stack" description="A living document writing in Notion with everything that I'm using nowadays." />
        <h1 className={util.header()}>Stack</h1>
        <p className={util.description()}>{description}</p>
        <div className={util.divider()}></div>
        <ul className={util.list()}>
          {list?.map((item: any) => (
            <StackTile
              key={item.id}
              title={item.properties.Name.title[0].plain_text}
              content={item.properties.Description.rich_text[0].plain_text}
              url={item.properties.URL.url}
              tags={item.properties.Tags.multi_select}
              use={item.properties.Use.checkbox}
              price={item.properties.Price.number}
            />
          ))}
        </ul>
      </Layout>
    </>
  )
}
//notion API
export async function getStaticProps() {
  const notion = new Client({ auth: process.env.NOTION_API_KEY })

  const response = await notion.databases.query({
    database_id: process.env.NOTION_STACK_ID,
    filter: {
      and: [
        {
          property: "Use",
          checkbox: {
            equals: true,
          },
        },
      ],
    },
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
}