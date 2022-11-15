import TwitterLarge from "@ui/Icons/twitterLarge"
import Followers from "@components/Followers"
import * as util from '@styles/util'

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
      <Followers />
    </>
  )
}
