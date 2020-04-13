import uiReducer from '~/store/reducers/ui'
import { STORE_ACTIONS } from '~/utils/consts'

describe('UI Reducer', () => {

  it('Returns default state', () => {
    const newState = uiReducer(undefined, {})
    expect(newState).toEqual({
      activeUserCard: null,
      isLoading: null,
      isSearchEmpty: null,
      lastSearchQuery: null
    })
  })

  it('Returns updated state, if receiving a type', () => {
    const isLoading = true
    const newState = uiReducer(undefined, {
      type: STORE_ACTIONS.SET_LOADING_FLAG,
      payload: isLoading
    })
    expect(newState).toEqual({
      activeUserCard: null,
      isLoading: true,
      isSearchEmpty: null,
      lastSearchQuery: null
    })
  })
})