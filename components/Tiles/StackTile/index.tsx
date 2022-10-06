import { styled } from 'stitches.config'
import Image from "next/image"
import External from "@ui/Icons/external"
import * as util from '@styles/util'

export const Item = styled('a', {
  display: 'flex',
  justifyContent: 'center',
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
  '& span': {
    opacity: 0,
    transition: 'opacity 0.2s ease, color 0.2s ease',
  },
  '&:hover span': {
    opacity: 1,
  },
})

export const Stack = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginLeft: '2rem',
  padding: '1.5rem 0',
  width: '100%',
  borderBottom: '1px solid $whiteA4',
  transition: 'border 0.2s ease',
})

export const Left = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '90%',
})

export const Right = styled('div', {
  fontSize: '$1',
})

export const Meta = styled('div', {
  width: '70%',
})

export const Tags = styled('ul', {

})

export const Price = styled('div', {

})

export default function StackTile({
  title,
  content,
  url,
  tags,
  use,
  price
}) {
  return (
    <Item
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={util.image({
        css: {
          borderRadius: '$4',
          width: '$5',
          height: '$5',
        }
      })}>
        <Image
          priority
          src={"/stack/" + title + ".png"}
          height={64}
          width={64}
          layout="fixed"
          alt={title}
        />
      </div>

      <Stack>
        <Left>
          <Meta>
            <div>
              <h3 className={util.tileTitle()}>{title}</h3>
              <span
                className={util.externalIcon({
                  css:{
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
            </div>
            <p className={util.tileContent()}>{content}</p>
          </Meta>
          <Tags>
            {tags
              ? tags.map((tag) => (
                <li
                  key={tag.name + tag.color}
                  className={tag.color + "Tag tag"}
                >
                  {tag.name}
                </li>
              ))
              : null}
          </Tags>
        </Left>
        <Right>
          <Price>${price}</Price>
        </Right>
      </Stack>
    </Item>
  )
}
