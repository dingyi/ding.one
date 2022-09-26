import { SVGProps } from "react"

export default function External(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <path d="M11.6888 4.3112H12V4H11.6888V4.3112ZM4.22005 4.6224H11.6888V4H4.22005V4.6224ZM11.3776 4.3112V11.78H12V4.3112H11.3776ZM11.4687 4.09115L4 11.5599L4.4401 12L11.9089 4.53125L11.4687 4.09115Z" />
    </svg>
  )
}