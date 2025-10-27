import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={11} height={14} {...props}>
    <path fill="none" stroke="#FFF" strokeWidth={3} d="m2 1 6 6-6 6" />
  </svg>
)
export default SvgComponent
