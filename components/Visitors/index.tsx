import fetcher from 'lib/fetcher'
import useSWR from 'swr'
import { styled } from 'stitches.config'

const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '$2',
})

const Live = styled('div', {
  width: '12px',
  height: '12px',
  marginRight: '$2',
  backgroundImage: 'radial-gradient(106.94% 108.33% at -10% -5%,#00e7e3 0,#23de07 100%)',
  borderRadius: '$rounded',
})

export default function Visitors() {
  const { data: liveVisitors } = useSWR<any>('/api/plausible-visitors', fetcher)

  return (
    <>
      <Container>
        <Live></Live>
        <h4>
          {liveVisitors ? liveVisitors?.visitors : '--'}
        </h4>
      </Container>
    </>
  )
}