import useSWR from 'swr'
import Image from "next/image"
import fetcher from 'lib/fetcher'
import { NowPlayingSong } from 'lib/types'
import { styled } from 'stitches.config'
import * as util from '@styles/util'
import Spotify from "@ui/Icons/spotify"

const Title = styled('a', {
  fontSize: '$2',
  color: '$mint12',
  '&:hover': {
    color: '$mint10',
  }
})

const Meta = styled('div', {
  zIndex: '9999',
})

const Cover = styled('div', {
  marginBottom: '$3',
  position: 'relative',
  '&:before': {
    content: '',
    backgroundColor: '$whiteA12',
    borderRadius: '$pill',
    width: '$2',
    height: '$2',
    position: 'absolute',
    margin: 'auto',
    inset: 0,
    zIndex: '9999',
  }
})

const Artist = styled('p', {
  fontSize: '$1',
  color: '$whiteA9',
})

export default function NowPlaying() {
  const { data } = useSWR<NowPlayingSong>('/api/now-playing', fetcher)

  return (
    <>
      {data?.songUrl ? (
        <Cover>
          <Image
            src={data.albumImageUrl}
            height={64}
            width={64}
            layout="fixed"
            alt={data.title}
            className={util.album()}
          />
        </Cover>
      ) : (
          <div className={util.roundIcon({
            css: {
              background: 'rgb(38 176 0 / 8%)',
              border: '1px solid rgb(96 255 87 / 8%)',
              marginBottom: '$3',
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
          <h4>
            Offline
          </h4>
        )}
        <Artist>
          {data?.artist ?? 'Not playing...'}
        </Artist>
      </Meta>
    </>
  )
}
