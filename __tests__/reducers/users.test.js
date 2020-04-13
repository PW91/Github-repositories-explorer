import usersReducer from '~/store/reducers/users'
import { STORE_ACTIONS } from '~/utils/consts'

describe('Users Reducer', () => {

  it('Returns default state', () => {
    const newState = usersReducer(undefined, {})
    expect(newState).toEqual([])
  })

  it('Returns updated state, if receiving a type', () => {
    const users = [
      { id: 1, login: 'User_1' },
      { id: 2, login: 'User_2' }
    ]
    const newState = usersReducer(undefined, {
      type: STORE_ACTIONS.SET_USERS,
      payload: users
    })
    expect(newState).toEqual(users)
  })
})