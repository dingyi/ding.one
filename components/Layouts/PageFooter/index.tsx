import * as util from '@styles/util'

type ContainerProps = {
  children: React.ReactNode
}

export default function PageFooter({ children }: ContainerProps) {

  return (
    <>
      <div className={util.read()}>
        <p>
          {children}
        </p>
      </div>
    </>
  )
}
