import { NextSeo } from 'next-seo'
import Layout from "@components/Layouts/Global"
import PageTile from "@components/PageTitle"
import PageFooter from "@components/Layouts/PageFooter"
import GridTile from "@components/Tiles/GridTile"
const { Client } = require("@notionhq/client")
import { styled } from 'stitches.config'
import * as util from '@styles/util'
import * as link from '@styles/link'

const Grid = styled('div', {
  display: 'grid',
  gridGap: '$1',
  gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
  gridAutoRows: '1fr',
  visibility: 'hidden',
  '@mo': {
    gridTemplateColumns: 'repeat(auto-fit, minmax(8rem, 1fr))',
  },
  [`&:hover ${GridTile}`]: {
    opacity: 0.2,
    '&:hover': {
      opacity: 1,
    },
  }, //not working
})


export default function Podcasts({ list }) {

  return (
    <>
      <Layout>
        <NextSeo title="Podcasts" description="Podcasts I listen nowdays." />
        <PageTile>Podcasts</PageTile>
        <p className={util.description()}>
          I used to only listen to design-related podcasts, but <a target="_blank" href="https://www.vulture.com/2022/09/podcasting-is-just-radio-now.html" rel="noopener noreferrer">Podcasting Is Just Radio Now</a>, so I subscribed to tons of podcasts just for fun, and most of the time I just listen to them as white noise.
        </p>
        <div className={util.divider()}></div>
        <Grid>
          {list?.map((item) => (
            <GridTile
              key={item.id}
              imageUrl={item.properties.Logo.files[0].file.url}
              title={item.properties.Name.title[0].plain_text}
              content={item.properties.Body.rich_text[0].plain_text}
              url={item.properties.URL.url}
              tags={item.properties.Tags.multi_select}
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
          </a>{" "} and Logos fetched from{" "}
          <a
            href="http://spotify.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={link.externalLink()}
          >
            Spotify
          </a>. All trademarks, logos and brand names are the property of their respective owners.
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
