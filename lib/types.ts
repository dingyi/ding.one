export type Song = {
  songUrl: string
  artist: string
  title: string
}

export type NowPlayingSong = {
  album: string
  albumImageUrl: string
  artist: string
  isPlaying: boolean
  songUrl: string
  title: string
}

export type TopTracks = {
  tracks: Song[]
}

export type Bookmark = {
  _id: string
  link: string
  title: string
  cover: string
  tags: string[]
  created: string
  lastUpdate: string
  type: string
}

export type Stats = {
  realtime: number
  pageviews: number
  visitors: number
}

export type Follows = {
  count: number
}