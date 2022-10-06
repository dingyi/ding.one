import Image from "next/future/image"
import { styled } from 'stitches.config'
import * as util from '@styles/util'
import { Bookmark } from 'lib/types'
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import localizedFormat from "dayjs/plugin/localizedFormat"

export const Item = styled('a', {
  height: '64px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  margin: '0 -1rem',
  padding: '0 1rem',
  transition: 'background-color 0.15s ease',
  borderRadius: '$3',
  '&:hover': {
    backgroundColor: '$whiteA2',
    cursor: 'pointer',
  },
})

export const Left = styled('div', {
  display: 'flex',
  alignItems: 'center',
})

export const Meta = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const Title = styled('h4', {
  maxWidth: '36rem',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
})

export const Date = styled('div', {
  fontSize: '$2',
})

export const Tags = styled('div', {
  fontSize: '$1',
})

dayjs.extend(relativeTime)
dayjs.extend(localizedFormat)

export default function BookmarkTile(props: { bookmark: Bookmark }) {
  const bookmark = props.bookmark
  const favicon = `https://www.google.com/s2/favicons?sz=64&domain=${bookmark.link}`

  return (
    <Item
      href={bookmark.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Left>
        <div className={util.image({
          css: {
            width: '$4',
            height: '$4',
            marginRight: '$3',
          }
        })}>
          <Image
            src={favicon}
            height={32}
            width={32}
            alt={bookmark.title}
          />
        </div>
        <Meta>
          <Title>{bookmark.title}</Title>
          <Tags>{bookmark.tags.map((tag) => `#${tag}`).join(" ")}</Tags>
        </Meta>
      </Left>
      <Date>
        {dayjs().to(dayjs(bookmark.lastUpdate))}
      </Date>
    </Item>
  )
}