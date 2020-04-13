import { fetchAndDispatch } from '~/services/helpers'
import { usersActions } from '~/store/actions/users'
import { uiActions } from '~/store/actions/ui'
import { manageUsersSearch, manageUserRepos } from '~/utils/api'

export const handleUsersSearch = {
  get: fetchAndDispatch(
    manageUsersSearch.get,
    usersActions.setUsers,
    uiActions.setLoadingFlag
  )
}

export const handleUserRepos = {
  get: fetchAndDispatch(
    manageUserRepos.get,
    usersActions.setUserRepos,
    uiActions.setLoadingFlag
  )
}
