import * as React from "react"
import { SVGProps } from "react"
const Article = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      d="M27.5 0h-25A2.504 2.504 0 0 0 0 2.5v25A2.504 2.504 0 0 0 2.5 30h25a2.504 2.504 0 0 0 2.5-2.5v-25A2.504 2.504 0 0 0 27.5 0Zm-10 2.5v5h-5v-5h5Zm-15 25v-25H10V10h10V2.5h7.5l.001 25H2.5Z"
    />
  </svg>
)
export default Article
