import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { handleUsersSearch, handleUserRepos } from '~/services/users'
import {
  usersSelector,
  activeUserCardSelector,
  isSearchEmptySelector,
  isLoadingSelector,
  lastSearchQuerySelector
} from '~/store/selectors'
import { uiActions } from '~/store/actions/ui'
import { usersActions } from '~/store/actions/users'
import SearchForm from '~/components/SearchForm'
import SearchResults from '~/components/SearchResults'
import { SEARCH_RESULTS_LIMIT } from '~/utils/consts'

const Home = ({
  setActiveUserCard,
  setSearchEmptyFlag,
  setLastSearchQuery,
  setUsers,
  activeUserCard,
  ...props
}) => {

  const handleUserCardClick = async ({ repos, id, login }) => {
    if (id === activeUserCard) {
      setActiveUserCard(null)
    } else if (repos) {
      setActiveUserCard(id)
    } else {
      await handleUserRepos.get(login)
      setActiveUserCard(id)
    }
  }

  const handleSubmitForm = async ({ search }, { resetForm }) => {
    try {
      setActiveUserCard(null)
      const results = await handleUsersSearch.get({ q: search, per_page: SEARCH_RESULTS_LIMIT })

      results.length > 0
        ? setSearchEmptyFlag(false)
        : setSearchEmptyFlag(true)

      setLastSearchQuery(search)
      resetForm()
    } catch {
      resetForm()
    }
  }

  const handleClearing = () => {
    setActiveUserCard(null)
    setLastSearchQuery(null)
    setUsers([])
  }

  return (
    <>
      <SearchForm
        submitFn={handleSubmitForm}
      />
      <SearchResults
        userCardClickFn={handleUserCardClick}
        clearingFn={handleClearing}
        activeUserCard={activeUserCard}
        {...props}
      />
    </>
  )
}

Home.propTypes = {
  setActiveUserCard: PropTypes.func,
  setSearchEmptyFlag: PropTypes.func,
  setLastSearchQuery: PropTypes.func,
  setUsers: PropTypes.func,
  activeUserCard: PropTypes.number,
  users: PropTypes.array,
  isSearchEmpty: PropTypes.bool,
  isLoading: PropTypes.bool,
  lastSearchQuery: PropTypes.string
}

export default connect((state) => ({
  users: usersSelector(state),
  isSearchEmpty: isSearchEmptySelector(state),
  isLoading: isLoadingSelector(state),
  activeUserCard: activeUserCardSelector(state),
  lastSearchQuery: lastSearchQuerySelector(state)
}),
{
  setActiveUserCard: uiActions.setActiveUserCard,
  setSearchEmptyFlag: uiActions.setSearchEmptyFlag,
  setLastSearchQuery: uiActions.setLastSearchQuery,
  setUsers: usersActions.setUsers
}
)(Home)
