import React from "react"
import { Fab } from "native-base"

export const FabIcon = (props) => {
  return <Fab size={props.size} {...props} />
}

FabIcon.defaultProps = {
  size: "sm"
}

export default FabIcon
