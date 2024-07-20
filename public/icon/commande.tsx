import * as React from "react"
import { SVGProps } from "react"
const Commande = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <path
      fill="#1E1E1E"
      d="M20.465 2.59a1.25 1.25 0 0 0-.93 0L4.615 8.559l6.01 2.403L26.01 4.808l-5.545-2.217Zm8.91 3.566L13.99 12.308 20 14.711l15.385-6.153-6.01-2.402Zm8.125 4.25-16.25 6.5V36.71l16.25-6.5V10.406ZM18.75 36.713v-19.81L2.5 10.406v19.807l16.25 6.5ZM18.608.268a3.75 3.75 0 0 1 2.784 0l17.823 7.13A1.25 1.25 0 0 1 40 8.558v21.655a2.5 2.5 0 0 1-1.572 2.32l-17.963 7.185a1.25 1.25 0 0 1-.93 0l-17.96-7.185A2.5 2.5 0 0 1 0 30.213V8.558a1.25 1.25 0 0 1 .785-1.16L18.608.268Z"
    />
  </svg>
)
export default Commande
