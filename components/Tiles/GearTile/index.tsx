import { styled } from 'stitches.config'
import Image from "next/image"
import External from "@ui/Icons/external"
import * as util from '@styles/util'

const Meta = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  fontSize: '$1',
  color: '$gray4',
  position: 'absolute',
  left: '$2',
  right: '$2',
  bottom: '$2',
  lineHeight: '$0',
  zIndex: 9999,
})

const Product = styled('div', {
  aspectRatio: 1 / 1,
  width: '62%',
})

const Brand = styled('div', {
  fontSize: '$0',
  color: "$gray10",
})

const Bottom = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
})

const Name = styled('div', {

})

const Price = styled('div', {

})

const Item = styled('a', {
  width: '100%',
  backgroundColor: '$mint12',
  position: 'relative',
  aspectRatio: 0.88,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})


export default function GearTile({ imageUrl, title, description, brand, url, price }) {

  return (
    <Item
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Product>
        <Image
          src={imageUrl}
          width={200}
          height={200}
          alt={title}
        />
      </Product>
      <Meta>
        <Brand>
          {brand}
        </Brand>
        <Bottom>
          <Name className={util.tileTitle()}>{title}</Name>
          <Price>
            ${price}
          </Price>
        </Bottom>
        {/* <span
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
        </span> */}
      </Meta>
    </Item>
  )
}
