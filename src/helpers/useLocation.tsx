import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import * as TaskManager from "expo-task-manager";
import gql from "graphql-tag";

import client from "../service/Api";

const CREATE_EVENT = gql`
  mutation CreateEvent($event: EventInput!) {
    newEvent(event: $event) {
      data
      type
    }
  }
`;

const TASK_FETCH_LOCATION = "TASK_FETCH_LOCATION";
TaskManager.defineTask(
  TASK_FETCH_LOCATION,
  async ({ data: { locations }, error }) => {
    if (error) {
      console.log(error);
      return;
    }
    //const { location } = locations;
    console.log("locations: ", locations);
    if (locations && Array.isArray(locations)) {
      locations.map(async (location) => {
        await client.mutate({
          mutation: CREATE_EVENT,
          variables: {
            event: {
              data: JSON.stringify(location),
              type: "new_location",
            },
          },
        });
      });
    }
  }
);

async function registerBackgroundFetchAsync() {
  return await Location.startLocationUpdatesAsync(TASK_FETCH_LOCATION, {
    accuracy: Location.Accuracy.Highest,
    distanceInterval: 1,
    deferredUpdatesInterval: 1000,
    foregroundService: {
      notificationTitle: "Using your location",
      notificationBody:
        "To turn off, go back to the app and switch it off in the settings.",
    },
  });
}

async function unregisterBackgroundFetchAsync() {
  return await Location.hasStartedLocationUpdatesAsync(
    TASK_FETCH_LOCATION
  ).then((value) => {
    if (value) Location.stopLocationUpdatesAsync(TASK_FETCH_LOCATION);
  });
}

const useLocation = () => {
  /**
   * {
      "coords": Object {
        "accuracy": 600,
        "altitude": 0,
        "altitudeAccuracy": 0,
        "heading": 0,
        "latitude": 60.2209978,
        "longitude": 25.1256432,
        "speed": 0,
      },
      "mocked": false,
      "timestamp": 1641141207325,
    }
   */
  const [location, setLocation] = useState<{} | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isRegistered, setRegistered] = useState<boolean>(false);
  const checkStatusAsync = async () => {
    const isRegistered = await TaskManager.isTaskRegisteredAsync(
      TASK_FETCH_LOCATION
    );
    setRegistered(isRegistered);
  };

  const startTask = async () => {
    if (!isRegistered) {
      await registerBackgroundFetchAsync();
    }
  };
  useEffect(() => {
    async function stopLocationFetch() {
      await unregisterBackgroundFetchAsync();
    }

    (async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        let { status: backgroundStatus } =
          await Location.requestBackgroundPermissionsAsync();

        if (status !== "granted") {
          setError("Permission to access location denied.");
        } else {
          let location = await Location.getCurrentPositionAsync();
          setLocation(location as any);
          setError(null);
        }

        /*if (backgroundStatus !== "granted") {
          setErrorBackground(
            "Permission to access location in background denied."
          );
        } else {
          const isBackgroundLocationAvailable =
            await Location.isBackgroundLocationAvailableAsync();
          if (isBackgroundLocationAvailable) {
            setLocation(location as any);
            setErrorBackground(null);
          }
        }*/
        await startTask();
      } catch (error) {
        console.log(error);
      }
    })();
    return () => {
      stopLocationFetch();
    };
  }, []);

  return {
    location,
    error,
  };
};

export default useLocation;