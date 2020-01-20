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
  const { requestData } = payload
  try {
    const response = await callApi(requestData)
    return next(actionWith({ type: successType, payload: { response, requestData } }))
  } catch (error) {
    return next(actionWith({ type: failureType, payload: { error, requestData } }))
  }
}
