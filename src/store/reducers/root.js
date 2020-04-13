import { combineReducers } from 'redux'
import uiReducer from '~/store/reducers/ui'
import usersReducer from '~/store/reducers/users'

export default combineReducers({
  ui: uiReducer,
  users: usersReducer
})
