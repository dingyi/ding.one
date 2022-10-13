import { NextSeo } from 'next-seo'
import Layout from "@components/Layouts/Global"
import PageFooter from "@components/Layouts/PageFooter"
import PodcastTile from "@components/Tiles/PodcastTile"
import { Grid } from '@nextui-org/react'
const { Client } = require("@notionhq/client")
import * as util from '@styles/util'
import * as link from '@styles/link'


export default function Podcasts({ list }) {

  return (
    <>
      <Layout>
        <NextSeo title="Podcasts" description="What podcasts I listen nowdays." />
        <h1 className={util.header()}>Podcasts</h1>
        <p className={util.description()}>
          I used to only listen to design-related podcasts, but <a target="_blank" href="https://www.vulture.com/2022/09/podcasting-is-just-radio-now.html" rel="noopener noreferrer">Podcasting Is Just Radio Now</a>, so I subscribed to tons of podcasts just for fun, and most of the time I just listen to them as white noise.
        </p>
        <div className={util.divider()}></div>
        <Grid.Container gap={0.5}>
          {list?.map((item) => (
            <Grid xs={6} sm={3} key={item.id} >
              <PodcastTile
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
          </a>{" "} and Logos fetched from{" "}
          <a
            href="http://spotify.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={link.externalLink()}
          >
            Spotify
          </a>.
        </PageFooter>
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
