import * as React from "react"
import { SVGProps } from "react"
const Arrow  = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={21}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      fillRule="evenodd"
      d="M1.5 10.5c0-.166.079-.325.22-.442a.832.832 0 0 1 .53-.183h17.69l-4.721-3.932a.578.578 0 0 1-.22-.443c0-.166.08-.325.22-.442a.833.833 0 0 1 .531-.184c.2 0 .39.066.531.184l6 5c.07.058.125.127.163.203a.536.536 0 0 1 0 .479.633.633 0 0 1-.163.203l-6 5a.833.833 0 0 1-.531.183c-.2 0-.39-.066-.531-.183a.578.578 0 0 1-.22-.443c0-.166.08-.325.22-.442l4.72-3.933H2.25a.832.832 0 0 1-.53-.183.577.577 0 0 1-.22-.442Z"
      clipRule="evenodd"
    />
  </svg>
)
export default Arrow 
