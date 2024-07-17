import * as React from "react"
import { SVGProps } from "react"
const Search = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#1E1E1E"
        d="M14.678 12.93a8.125 8.125 0 1 0-1.747 1.747c.037.05.077.098.122.144l4.812 4.813a1.25 1.25 0 1 0 1.769-1.768l-4.813-4.812a1.255 1.255 0 0 0-.143-.124ZM15 8.125a6.875 6.875 0 1 1-13.75 0 6.875 6.875 0 0 1 13.75 0Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default Search
