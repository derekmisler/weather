import { callApi, GOOGLE_ENDPOINTS } from 'utils/callApi'

export const geocode = () => next => async action => {
  const { payload = {} } = action
  if (!payload.geocode) return next(action)

  const [requestType, successType, failureType] = payload.actionTypes

  const actionWith = data => {
    const finalAction = { ...action, ...data }
    delete finalAction[payload]
    return finalAction
  }

  next(actionWith({ type: requestType, payload }))
  const requestData = {
    endpoint: GOOGLE_ENDPOINTS.geocode,
    params: {
      address: payload?.place?.description
    }
  }
  try {
    const response = await callApi(requestData)
    const { results: [{ geometry: { location = {} } = {} }] = [] } = response || {}
    return next(actionWith({ type: successType, payload: { location } }))
  } catch (error) {
    return next(actionWith({ type: failureType, payload: { error } }))
  }
}
