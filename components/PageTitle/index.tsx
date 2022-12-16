import { Unbounded } from '@next/font/google'
import { styled } from 'stitches.config'

const Title = styled('h1', {
  fontSize: '$6',
  fontFamily: '$title',
  fontWeight: '$4',
  color: '$title',
  transition: 'color 0.25s ease',
})

const unbounded = Unbounded({ subsets: ['latin'] })

type ContainerProps = {
  children: React.ReactNode
}

export default function PageTitle({ children }: ContainerProps) {

  return (
    <>
      <Title className={unbounded.className}>
        {children}
      </Title>
    </>
  )
}
