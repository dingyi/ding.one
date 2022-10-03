import Head from "next/head"
import React from "react"
import { GetStaticProps } from "next"
import Layout from "@components/Layouts/Global"
import BookmarkTile from "@components/Tiles/BookmarkTile"
import { Bookmark } from "lib/types"
import { fetchBookmarks } from "lib/bookmarks"
import * as util from '@styles/util'

type Props = {
  bookmarks: Bookmark[]
  tags: string[]
}

export default function Bookmarks({ list }: any) {

  const description =
    "Cooking, come back later..."

  return (
    <>
      <Head>
        <title>{"Projects"}</title>
        <meta name="description" content={description} />
      </Head>
      <Layout>
        <h1 className={util.header()}>Bookmarks</h1>
        <p className={util.description()}>{description}</p>
        <div>
          {list?.map(({ cover, link, title, tags }:any) => (
            <BookmarkTile
              key={link}
              title={title}
              cover={cover}
              link={link}
              tags={tags}
            />
          ))}
        </div>
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const bookmarks = await fetchBookmarks()

  const tags = Array.from(new Set(bookmarks.flatMap(({ tags }) => tags)))

  const props: Props = { bookmarks, tags }

  return {
    props,
    revalidate: 60 * 60,
  }
}
