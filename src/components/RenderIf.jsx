const RenderIf = ({ children, isVisible }) => {
  return isVisible ? children : null
}

export default RenderIf
