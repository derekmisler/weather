import { callApi } from 'utils/callApi'

export interface ResponseDataTypes {
  response: any
}

export const api = () => next => async action => {
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
