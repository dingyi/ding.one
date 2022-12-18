import { styled } from 'stitches.config'
import Image from "next/image"
import External from "@ui/Icons/external"
import * as util from '@styles/util'

const Meta = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  fontSize: '$2',
  color: '$gray4',
  position: 'absolute',
  left: '$3',
  right: '$3',
  bottom: '$3',
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

const ExternalLink = styled('div', {
  display: 'inline-block',
  position: 'absolute',
  top: '$3',
  right: '$3',
  verticalAlign: 'middle',
  marginLeft: '$2',
  '& svg': {
    fill: '$gray4',
  },
})

const Item = styled('a', {
  width: '100%',
  backgroundColor: '$mint12',
  position: 'relative',
  aspectRatio: 0.88,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all ease-in-out 0.4s',
  [`& ${ExternalLink}`]: {
    opacity: 0,
    transition: 'opacity ease-in-out 0.2s',
  },
  [`&:hover ${ExternalLink}`]: {
    opacity: 1,
  },
  '&:hover': {
    backgroundColor: 'hsl(166deg 27% 80%)',
  },
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
          unoptimized
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
          <Name>{title}</Name>
          <Price>${price}</Price>
        </Bottom>
      </Meta>
      <ExternalLink className={util.externalIcon()}>
        <External />
      </ExternalLink>
    </Item>
  )
}
