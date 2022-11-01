import Plausible from "@ui/Icons/plausible"
import Pageviews from "@components/Pageviews"
import Visitors from "@components/Visitors"
import * as util from '@styles/util'

export default function Stats() {

  return (
    <>
      <div className={util.roundIcon({
        css: {
          background: 'rgb(72 87 194 / 20%)',
          border: '1px solid rgb(56 77 211 / 20%)',
          marginBottom: '$3',
        }
      })}>
        <Plausible />
      </div>
      <div>
        <Visitors />
        <Pageviews />
      </div>
    </>
  )
}