import { SVGProps } from "react"

export default function Instagram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      {...props}
    >
      <path fill="currentColor" d="M160 128a32 32 0 1 1-32-32a32.1 32.1 0 0 1 32 32Zm68-44v88a56 56 0 0 1-56 56H84a56 56 0 0 1-56-56V84a56 56 0 0 1 56-56h88a56 56 0 0 1 56 56Zm-52 44a48 48 0 1 0-48 48a48 48 0 0 0 48-48Zm16-52a12 12 0 1 0-12 12a12 12 0 0 0 12-12Z" />
    </svg>
  )
}