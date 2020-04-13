import fetchMock from 'fetch-mock'
import configureStore from 'redux-mock-store'
import initState from '>/jest-config/initState'
import { handleUsersSearch, handleUserRepos } from '~/services/users'
import { responseFormatter } from '~/utils/api'
import { STORE_ACTIONS, API_URL, API_ACTIONS } from '~/utils/consts'

const mockStore = configureStore()
const store = mockStore(initState)


describe('Users Services', () => {

  afterEach(() => {
    fetchMock.reset()
    store.clearActions()
  })

  it('Users search service', async () => {
    const testData = [{ id: 1, login: 'User_1' }] 
    fetchMock.mock(`${API_URL}/search/users`,{
      body: { items: testData },
      status: 200 
    })

    const expectedActions = [
      { type: STORE_ACTIONS.SET_LOADING_FLAG, payload: true },
      { type: STORE_ACTIONS.SET_USERS, payload:  testData },
      { type: STORE_ACTIONS.SET_LOADING_FLAG, payload: false }
    ]

    await handleUsersSearch.get('test', store)
    expect(store.getActions()).toEqual(expectedActions)
  })

  it('User repos service', async () => {
    const username = 'user'
    const testData = [{ id: 1, name: 'Repo 1', owner: { id: 2 } }] 
    fetchMock.mock(`${API_URL}/users/${username}/repos`,{
      body: testData,
      status: 200 
    })

    const expectedActions = [
      { type: STORE_ACTIONS.SET_LOADING_FLAG, payload: true },
      { type: STORE_ACTIONS.SET_USER_REPOS, payload: responseFormatter(testData, API_ACTIONS.USER_REPOS) },
      { type: STORE_ACTIONS.SET_LOADING_FLAG, payload: false }
    ]

    await handleUserRepos.get(username, store)
    expect(store.getActions()).toEqual(expectedActions)
  })
})