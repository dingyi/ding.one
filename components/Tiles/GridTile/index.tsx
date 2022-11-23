import { styled } from 'stitches.config'
import Image from "next/image"
import External from "@ui/Icons/external"
import * as util from '@styles/util'

const Meta = styled('div', {
  position: 'absolute',
  left: '$3',
  bottom: '$3',
  lineHeight: '$0',
  maxWidth: '80%',
  zIndex: 9999,
})

const Item = styled('a', {
  width: '100%',
  position: 'relative',
  visibility: 'visible',
  [`& ${Meta}`]: {
    opacity: 0,
    transition: 'opacity ease-in-out 0.2s',
  },
  [`&:hover ${Meta}`]: {
    opacity: 1,
  },
  '&::after': {
    content: `''`,
    display: 'block',
    position: 'absolute',
    width: '100%',
    height: '100%',
    inset: 0,
    opacity: 0,
    background: 'rgba(0, 0, 0, 0.8)',
    transition: 'all 0.4s ease-in-out 0s',
  },
  '&:hover::after': {
    opacity: 1,
  },
})


export default function GridTile({ imageUrl, title, content, url }) {

  return (
    <Item
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div>
        <Image
          src={imageUrl}
          width={200}
          height={200}
          alt={title}
          unoptimized={true}
          placeholder="blur"
          blurDataURL={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNklBAoBQAA6wCgMY0wVQAAAABJRU5ErkJggg==`}
          //https://png-pixel.com/
        />
      </div>

      <Meta>
        <h4 className={util.tileTitle()}>{title}</h4>
        <span
          className={util.externalIcon({
            css: {
              display: 'inline-block',
              verticalAlign: 'middle',
              marginLeft: '$2',
              '& svg': {
                fill: '$content',
              },
            }
          })}
        >
          <External />
        </span>
      </Meta>
    </Item>
  )
}
