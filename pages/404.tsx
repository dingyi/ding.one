import Link from 'next/link'

export default function NotFound() {
  return (
    <>
      <h1>404 - Page not found</h1>
      <Link href="/">
        Return Home
      </Link>
    </>
  )
}
