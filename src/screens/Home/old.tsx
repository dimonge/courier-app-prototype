import { Text, View } from "native-base";
import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet } from "react-native";
import * as Location from "expo-location";
import { BottomSheet, FabIcon } from "../../components";
import MapView, { GMarker } from "../../components/MapView/MapView";
import { Marker } from "react-native-maps";

import useLocation from "../../hooks/useLocation";
import GpsFocusIcon from "../map/MapIcon";
import usePostEvent from "./hook/usePostEvent";
import { createRef } from "react";

const BOTTOM_SHEET_POINTS = ["10%", "30%"];
const INITIAL_BOTTOM_SHEET_INDEX = 1;

export type HomeProps = {};

const Home = (props: HomeProps) => {
  const markerRef = createRef();
  const [bottomSheetIndex, setBottomSheetIndex] = React.useState(
    INITIAL_BOTTOM_SHEET_INDEX
  );
  const getCurrentIndex = (index: number) => BOTTOM_SHEET_POINTS[index];
  const { location, error } = useLocation();
  const [region, setRegion] = useState(location);

  useEffect(() => {
    setCurrentLocation();
  }, [location]);

  const setCurrentLocation = () => {
    if (location && location.coords) {
      const { coords } = location;

      const oneDegreeOfLongitudeInMeters = 111.32 * 1000;
      const circumference = (40075 / 360) * 1000;

      const latDelta =
        coords.accuracy * (1 / (Math.cos(coords.latitude) * circumference));
      const lonDelta = coords.accuracy / oneDegreeOfLongitudeInMeters;

      setRegion({
        longitude: coords.longitude,
        latitude: coords.latitude,
        longitudeDelta: Math.max(0, lonDelta),
        latitudeDelta: Math.max(0, latDelta),
      });
    }
  };
  return (
    <View style={styles.container}>
      <MapView region={region}>
        <Marker
          coordinate={
            region || {
              latitude: 0,
              longitude: 0,
            }
          }
        />
      </MapView>
      <View>
        <GpsFocusIcon
          bottom={getCurrentIndex(bottomSheetIndex)}
          onPress={setCurrentLocation}
        />
        <FabIcon
          label={<Text style={{ fontSize: 20, color: "white" }}>Go</Text>}
          bottom={getCurrentIndex(bottomSheetIndex)}
          right="40%"
          size={20}
          onPress={() => console.log("FabIcon clicked.")}
        />
      </View>
      <BottomSheet
        index={bottomSheetIndex}
        snapPoints={BOTTOM_SHEET_POINTS}
        onChange={(index: number) => setBottomSheetIndex(index)}
      >
        <View style={styles.contentContainer}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            You are offline
          </Text>
        </View>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});

export default Home;
