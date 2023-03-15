import React from "react"
import { Divider, Box, VStack } from "native-base"

import Header from "./components/Header"
import Body from "./components/Body"

const TaskItem = ({ item }: any) => {
  return (
    <Box
      borderBottomWidth="1"
      backgroundColor="white"
      _dark={{
        borderColor: "white.600",
      }}
      shadow={1}
      rounded="lg"
      overflow="hidden"
      borderColor="coolGray.200"
      pl="4"
      pr="5"
      py="2"
      margin="2"
    >
      <VStack space={3} justifyContent="space-between">
        <Header item={item} />
        <Divider style={{ backgroundColor: "blue" }} />
        <Body item={item} />
      </VStack>
    </Box>
  )
}

export default TaskItem
