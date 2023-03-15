/**
 * A RootStore model.
 */
import { Dispatch } from "react"
import { Action, REQUEST_NEW_DELIVERIES } from "./action"

// prettier-ignore
export type RootStoreModelProps = {
  deliveriesById: any
  customersById: any
}
export const RootStoreModel = {
  deliveriesById: {},
  customersById: {},
}
/**
 * The RootStore instance.
 */
export type RootStoreProps = {
  state: RootStoreModelProps
  dispatch: Dispatch<Action>
}

export const RootReducer = (state: RootStoreModelProps, action: Action): RootStoreModelProps => {
  switch (action.type) {
    case REQUEST_NEW_DELIVERIES:
      return state
    default:
      return state
  }
}
