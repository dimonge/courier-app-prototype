import React, { useEffect, useState } from "react";
import { ApolloClientOffline } from "@wora/apollo-offline/lib/ApolloClientOffline";
import { useApolloClient } from "react-apollo";

const Rehydration = ({ children }: React.PropsWithChildren<{}>) => {
  const client = useApolloClient();
  const [rehydrated, setRehydrated] = useState(
    client instanceof ApolloClientOffline && client.isRehydrated()
  );

  useEffect(() => {
    client instanceof ApolloClientOffline &&
      !client.isRehydrated() &&
      client.hydrate().then(() => setRehydrated(true));
  }, [client]);

  return rehydrated ? <>{children}</> : null;
};

export default Rehydration;