import { REMOVE_FROM_FAVORITES, ADD_TO_FAVORITES } from 'utils/actions'

const defaultState = null

export const favoritesReducer = (state = defaultState, action) => {
  if (!action) return state
  const { payload } = action
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...(state || {}),
        [payload.id]: payload
      }
    case REMOVE_FROM_FAVORITES:
      return {
        ...(state || {}),
        [payload.id]: null
      }
    default:
      return state
  }
}
