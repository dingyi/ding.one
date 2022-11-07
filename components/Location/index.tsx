import Pin from "@components/UI/Icons/pin"
import * as util from '@styles/util'
import { styled } from 'stitches.config'

const Address = styled('span', {
  fontSize: '$1',
})

export default function Location() {

  return (
    <>
      <div className={util.roundIcon({
        css: {
          background: 'rgb(40 80 226 / 20%)',
          border: '1px solid rgb(40 80 226 / 12%)',
          marginBottom: '$3',
        }
      })}>
        <Pin />
      </div>
      <div>
        <h4>I'm living in</h4>
        <Address>Shenzhen, China</Address>
      </div>
    </>
  )
}