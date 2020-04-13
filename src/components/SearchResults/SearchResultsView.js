import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import Loader from '~/components/Loader'
import ResultsFor from '~/components/ResultsFor'
import NoResults from '~/components/NoResults'
import UserCard from '~/components/UserCard'
import { SearchResultsContainer } from '~/components/SearchResults/SearchResults.shards'

const SearchResultsView = ({
  isSearchEmpty,
  lastSearchQuery,
  users,
  userCardClickFn,
  clearingFn,
  activeUserCard,
  isLoading
}) => {
  const { t } = useTranslation('common')
  return (
    <SearchResultsContainer data-test='SearchResultsView'>
      {isLoading && <Loader />}
      {lastSearchQuery &&
        <ResultsFor
          searchQuery={lastSearchQuery}
          clearingFn={clearingFn}
        />}
      {lastSearchQuery && isSearchEmpty
        ? <NoResults text={t('errors.emptyResults')} />
        : users.map(user =>
          <UserCard
            key={user.id}
            userCardClickFn={() => userCardClickFn(user)}
            isActive={activeUserCard === user.id}
            {...user}
          />)
      }
    </SearchResultsContainer>
  )
}

SearchResultsView.propTypes = {
  isSearchEmpty: PropTypes.bool,
  lastSearchQuery: PropTypes.string,
  users: PropTypes.array,
  userCardClickFn: PropTypes.func,
  clearingFn: PropTypes.func,
  activeUserCard: PropTypes.number,
  isLoading: PropTypes.bool
}

export default SearchResultsView
