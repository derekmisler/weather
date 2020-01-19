import { api } from './api'
import { geocode } from './geocode'

export const appMiddleware = [api, geocode]
