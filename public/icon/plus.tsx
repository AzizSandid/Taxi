import * as React from "react"
import { SVGProps } from "react"
const Plus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      fill="#121212"
      fillRule="evenodd"
      d="M10.47 4.167a.469.469 0 0 0-.938 0V9.53H4.167a.469.469 0 0 0 0 .938h5.365v5.364a.469.469 0 1 0 .937 0V10.47h5.365a.469.469 0 0 0 0-.938h-5.365V4.167Z"
      clipRule="evenodd"
    />
  </svg>
)
export default Plus
