import { useCallback, useMemo } from 'react'
import type { GetStaticProps, NextPage } from "next"
import { queryTypes, useQueryState } from 'next-usequerystate'
import { NextSeo } from 'next-seo'
import Layout from "@components/Layouts/Global"
import BookmarkTile from "@components/Tiles/BookmarkTile"
import { Bookmark } from "lib/types"
import { fetchBookmarks } from "lib/bookmarks"
import { styled } from 'stitches.config'
import * as util from '@styles/util'

export const List = styled('div', {
  marginTop: "$4",
})

interface Props {
  bookmarks: Bookmark[]
  tags: string[]
}

const Bookmarks: NextPage<Props> = ({ bookmarks: bookmarksData }) => {

  const [activeTag, setActiveTag] = useQueryState(
    'tag',
    queryTypes.string.withDefault('all')
  )

  const bookmarks = useMemo(
    () =>
      bookmarksData.filter(({ tags }) =>
        activeTag !== 'all' ? tags.includes(activeTag) : true
      ),
    [activeTag, bookmarksData]
  )

  const onTagClick = useCallback((tag: string): void => {
    setActiveTag(tag, { scroll: false, shallow: true })
  }, [setActiveTag])

  const description =
    "Lastest useful links I've discovered and bookmarked recently. Powered by Raindrop.io"

  return (
    <>
      <Layout>
        <NextSeo title="Bookmarks" description="Lastest useful links I've discovered and bookmarked recently. Powered by Raindrop.io"/>
        <h1 className={util.header()}>Bookmarks</h1>
        <p className={util.description()}>{description}</p>
        <List>
          {bookmarks?.map((bookmark) => (
            <BookmarkTile key={bookmark._id} bookmark={bookmark} />
          ))}
        </List>
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {

  const bookmarks = await fetchBookmarks()

  const tags = [
    'all',
    ...Array.from(new Set(bookmarks.flatMap(({ tags }) => tags))),
  ]

  const props: Props = { bookmarks, tags }

  return {
    props,
    revalidate: 60 * 60,
  }
}

export default Bookmarks