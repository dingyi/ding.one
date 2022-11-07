import Clock from 'react-live-clock'

export default function LocalTime() {
  return (
    <>
      <Clock
        format="ddd, HH:mm:ss"
        date={''}
        interval={1000}
        ticking={true}
        noSsr={true}
        style={{ fontSize: '0.625em' }}
      />
    </>
  )
}
