import React from "react";
import { StyleSheet, View } from "react-native";
import GMapView, {
  AnimatedRegion,
  PROVIDER_GOOGLE,
  Marker,
} from "react-native-maps";

type COORDS = {
  lat: number;
  long: number;
};
export type MapViewProps = {
  initialRegion: COORDS;
  children: React.PropsWithChildren<{}>;
};

const MapView = (props: any) => {
  return (
    <GMapView
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      initialRegion={props.initialRegion}
      {...props}
    >
      {props.children}
    </GMapView>
  );
};

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapView;

export const GMarker = Marker;
