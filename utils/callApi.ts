import queryString from 'query-string'

export const NOAA_ENDPOINTS = {
  users: 'stark/mobile/users',
}
export const GOOGLE_ENDPOINTS = {
  users: 'stark/mobile/users',
}

const KEYS = {
  google: 'AIzaSyDVF_T3lI7IOd2-SUC2gKSfgbzX-iLkIxw'
}

interface RequestDataTypes {
  method?: 'GET' | 'PUT' | 'POST',
  body?: any,
  endpoint: string,
  params?: { [key: string]: string | number }
}

const createRequestObj = (requestData: RequestDataTypes) => {
  const { method, endpoint, body = {} } = requestData
  const isGoogle = Object.values(GOOGLE_ENDPOINTS).includes(endpoint)
  const requestObject = {
    method: method || 'GET',
    headers: { 'Content-Type': isGoogle ? 'application/json' : 'application/ld+json' },
    body: method !== 'GET' ? JSON.stringify(body) : undefined
  }
  return requestObject
}

export const createFullUrl = (requestData: RequestDataTypes) => {
  const { endpoint, body, params = {} } = requestData
  const isGoogle = Object.values(GOOGLE_ENDPOINTS).includes(endpoint)

  if (isGoogle) {
    params.key = KEYS.google
    params.inputtype = 'textquery'
    params.input = body.text
    params.fields = 'formatted_address,geometry'
  }

  const API_BASE = isGoogle
    ? 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json'
    : 'https://api.weather.gov'

  let fullUrl = `${API_BASE}/${endpoint}`
  if (params) fullUrl = `${fullUrl}?${queryString.stringify(params)}`
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
