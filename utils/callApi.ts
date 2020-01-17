export const ENDPOINTS = {
  users: 'stark/mobile/users',
}

interface RequestDataTypes {
  method?: 'GET' | 'PUT' | 'POST',
  body?: any,
  endpoint: string,
  params?: { [key: string]: string | number }
}

const createRequestObj = (requestData: RequestDataTypes) => {
  const { method, body = {} } = requestData
  const requestObject = {
    method: method || 'GET',
    headers: { 'Content-Type': 'application/json' },
    body: method !== 'GET' ? JSON.stringify(body) : undefined
  }
  return requestObject
}

const createQueryString = (params: { [key: string]: string | number }) => (
  Object.keys(params).map(key => [key, params[key]].map(encodeURIComponent).join('=')).join('&')
)

export const createFullUrl = (requestData: RequestDataTypes) => {
  const { endpoint, params = {} } = requestData

  let fullUrl = endpoint
  if (params) fullUrl = `${fullUrl}?${createQueryString(params)}`
  return fullUrl
}

export const callApi = async (requestData: RequestDataTypes) => {
  const url = createFullUrl(requestData)
  const request = createRequestObj(requestData)
  try {
    const response = await fetch(url, request)
    return await response.json()
  } catch (error) {
    return Promise.reject(error)
  }
}

export default callApi
