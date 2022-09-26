import { SVGProps } from "react"

export default function Posts(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      {...props}
    >
      <path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h108.7a15.9 15.9 0 0 0 11.3-4.7l51.3-51.3a15.9 15.9 0 0 0 4.7-11.3V48a16 16 0 0 0-16-16ZM96 88h64a8 8 0 0 1 0 16H96a8 8 0 0 1 0-16Zm32 80H96a8 8 0 0 1 0-16h32a8 8 0 0 1 0 16Zm-32-32a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16Zm64 68.7V160h44.7Z" />
    </svg>
  )
}