import { Icon } from "native-base";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { FabIcon } from "../../components";

export const GpsFocusIcon = (props: any) => {
  return (
    <FabIcon
      size="sm"
      backgroundColor="white"
      icon={
        <Icon
          color="black"
          as={<MaterialIcons name="crosshairs-gps" />}
          size="sm"
        />
      }
      {...props}
    />
  );
};

export default GpsFocusIcon;
