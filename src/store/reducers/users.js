import { STORE_ACTIONS } from '~/utils/consts'

const initialState = []

export default (state = initialState, action) => {
  const { payload, type } = action

  switch (type) {
    case STORE_ACTIONS.SET_USERS:
      return payload

    case STORE_ACTIONS.SET_USER_REPOS:
      const reposOwnerId = payload.length && payload[0].owner
      const updatedState = state.map(item => (
        item.id === reposOwnerId
          ? ({ repos: payload, ...item })
          : item
      ))
      return updatedState

    default:
      return state
  }
}
