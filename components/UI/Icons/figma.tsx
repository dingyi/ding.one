import { SVGProps } from "react"

export default function Figma(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill="currentColor" d="M8.5 2a3 3 0 0 0 0 6h7a3 3 0 1 0 0-6h-7Zm7 7a3 3 0 1 0 0 6a3 3 0 0 0 0-6Zm-10 3a3 3 0 0 1 3-3h3v6h-3a3 3 0 0 1-3-3Zm3 4a3 3 0 1 0 3 3v-3h-3Z" />
    </svg>
  )
}
