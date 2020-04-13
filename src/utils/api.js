import { format } from 'url'
import { toast } from 'react-toastify'
import { parseJSON } from '~/utils/helpers'
import { API_URL, API_ACTIONS } from '~/utils/consts'

const ajaxer = (apiAction, path, method = 'GET', data = null, query = null) => (
  new Promise((resolve, reject) => {
    const sendForm = data && data.constructor === FormData
    const requestOptions = {
      headers: !sendForm && { 'content-type': 'application/json' },
      method,
      ...!!data && { body: sendForm ? data : JSON.stringify(data) },
    }

    const fullPath = `${API_URL}${path}${query ? format({ query }) : ''}`

    fetch(fullPath, requestOptions)
      .then(res => res.status < 400 ? res.text() : { errorText: res.statusText, status: res.status })
      .then(res => {
        if (res.errorText) {
          const { errorText, status } = res
          toast.error(errorText)
          reject({ errorText, status })
        } else {
          const parsedJson = parseJSON(res)
          const mapped = responseFormatter(parsedJson, apiAction)
          resolve(mapped)
        }
      })
  })
)

export const responseFormatter = (data, apiAction) => {
  switch (apiAction) {
    case API_ACTIONS.USERS_SEARCH:
      return data.items.map(({
        login,
        id,
        avatar_url
      }) => ({
        login,
        id,
        avatarUrl: avatar_url
      }))
    case API_ACTIONS.USER_REPOS:
      return data.map(({
        id,
        owner,
        name,
        html_url,
        stargazers_count,
        description
      }) => ({
        id,
        owner: owner.id,
        name,
        htmlUrl: html_url,
        stars: stargazers_count,
        description
      }))
  }
}

export const manageUsersSearch = {
  get: (query) => ajaxer(API_ACTIONS.USERS_SEARCH, '/search/users', 'GET', null, query)
}

export const manageUserRepos = {
  get: (username) => ajaxer(API_ACTIONS.USER_REPOS, `/users/${username}/repos`)
}
