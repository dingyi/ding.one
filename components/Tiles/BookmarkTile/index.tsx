import Image from "next/image"
import { styled } from 'stitches.config'
import * as util from '@styles/util'
import { Bookmark } from 'lib/types'
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import localizedFormat from "dayjs/plugin/localizedFormat"

const Item = styled('a', {
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

const Left = styled('div', {
  display: 'flex',
  alignItems: 'center',
  width: '80%',
  overflow: 'hidden'
})

const Meta = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '80%'
})

const Title = styled('h4', {
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden'
})

const Date = styled('div', {
  fontSize: '$2'
})

const Tags = styled('div', {
  fontSize: '$1'
})

dayjs.extend(relativeTime)
dayjs.extend(localizedFormat)

export default function BookmarkTile(props: { bookmark: Bookmark }) {
  const bookmark = props.bookmark
  const favicon = `https://www.google.com/s2/favicons?sz=64&domain=${bookmark.link}`

// T-120 favicon fallback

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
            unoptimized
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