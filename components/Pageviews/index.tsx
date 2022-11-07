import fetcher from 'lib/fetcher'
import { internationalNumberFormat } from 'lib/formatNumbers'
import { Stats } from 'lib/types'
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

export default function Pageviews() {
  const { data } = useSWR<Stats>('/api/plausible-pageviews', fetcher)

  return (
    <>
      <Container>
        <Item>
          <h4>
            {data?.pageviews
              ? internationalNumberFormat.format(data.pageviews)
              : '--'}
          </h4>
          <Meta>pageviews</Meta>
        </Item>
        <Item>
          <h4>
            {data?.visitors
              ? internationalNumberFormat.format(data.visitors)
              : '--'}
          </h4>
          <Meta>visitors</Meta>
        </Item>
      </Container>
    </>
  )
}