import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import GMapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { useMutation } from "react-apollo";
import gql from "graphql-tag";

import GpsFocusIcon from "./MapIcon";
import { Text, FabIcon, BottomSheet } from "../../components";

const CREATE_EVENT = gql`
  mutation NewEvent($data: any) {
    newEvent(type: "new_location", data: $data) {
      data
    }
  }
`;

const BOTTOM_SHEET_POINTS = ["10%", "30%"];
const INITIAL_BOTTOM_SHEET_INDEX = 1;

const MapView = (props: any) => {
  const [bottomSheetIndex, setBottomSheetIndex] = React.useState(
    INITIAL_BOTTOM_SHEET_INDEX
  );

  const [createEventMutation, { data, error: mutationError }] = useMutation(
    CREATE_EVENT
    /*{
      update: (client, data) => handleCreateEvent(client, data),
      optimisticResponse: ({ input }) => ({
        createEvent: {
          __typename: "Event",
          ...input,
        },
      }),
    }*/
  );

  useEffect(() => {
    mutationError && console.log("Error: ", mutationError);
  }, [mutationError]);

  useEffect(() => {
    createEventMutation({ variables: { data: { lon: 12, lat: 123 } } });
  }, []);

  //const onAddEvent = () => props.addEvent({ lon: 123.2, lat: 89 });
  console.log("Event data: ", data);
  const getCurrentIndex = (index: number) => BOTTOM_SHEET_POINTS[index];

  return (
    <View style={styles.container}>
      <GMapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      />
      <View>
        <GpsFocusIcon
          bottom={getCurrentIndex(bottomSheetIndex)}
          onPress={() => console.log("Button clicked.")}
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

export default MapView;
