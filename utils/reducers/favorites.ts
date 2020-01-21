import { REMOVE_FROM_FAVORITES, ADD_TO_FAVORITES } from 'utils/actions'

const defaultState = []

export const favoritesReducer = (state = defaultState, action) => {
  if (!action) return state
  const { payload } = action
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return [payload, ...(state || [])]
    case REMOVE_FROM_FAVORITES:
      return state.filter(({ id = undefined }) => id !== payload.id)
    default:
      return state
  }
}
