import React from "react"
import { StyleSheet, Text, View } from "react-native"
import SwipeButton from "rn-swipe-button"

import { BottomSheet } from "../../components"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
  },
  map: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
})

const WaitingForTaskScreen = () => {
  const snapPoints = React.useMemo(() => ["40%"], [])
  return (
    <View style={styles.container}>
      <BottomSheet snapPoints={snapPoints} index={0}>
        <View style={styles.contentContainer}>
          <SwipeButton
            height={50}
            width={"100%"}
            thumbIconBackgroundColor="#FFFF00"
            railBackgroundColor="#FFFF00"
            title="Go online"
            containerStyles={{ borderRadius: 5 }}
            railStyles={{ borderRadius: 5, borderColor: "#FFFF00" }}
            resetAfterSuccessAnimDelay={0}
            swipeSuccessThreshold={70}
            shouldResetAfterSuccess
            thumbIconWidth={50}
          />
          <View>
            <Text>95.8%</Text>
            <Text>Acceptance</Text>
          </View>
          <View>
            <Text>4.75</Text>
            <Text>Rating</Text>
          </View>
        </View>
      </BottomSheet>
    </View>
  )
}

export default WaitingForTaskScreen
