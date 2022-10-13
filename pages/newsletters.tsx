import { NextSeo } from 'next-seo'
import Layout from "@components/Layouts/Global"
import PageFooter from "@components/Layouts/PageFooter"
import GridTile from "@components/Tiles/GridTile"
import { Grid } from '@nextui-org/react'
const { Client } = require("@notionhq/client")
import * as util from '@styles/util'
import * as link from '@styles/link'


export default function Newsletters({ list }) {

  return (
    <>
      <Layout>
        <NextSeo title="Newsletters" description="What podcasts I listen nowdays." />
        <h1 className={util.header()}>Newsletters</h1>
        <p className={util.description()}>
          I subscribed to tons of newsletters, these are the ones I really like and read a lot.
        </p>
        <div className={util.divider()}></div>
        <Grid.Container gap={0.5}>
          {list?.map((item) => (
            <Grid xs={6} sm={3} key={item.id} >
              <GridTile
                imageUrl={item.properties.Logo.files[0].file.url}
                title={item.properties.Name.title[0].plain_text}
                content={item.properties.Body.rich_text[0].plain_text}
                url={item.properties.URL.url}
                tags={item.properties.Tags.multi_select}
              />
            </Grid>
          ))}
        </Grid.Container>
        <div className={util.divider()}></div>
        <PageFooter>
          Data stored in{" "}
          <a
            href="http://notion.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={link.externalLink()}
          >
            Notion
          </a>{" "}. All trademarks, logos and brand names are the property of their respective owners.
        </PageFooter>
      </Layout>
    </>
  )
}
//notion API
export async function getStaticProps() {
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
}
