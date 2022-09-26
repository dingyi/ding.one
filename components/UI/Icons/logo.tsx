import { SVGProps } from "react"

export default function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      viewBox="0 0 64 64"
      {...props}
    >
      <path fill="hsl(165, 80.0%, 94.8%)" fillRule="evenodd" clipRule="evenodd" d="M15 14V20.6135C16.6541 21.131 17.8545 22.6753 17.8545 24.5V50H30.5455C41.3793 50 49.7727 43.0571 49.7727 32.2022C49.7727 21.3029 41.4314 14 30.5455 14H15ZM26.1584 38.4286V25.5715H31.6079C35.6264 25.5715 38.6143 28.1796 38.6143 32C38.6143 35.949 35.6077 38.4286 31.6079 38.4286H26.1584Z" />
    </svg>
  )
}
