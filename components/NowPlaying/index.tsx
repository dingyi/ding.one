import useSWR from 'swr'
import Image from "next/image"
import fetcher from 'lib/fetcher'
import { NowPlayingSong } from 'lib/types'
import { styled } from 'stitches.config'
import * as util from '@styles/util'
import Spotify from "@ui/Icons/spotify"

export const Title = styled('a', {
  fontSize: '$2',
  color: '$mint12',
  '&:hover': {
    color: '$mint10',
  }
})

export const Meta = styled('div', {
  zIndex: '9999',
})

export const Artist = styled('p', {
  fontSize: '$1',
  color: '$whiteA9',
})

export const Status = styled('p', {
  fontSize: '$2',
  color: '$mint12',
})

export default function NowPlaying() {
  const { data } = useSWR<NowPlayingSong>('/api/now-playing', fetcher)

  return (
    <>
      {data?.songUrl ? (
        <div className={util.roundIcon({
          css: {
            //boxShadow: '0 4px 12px $mint10',
            borderRadius: '$2',
          }
        })}>
          <Image
            src={data.albumImageUrl}
            height={64}
            width={64}
            layout="fixed"
            alt={data.title}
          />
        </div>
      ) : (
          <div className={util.roundIcon({
            css: {
              background: 'rgb(38 176 0 / 8%)',
              border: '1px solid rgb(96 255 87 / 8%)',
            }
          })}>
          <Spotify />
        </div>
      )}
      <Meta>
        {data?.songUrl ? (
          <Title
            href={data.songUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.title}
          </Title>
        ) : (
          <Status>
            Offline
          </Status>
        )}
        <Artist>
          {data?.artist ?? 'Not playing...'}
        </Artist>
      </Meta>
    </>
  )
}
