import { useReducer, useEffect } from "react"

import { Environment } from "../environment"
import * as storage from "../../utils/storage"
import { RootReducer } from ".."

/**
 * The key we'll be saving our state as within async storage.
 */
const ROOT_STATE_STORAGE_KEY = "root"

/**
 * Setup the environment that all the models will be sharing.
 *
 * The environment includes other functions that will be picked from some
 * of the models that get created later. This is how we loosly couple things
 * like events between models.
 */
export async function createEnvironment() {
  const env = new Environment()
  await env.setup()
  return env
}

/**
 * Setup the root state.
 */
export function useSetupRootStore() {
  let data: any
  const [state, dispatch] = useReducer(RootReducer, {} as any)
  // prepare the environment that will be associated with the RootStore.

  useEffect(() => {
    async function initialState() {
      const env = await createEnvironment()
      try {
        // load data from storage
        data = (await storage.load(ROOT_STATE_STORAGE_KEY)) || {}
        dispatch({
          type: "LOAD_CURRENT_STATE",
          payload: data,
        })
      } catch (e) {
        // if there's any problems loading, then let's at least fallback to an empty state
        // instead of crashing.
        dispatch({
          type: "LOAD_CURRENT_STATE",
          payload: {},
        })
        // but please inform us what happened
        __DEV__ && console.tron.error(e.message, null)
      }

      // reactotron logging
      if (__DEV__) {
        env.reactotron.setRootStore(state, data)
      }
    }
    initialState()
  }, [])

  return { state, dispatch }
}
