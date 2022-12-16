import { NextSeo } from 'next-seo'
import Layout from "@components/Layouts/Global"
import PageTile from "@components/PageTitle"
import PageFooter from "@components/Layouts/PageFooter"
import GearTile from "@components/Tiles/GearTile"
const { Client } = require("@notionhq/client")
import { styled } from 'stitches.config'
import * as util from '@styles/util'
import * as link from '@styles/link'

const Grid = styled('div', {
  display: 'grid',
  gridGap: '$1',
  gridTemplateColumns: 'repeat(auto-fit, minmax(16rem, 1fr))',
  gridAutoRows: '1fr',
  '@mo': {
    //gridTemplateColumns: 'repeat(auto-fit, minmax(12rem, 1fr))',
    gridAutoFlow: 'row dense',
    gridTemplateColumns: '100%',
  },
})

export default function Gear({ list }) {

  const description =
    "All hardwares I bought in the past few years and still use nowdays."

  return (
    <>
      <Layout>
        <NextSeo title="Gear" description="" />
        <PageTile>Gear</PageTile>
        <p className={util.description()}>{description}</p>
        <div className={util.divider()}></div>
        <Grid>
          {list?.map((item) => (
            <GearTile
              key={item.id}
              imageUrl={item.properties.Image.files[0].file.url}
              title={item.properties.Name.title[0].plain_text}
              description={item.properties.Description.rich_text[0].plain_text}
              brand={item.properties.Brand.rich_text[0].plain_text}
              url={item.properties.URL.url}
              price={item.properties.Price.number}
            />
          ))}
        </Grid>
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
          </a>{" "} and images fetched from online stores. All trademarks, logos and brand names are the property of their respective owners.
        </PageFooter>
      </Layout>
    </>
  )
}

//notion API
export async function getStaticProps() {
  const notion = new Client({ auth: process.env.NOTION_API_KEY })

  const response = await notion.databases.query({
    database_id: process.env.NOTION_GEAR_ID,
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