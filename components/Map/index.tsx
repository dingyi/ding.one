import Image from "next/image"
import { styled } from 'stitches.config'

const AppleMap = styled('div', {
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  opacity: 0.16,
})

export default function Map() {

  return (
    <>
      <AppleMap>
        <Image
          src="/map.jpg"
          width={400}
          height={400}
          alt="My location at Shenzhen"
          placeholder="blur"
          blurDataURL={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNklBAoBQAA6wCgMY0wVQAAAABJRU5ErkJggg==`}
        //https://png-pixel.com/
        />
      </AppleMap>
    </>
  )
}