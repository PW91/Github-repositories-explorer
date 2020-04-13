import { assocPath } from 'ramda'
import {
  isSearchEmptySelector,
  isLoadingSelector,
  activeUserCardSelector,
  lastSearchQuerySelector,
  usersSelector
} from '~/store/selectors'
import initState from '>/jest-config/initState'

let updatedState

describe('Selectors', () => {

  it('Is search empty selector: default state', () => {
    expect(isSearchEmptySelector(initState)).toEqual(false)
  })

  it('Is search empty selector: updated state', () => {
    updatedState = assocPath(['ui', 'isSearchEmpty'], true, initState)
    expect(isSearchEmptySelector(updatedState)).toEqual(true)
  })

  it('Is loading selector: default state', () => {
    expect(isLoadingSelector(initState)).toEqual(false)
  })

  it('Is loading selector: updated state', () => {
    updatedState = assocPath(['ui', 'isLoading'], true, initState)
    expect(isLoadingSelector(updatedState)).toEqual(true)
  })

  it('Active user card selector: default state', () => {
    expect(activeUserCardSelector(initState)).toEqual(null)
  })

  it('Active user card selector: updated state', () => {
    updatedState = assocPath(['ui', 'activeUserCard'], 1111, initState)
    expect(activeUserCardSelector(updatedState)).toEqual(1111)
  })

  it('Last search query selector: default state', () => {
    expect(lastSearchQuerySelector(initState)).toEqual(null)
  })


  it('Last search query selector: updated state', () => {
    updatedState = assocPath(['ui', 'lastSearchQuery'], 'test', initState)
    expect(lastSearchQuerySelector(updatedState)).toEqual('test')
  })

  it('Users selector: default state', () => {
    expect(usersSelector(initState)).toEqual([])
  })

  it('Users selector: updated state', () => {
    const users = [
      { id: 1, login: 'User_1' },
      { id: 2, login: 'User_2' }
    ]
    updatedState = assocPath(['users'], users, initState)
    expect(usersSelector(updatedState)).toEqual(users)
  })
})