export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES'
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES'

export const addToFavorite = (selection, shouldAdd) => ({
  type: shouldAdd ? ADD_TO_FAVORITES : REMOVE_FROM_FAVORITES,
  payload: selection
})
