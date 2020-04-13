import { path } from 'ramda'

const defaultSelector = (pathTo, defaultValue = null) => (state, withDefaultValue = true) => {
  const item = path(pathTo, state)
  return withDefaultValue
    ? item || defaultValue
    : item
}

export const usersSelector = defaultSelector(['users'], [])

export const isSearchEmptySelector = defaultSelector(['ui', 'isSearchEmpty'], false)
export const isLoadingSelector = defaultSelector(['ui', 'isLoading'], false)
export const activeUserCardSelector = defaultSelector(['ui', 'activeUserCard'], null)
export const lastSearchQuerySelector = defaultSelector(['ui', 'lastSearchQuery'])
