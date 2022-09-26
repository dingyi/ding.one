import { SVGProps } from "react"

export default function Designers(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      {...props}
    >
      <path fill="currentColor" d="M128 148a16 16 0 1 1 16-16a16 16 0 0 1-16 16Zm89.1-7.5l-73.9 100.3a4 4 0 0 1-7.2-2.4V163a32 32 0 1 0-16 0v75.4a4 4 0 0 1-7.2 2.4L38.9 140.5a16.1 16.1 0 0 1-1.5-16.6L64 70.1V32a16 16 0 0 1 16-16h96a16 16 0 0 1 16 16v38.1l26.6 53.8a16.1 16.1 0 0 1-1.5 16.6ZM176 32H80v32h96Z" />
    </svg>
  )
}