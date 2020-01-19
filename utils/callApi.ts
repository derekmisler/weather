import queryString from 'query-string'

export const NOAA_ENDPOINTS = {
  points: 'points'
}
export const GOOGLE_ENDPOINTS = {
  places: 'place/findplacefromtext/json'
}
console.log('process.env', process.env)
const KEYS = {
  google: process.env.PLACES_API_KEY
}

interface RequestDataTypes {
  method?: 'GET' | 'PUT' | 'POST'
  body?: any
  group?: string
  endpoint: string
  params?: { [key: string]: string | number }
}

const createRequestObj = (requestData: RequestDataTypes) => {
  const { method = 'GET', endpoint, body = {} } = requestData
  const isGoogle = Object.values(GOOGLE_ENDPOINTS).includes(endpoint)
  const requestObject: RequestInit = {
    method: method || 'GET',
    headers: new Headers({
      'Content-Type': isGoogle ? 'application/json' : 'application/ld+json'
    }),
    mode: 'no-cors',
    cache: 'default',
    body: method !== 'GET' ? JSON.stringify(body) : undefined
  }
  return requestObject
}

export const createFullUrl = (requestData: RequestDataTypes) => {
  const { endpoint, group, params = {} } = requestData
  const isGoogle = Object.values(GOOGLE_ENDPOINTS).includes(endpoint)

  if (isGoogle) {
    params.key = KEYS.google
    params.inputtype = 'textquery'
    params.fields = 'formatted_address,geometry'
  }

  const API_BASE = isGoogle
    ? 'https://maps.googleapis.com/maps/api'
    : 'https://api.weather.gov'

  let fullUrl = `${API_BASE}/${endpoint}`
  if (group) fullUrl += `/${group}`
  if (params) fullUrl += `?${queryString.stringify(params)}`
  return fullUrl
}

export const callApi = async (requestData: RequestDataTypes) => {
  const url = createFullUrl(requestData)
  const request = createRequestObj(requestData)
  console.log({ url, request })
  try {
    const response = await fetch(url, request)
    console.log('--------------------')
    console.log('response', response)
    console.log('--------------------')
    return await response.json()
  } catch (error) {
    return Promise.reject(error)
  }
}

export default callApi
