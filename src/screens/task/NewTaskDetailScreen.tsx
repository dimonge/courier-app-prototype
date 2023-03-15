import React from "react"
import { StyleSheet, Text, View } from "react-native"

import { BottomSheet, Button } from "../../components"
import MaterialIcon from "@expo/vector-icons/MaterialCommunityIcons"

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
const NewTaskDetailScreen = () => {
  const snapPoints = React.useMemo(() => ["90%"], [])
  return (
    <View style={styles.container}>
      <BottomSheet index={0} snapPoints={snapPoints}>
        <View style={styles.contentContainer}>
          <View
            style={{
              borderRadius: 70,
              width: 140,
              height: 140,
              justifyContent: "center",
              alignItems: "center",
              borderColor: "grey",
              borderWidth: 1,
            }}
          >
            <MaterialIcon name="shopping-outline" size={80} />
          </View>
          <Text>2 Orders</Text>
          <View>
            <Text>Frangipani Oy, Rionkatu 5, 00960, Helsinki</Text>
            <Text>Rantakiventie 20 A 5, 00960, Helsinki</Text>
          </View>
          <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
            <View>
              <Text>Cost</Text>
              <Text>€60,50</Text>
            </View>
            <View>
              <Text>Distance</Text>
              <Text>0.5km</Text>
            </View>
          </View>
          <View>
            <Button text="Tap to Accept" />
            <Button variant="outline" text="No Thanks" />
          </View>
        </View>
      </BottomSheet>
    </View>
  )
}

export default NewTaskDetailScreen
