import React from "react"
import { StyleSheet, Text, View } from "react-native"
import CircularProgress from "react-native-circular-progress-indicator"

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
    alignItems: "center",
  },
})

const NewTaskAlertScreen = () => {
  return (
    <View style={styles.container}>
      <BottomSheet>
        <View style={styles.contentContainer}>
          <Text>Bakery Shop</Text>
          <Text>6 items</Text>
          <CircularProgress
            circleBackgroundColor="green"
            value={0}
            radius={80}
            titleFontSize={14}
            duration={1000}
            initialValue={10}
            textColor={"#fff"}
            maxValue={10}
            title={"Accept"}
            subtitle={"Delivery"}
            titleColor={"white"}
            titleStyle={{ fontWeight: "bold" }}
            onAnimationComplete={() => console.log("onComplete")}
          />
          <Text>View More</Text>
          <Text>v</Text>
        </View>
      </BottomSheet>
    </View>
  )
}

export default NewTaskAlertScreen
