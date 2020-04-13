import actionCreator from '~/store/actions/actionCreator'
import { STORE_ACTIONS } from '~/utils/consts'

export const usersActions = {
  setUsers: actionCreator(STORE_ACTIONS.SET_USERS),
  setUserRepos: actionCreator(STORE_ACTIONS.SET_USER_REPOS)
}
