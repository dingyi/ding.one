import React from "react"
import Layout from "@components/Layouts/Global"
import PodcastTile from "@components/Tiles/PodcastTile"
const { Client } = require("@notionhq/client")
import { styled } from 'stitches.config'
import * as util from '@styles/util'

export const Grid = styled('ul', {
  paddingLeft: 0,
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  gap: 0,
  margin: '0 -1rem',
})

export default function Podcasts({ list }: any) {

  return (
    <>
      <Layout>
        <h1 className={util.header()}>Podcasts</h1>
        <p className={util.description()}>
          I used to only listen to design-related podcasts, but <a target="_blank" href="https://www.vulture.com/2022/09/podcasting-is-just-radio-now.html" rel="noopener noreferrer">Podcasting Is Just Radio Now</a>, so I subscribed to tons of podcasts just for fun, and most of the time I just listen to them as white noise.
        </p>
        <Grid>
          {list?.map((item: any) => (
            <PodcastTile
              key={item.id}
              internalUrl={item.properties.Path.url}
              imageUrl={item.properties.Logo.files[0].file.url}
              title={item.properties.Name.title[0].plain_text}
              content={item.properties.Body.rich_text[0].plain_text}
              url={item.properties.URL.url}
              tags={item.properties.Tags.multi_select}
            />
          ))}
        </Grid>
      </Layout>
    </>
  )
}
//notion API
export async function getStaticProps() {
  const notion = new Client({ auth: process.env.NOTION_API_KEY })

  const response = await notion.databases.query({
    database_id: process.env.NOTION_PODCASTS_ID,
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
