import { useCallback, useMemo } from 'react'
import type { GetStaticProps, NextPage } from "next"
import { queryTypes, useQueryState } from 'next-usequerystate'
import { NextSeo } from 'next-seo'
import Layout from "@components/Layouts/Global"
import PageFooter from "@components/Layouts/PageFooter"
import BookmarkTile from "@components/Tiles/BookmarkTile"
import { Bookmark } from "lib/types"
import { fetchBookmarks } from "lib/bookmarks"
import { styled } from 'stitches.config'
import * as util from '@styles/util'
import * as link from '@styles/link'

const List = styled('div', {
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
    "Lastest useful links I've discovered and bookmarked."

  return (
    <>
      <Layout>
        <NextSeo title="Bookmarks" description="Lastest useful links I've discovered and bookmarked."/>
        <h1 className={util.header()}>Bookmarks</h1>
        <p className={util.description()}>{description}</p>
        <div className={util.divider()}></div>
        <List>
          {bookmarks?.map((bookmark) => (
            <BookmarkTile key={bookmark._id} bookmark={bookmark} />
          ))}
        </List>
        <div className={util.divider()}></div>
        <PageFooter>
          Powered by{" "}
          <a
            href="https://raindrop.io/"
            target="_blank"
            rel="noopener noreferrer"
            className={link.externalLink()}
          >
            Raindrop.io
          </a>{" "} API, for performance reasons, only the latest 50 are fetched.
        </PageFooter>
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