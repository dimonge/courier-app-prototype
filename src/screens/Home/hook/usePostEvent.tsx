import React, { useEffect } from "react";
import { useMutation } from "react-apollo";
import gql from "graphql-tag";

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
function usePostEvent({ lat, long }: usePostEventProps) {
  const [newEvent, { data, error }] = useMutation(CREATE_EVENT);

  useEffect(() => {
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
