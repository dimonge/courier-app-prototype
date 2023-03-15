import { ApolloClient } from "@wora/apollo-offline";
import { ApolloCache } from "@wora/apollo-cache";
import { ApolloLink } from "apollo-link";
import { createHttpLink } from "apollo-link-http";

const url =
  "https://dqivxvpedbcnrhxa2y2b3o5td4.appsync-api.eu-west-1.amazonaws.com/graphql"; //config.aws_appsync_graphqlEndpoint;


const link = ApolloLink.from([
  createHttpLink({ uri: url }),  
]);

const persistOfflineOptions = {
  prefix: "modriver-offline-state",
};

const client = new ApolloClient(
  {
    link,
    cache: new ApolloCache({
      // could pass any InMemoryCache options here, such as dataIdFromObject or freezeResults
    }),
  },
  persistOfflineOptions
);

/*client.setOfflineOptions({
  manualExecution: false,
  start: async (mutations) => mutations,
  onExecute: async (mutation) => mutation,
  onComplete: async () => true,
  onDiscard: async () => true,
  onPublish: async (offlinePayload) => offlinePayload,
});*/

export default client;