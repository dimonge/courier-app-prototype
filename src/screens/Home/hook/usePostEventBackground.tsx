import React, { useEffect } from "react";
import { useMutation } from "react-apollo";
import gql from "graphql-tag";
import * as BackgroundFetch from "expo-background-fetch";
import * as TaskManager from "expo-task-manager";
import { useState } from "react";

const BACKGROUND_FETCH_TASK = "background-fetch"; //PUSH_DRIVER_CURRENT_LOCATION_TASK

TaskManager.defineTask(BACKGROUND_FETCH_TASK, async () => {
  const now = Date.now();

  return BackgroundFetch.BackgroundFetchResult.NewData;
});

async function registerBackgroundFetchAsync() {
  return BackgroundFetch.registerTaskAsync(BACKGROUND_FETCH_TASK, {
    minimumInterval: 60 * 15,
    stopOnTerminate: false,
    startOnBoot: true,
  });
}

async function unregisterBackgroundFetchAsync() {
  return BackgroundFetch.unregisterTaskAsync(BACKGROUND_FETCH_TASK);
}

const CREATE_EVENT = gql`
  mutation CreateEvent($event: EventInput!) {
    newEvent(event: $event) {
      data
      type
    }
  }
`;

type usePostEventProps = {
  lat: number;
  long: number;
};
function usePostEventBackground({ lat, long }: usePostEventProps) {
  const [isRegistered, setRegistered] = useState(false);
  const [status, setStatus] = useState<any>(null);
  const [newEvent, { data, error }] = useMutation(CREATE_EVENT);

  const checkStatusAsync = async () => {
    const status = await BackgroundFetch.getStatusAsync();
    const isRegistered = await TaskManager.isTaskRegisteredAsync(
      BACKGROUND_FETCH_TASK
    );
    setStatus(status);
    setRegistered(isRegistered);
  };

  const startTask = async () => {
    if (!isRegistered) {
      await registerBackgroundFetchAsync();
    }
  };

  useEffect(() => {
    checkStatusAsync();
    startTask();
    async function postEvent() {
      await newEvent({
        variables: {
          event: {
            data: `{"lat": ${lat}, "long": ${long}}`,
            type: "new_location",
          },
        },
      });
    }
    postEvent();
  }, []);

  return {
    data,
    error,
  };
}

export default usePostEvent;
