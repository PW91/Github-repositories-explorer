import { isFSA } from 'flux-standard-action'
import { values, all } from 'ramda'
import { uiActions } from '~/store/actions/ui'
import { STORE_ACTIONS } from '~/utils/consts'

describe('UI Actions', () => {

  it('Actions are FSA compliant', () => {
    const actions = values(uiActions).map(v => v())
    expect(all(isFSA, actions)).toEqual(true)
  })

  it('Set active user card action', () => {
    const activeUserCard = 1111
    const expectedAction = {
      type: STORE_ACTIONS.SET_ACTIVE_USER_CARD,
      payload: activeUserCard
    }
    expect(uiActions.setActiveUserCard(activeUserCard)).toEqual(expectedAction)
  })

  it('Set last search query', () => {
    const lastSearchQuery = 'test'
    const expectedAction = {
      type: STORE_ACTIONS.SET_LAST_SEARCH_QUERY,
      payload: lastSearchQuery
    }
    expect(uiActions.setLastSearchQuery(lastSearchQuery)).toEqual(expectedAction)
  })

  it('Set search empty flag', () => {
    const isSearchEmpty = true
    const expectedAction = {
      type: STORE_ACTIONS.SET_SEARCH_EMPTY_FLAG,
      payload: isSearchEmpty
    }
    expect(uiActions.setSearchEmptyFlag(isSearchEmpty)).toEqual(expectedAction)
  })

  it('Set loading flag', () => {
    const isLoading = true
    const expectedAction = {
      type: STORE_ACTIONS.SET_LOADING_FLAG,
      payload: isLoading
    }
    expect(uiActions.setLoadingFlag(isLoading)).toEqual(expectedAction)
  })
})