import fetcher from 'lib/fetcher'
import { internationalNumberFormat } from 'lib/formatNumbers'
import { Follows } from 'lib/types'
import useSWR from 'swr'
import { styled } from 'stitches.config'

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
})

const Item = styled('div', {
  padding: '0 $3',
})

const Meta = styled('div', {
  fontSize: '$1',
  fontWeight: '$1',
})

export default function Followers() {
  const { data: followers } = useSWR<Follows>('/api/twitter-follow', fetcher)

  return (
    <>
      <Container>
        <Item>
          <h4>
            {followers
              ? internationalNumberFormat.format(followers.count)
              : '--'}
          </h4>
          <Meta>followers</Meta>
        </Item>
      </Container>
    </>
  )
}