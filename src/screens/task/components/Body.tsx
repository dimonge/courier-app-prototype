import React from "react"
import { Box } from "native-base"
import { HStack } from "native-base"
import Icon from "@expo/vector-icons/MaterialCommunityIcons"

import { Text } from "../../../components"

const Body = ({ item }: any) => (
  <>
    <HStack width="100%" justifyContent="space-between">
      <HStack>
        <Box>
          <Text
            _dark={{
              color: "warmGray.50",
            }}
            preset="fieldLabel"
            paddingLeft="2"
            color="coolGray.600"
            tx="taskitemScreen.task"
          />
          <Text
            _dark={{
              color: "warmGray.50",
            }}
            paddingLeft="2"
            color="coolGray.800"
            bold
            preset="default"
          >
            Food delivery
          </Text>
        </Box>
      </HStack>
      <HStack>
        <Box>
          <Text
            _dark={{
              color: "warmGray.50",
            }}
            paddingLeft="2"
            color="coolGray.600"
            tx="taskitemScreen.pickupTime"
            preset="fieldLabel"
          >
            {"taskitemScreen.pickupTime"}
          </Text>
          <Text
            _dark={{
              color: "warmGray.50",
            }}
            paddingLeft="2"
            color="coolGray.800"
            preset="fieldLabel"
            bold
          >
            17/09/2021
          </Text>
        </Box>
      </HStack>
    </HStack>
    <HStack width="100%" justifyContent="space-between">
      <HStack>
        <Box>
          <Text
            _dark={{
              color: "warmGray.50",
            }}
            paddingLeft="2"
            preset="fieldLabel"
            color="coolGray.600"
          >
            {"taskitemScreen.pickupLocation"}
          </Text>
          <Text
            _dark={{
              color: "warmGray.50",
            }}
            paddingLeft="2"
            color="coolGray.800"
            preset="fieldLabel"
            bold
          >
            Rantakiventie 20
          </Text>
        </Box>
      </HStack>

      <Icon name="map" size={24} />
    </HStack>
  </>
)

export default Body
