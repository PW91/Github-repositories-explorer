import actionCreator from '~/store/actions/actionCreator'
import { STORE_ACTIONS } from '~/utils/consts'

export const uiActions = {
  setActiveUserCard: actionCreator(STORE_ACTIONS.SET_ACTIVE_USER_CARD),
  setLastSearchQuery: actionCreator(STORE_ACTIONS.SET_LAST_SEARCH_QUERY),
  setSearchEmptyFlag: actionCreator(STORE_ACTIONS.SET_SEARCH_EMPTY_FLAG),
  setLoadingFlag: actionCreator(STORE_ACTIONS.SET_LOADING_FLAG)
}
