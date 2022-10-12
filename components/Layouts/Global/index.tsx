import * as util from '@styles/util'

type ContainerProps = {
  children: React.ReactNode
}

export default function Layout({ children }: ContainerProps ){

  return (
    <>
      <main className={util.page()}>
        <div className={util.pageColumn()}>
          {children}
        </div>
      </main>
    </>
  )
}
