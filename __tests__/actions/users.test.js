import { isFSA } from 'flux-standard-action'
import { values, all } from 'ramda'
import { usersActions } from '~/store/actions/users'
import { STORE_ACTIONS } from '~/utils/consts'

describe('Users Actions', () => {
  
  it('Actions are FSA compliant', () => {
    const actions = values(usersActions).map(v => v())
    expect(all(isFSA, actions)).toEqual(true)
  })
  
  it('Set users action', () => {
    const users = [{
      id: 1,
      login: 'User 1'
    },
    {
      id: 2,
      login: 'User 2'
    }]
    const expectedAction = {
      type: STORE_ACTIONS.SET_USERS,
      payload: users
    }
    expect(usersActions.setUsers(users)).toEqual(expectedAction)
  })

  it('Set user repos action', () => {
    const repos = [{
      id: 1,
      name: 'Repo 1'
    },
    {
      id: 2,
      name: 'Repo 2'
    }]
    const expectedAction = {
      type: STORE_ACTIONS.SET_USER_REPOS,
      payload: repos
    }
    expect(usersActions.setUserRepos(repos)).toEqual(expectedAction)
  })
})