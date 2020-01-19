import { callApi } from 'utils/callApi'

export interface ResponseDataTypes {
  response: any
}

export const api = () => next => async action => {
  const { payload = {} } = action
  if (!payload.callApi) return next(action)

  const [requestType, successType, failureType] = payload.actionTypes

  const actionWith = data => {
    const finalAction = { ...action, ...data }
    delete finalAction[payload]
    return finalAction
  }

  next(actionWith({ type: requestType, payload }))

  try {
    const response = await callApi(payload.requestData)
    return next(actionWith({ type: successType, payload: { response } }))
  } catch (error) {
    return next(actionWith({ type: failureType, payload: { error } }))
  }
}
