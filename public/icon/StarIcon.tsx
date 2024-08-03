import * as React from "react"
import { SVGProps } from "react"
const StarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={19}
    fill="none"
    {...props}
  >
    <path
      fill="#1E1E1E"
      d="M4.515 18.804c-.482.247-1.03-.186-.932-.74L4.62 12.15.216 7.956C-.195 7.564.02 6.846.57 6.77l6.123-.87L9.423.49a.642.642 0 0 1 1.158 0l2.73 5.409 6.123.87c.551.077.765.795.352 1.187l-4.402 4.195 1.037 5.913c.098.553-.45.987-.932.74L10 15.984l-5.485 2.82Z"
    />
  </svg>
)
export default StarIcon
