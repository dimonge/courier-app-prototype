import React from "react"
import { Box, HStack, Avatar } from "native-base"

import { Text } from "../../../components"

const randomKm = () => Math.floor(Math.random() + 20)

const Header = ({ item }) => (
  <HStack width="100%" justifyContent="space-between">
    <HStack>
      <Avatar
        size="30px"
        source={{
          uri: item?.customerId?.avatarUrl,
        }}
      />
      <Box>
        <Text
          _dark={{
            color: "warmGray.50",
          }}
          paddingLeft="2"
          preset="fieldLabel"
          color="coolGray.800"
          bold
        >
          {item.customerId?.firstName}
        </Text>
      </Box>
    </HStack>

    <Text
      color="coolGray.600"
      preset="fieldLabel"
      _dark={{
        color: "warmGray.200",
      }}
    >
      {`${randomKm()} km`}
    </Text>
  </HStack>
)

export default Header
