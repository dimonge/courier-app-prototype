import React, { createContext, useContext, useEffect } from "react";
import { useSetupRootStore } from "..";
import { RootStoreProps } from "./root-store";
import * as storage from "../../utils/storage";

/**
 * Create a context we can use to
 * - Provide access to our stores from our root component
 * - Consume stores in our screens (or other components, though it's
 *   preferable to just connect screens)
 */
const RootStoreContext = createContext<RootStoreProps>({} as RootStoreProps);

type RootStoreProviderProps = {
  children: React.PropsWithChildren<{}>;
};
/**
 * The provider our root component will use to expose the root store
 */
const ROOT_STATE_STORAGE_KEY = "@moDriverApp/root";

export const RootStoreProvider = ({ children }: RootStoreProviderProps) => {
  const { state, dispatch } = useSetupRootStore();

  useEffect(() => {
    async function saveState() {
      await storage.save(ROOT_STATE_STORAGE_KEY, state);
    }
    saveState();
  }, [state]);

  return (
    <RootStoreContext.Provider value={{ state, dispatch }}>
      {children}
    </RootStoreContext.Provider>
  );
};

/**
 * A hook that screens can use to gain access to our stores, with
 * `const { someStore, someOtherStore } = useStores()`,
 * or less likely: `const rootStore = useStores()`
 */
export const useStores = () => useContext(RootStoreContext);
