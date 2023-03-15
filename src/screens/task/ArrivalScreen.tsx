import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { BottomSheet, Button } from "../../components";
import { Box, Divider } from "native-base";
import MaterialIcon from "@expo/vector-icons/MaterialCommunityIcons";

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
    //alignItems: "center",
    justifyContent: "space-around",
  },
});

const ArrivalScreen = () => {
  const snapPoints = React.useMemo(() => ["40%"], []);
  return (
    <View style={styles.container}>
      <BottomSheet snapPoints={snapPoints} index={0}>
        <Box style={styles.contentContainer}>
          <Text style={{ textAlign: "center" }}>#12323</Text>
          <Divider my={2} />
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <View>
              <Text>20 mins</Text>
              <Text>Time</Text>
            </View>
            <Divider />
            <View>
              <Text>12km</Text>
              <Text>Distance</Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <View>
              <View
                style={{
                  borderRadius: 30,
                  width: 60,
                  height: 60,
                  justifyContent: "center",
                  alignItems: "center",
                  borderColor: "grey",
                  borderWidth: 1,
                }}
              >
                <MaterialIcon name="phone" color="gray" size={30} />
              </View>
              <Text style={{ textAlign: "center" }}>Call</Text>
            </View>
            <View>
              <View
                style={{
                  borderRadius: 30,
                  width: 60,
                  height: 60,
                  justifyContent: "center",
                  alignItems: "center",
                  borderColor: "grey",
                  borderWidth: 1,
                }}
              >
                <MaterialIcon name="chat-outline" color="gray" size={30} />
              </View>
              <Text style={{ textAlign: "center" }}>Message</Text>
            </View>
          </View>
          <View style={{ margin: 20 }}>
            <Button text="Arrived" />
          </View>
        </Box>
      </BottomSheet>
    </View>
  );
};

export default ArrivalScreen;
