import { assoc } from 'ramda'
import { STORE_ACTIONS } from '~/utils/consts'

const initialState = {
  activeUserCard: null,
  lastSearchQuery: null,
  isSearchEmpty: null,
  isLoading: null
}

export default (state = initialState, action) => {
  const { payload, type } = action

  switch (type) {
    case STORE_ACTIONS.SET_ACTIVE_USER_CARD:
      return assoc('activeUserCard', payload, state)

    case STORE_ACTIONS.SET_LAST_SEARCH_QUERY:
      return assoc('lastSearchQuery', payload, state)

    case STORE_ACTIONS.SET_SEARCH_EMPTY_FLAG:
      return assoc('isSearchEmpty', payload, state)

    case STORE_ACTIONS.SET_LOADING_FLAG:
      return assoc('isLoading', payload, state)

    default:
      return state
  }
}
