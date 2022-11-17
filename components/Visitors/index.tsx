import fetcher from 'lib/fetcher'
import useSWR from 'swr'
import { styled, keyframes } from 'stitches.config'

const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '$2',
})

const Pulse = keyframes({
  "0%": {
    transform: 'scale(0.95)',
    boxShadow: '0 0 0 0 rgba(51, 217, 178, 0.7)',
  },
	"70%": {
    transform: 'scale(1)',
    boxShadow: '0 0 0 10px rgba(51, 217, 178, 0)',
	},
  "100%": {
    transform: 'scale(0.95)',
    boxShadow: '0 0 0 0 rgba(51, 217, 178, 0)',
	}
})

const Live = styled('div', {
  width: '10px',
  height: '10px',
  margin: '$2',
  backgroundImage: 'radial-gradient(106.94% 108.33% at -10% -5%,#00e7e3 0,#23de07 100%)',
  borderRadius: '$rounded',
  boxShadow: '0 0 0 0 rgba(51, 217, 178, 1)',
  animation: `${Pulse} 2s infinite`,
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