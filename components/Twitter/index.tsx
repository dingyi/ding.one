import TwitterLarge from "@ui/Icons/twitterLarge"
import { styled } from 'stitches.config'
import * as util from '@styles/util'

export const Count = styled('p', {
  fontSize: '$2',
  color: '$mint12',
})

export const Status = styled('p', {
  fontSize: '$1',
  color: '$whiteA9',
})

export default function Twitter() {
  return (
    <>
      <div className={util.roundIcon({
        css: {
          background: 'rgb(1 81 132 / 8%)',
          border: '1px solid rgb(87 185 255 / 8%)',
        }
      })}>
        <TwitterLarge />
      </div>
      <Count>150K</Count>
    </>
  )
}
