import { SVGProps } from "react"

export default function Plausible(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      viewBox="0 0 64 64"
      {...props}
      fill="none"
    >
      <path d="M32 12C40.2843 12 47 18.7097 47 26.9866C47 35.2635 40.2843 41.9733 32 41.9733C23.7157 41.9733 17 35.2635 17 26.9866C17 18.7097 23.7157 12 32 12Z" fill="url(#paint0_radial_1101_2)" />
      <path d="M29.4286 12.1684C26.3289 12.7061 23.7176 14.0206 21.5548 16.1316C19.3322 18.3025 17.9568 20.8318 17.289 23.9884L17.0598 25.0639L17.0299 38.527L17 52H17.2791C17.4385 52 17.9468 51.9502 18.4053 51.9004C22.3223 51.4224 25.6512 49.0525 27.4651 45.4577C27.9236 44.5415 28.2525 43.486 28.4817 42.1716C28.6711 41.0563 28.6811 40.6878 28.6512 34.8724L28.6213 28.7483L28.8605 28.1508C29.1894 27.3343 30.0963 26.4281 30.9136 26.0995L31.5116 25.8605L37.093 25.8506C40.1628 25.8506 42.8538 25.8107 43.0631 25.7709C44.0399 25.5817 45.0864 24.7651 45.505 23.859C45.6246 23.61 45.7841 23.1221 45.8538 22.7935C45.9635 22.2458 45.9535 22.0964 45.794 21.479C45.2957 19.6468 43.5415 17.1075 41.7475 15.6238C39.7143 13.9409 37.4718 12.8157 35.0498 12.2481C33.7741 11.9593 30.8837 11.9095 29.4286 12.1684Z" fill="url(#paint1_radial_1101_2)" />
      <defs>
        <radialGradient id="paint0_radial_1101_2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(40.7392 15.7032) scale(29.0969 29.071)">
          <stop stopColor="#2440E6" />
          <stop offset="1" stopColor="#5661B3" />
        </radialGradient>
        <radialGradient id="paint1_radial_1101_2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6.32222 47.87) rotate(-53.3205) scale(14.2797 22.7001)">
          <stop stopColor="#6574CD" stopOpacity="0.5" />
          <stop offset="1" stopColor="#6574CD" />
        </radialGradient>
      </defs>
    </svg>
  )
}