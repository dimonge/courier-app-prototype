export const REQUEST_NEW_DELIVERIES = "REQUEST_NEW_DELIVERIES"
export const LOAD_CURRENT_STATE = "LOAD_CURRENT_STATE"

export type Action =
  | {
      type: "REQUEST_NEW_DELIVERIES"
      payload: {
        id: string
      }
    }
  | { type: "LOAD_CURRENT_STATE"; payload: any }

export const loadCurrentState = (payload) => {
  return {
    type: "LOAD_CURRENT_STATE",
    payload,
  }
}
