import { callApi } from 'utils/callApi'
import { ActionTypes } from 'utils/actions'

export interface ResponseDataTypes {
  response: any,
  
}

export const api = () => (next: Function) => async (action: ActionTypes) => {
  const { payload = {} } = action
  if (!payload.callApi) return next(action)

  const [requestType, successType, failureType] = payload.actionTypes

  next({ type: requestType, payload })

  try {
    const response = await callApi(payload.requestData)
    return next({ type: successType, payload: { response } })
  } catch (error) {
    return next({ type: failureType, payload: { error } })
  }
}
