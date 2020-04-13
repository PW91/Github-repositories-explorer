import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import RepoCard from '~/components/RepoCard'
import NoResults from '~/components/NoResults'
import { BigHeading } from '~/components/Typography'
import {
  UserCardContainer,
  UserCard,
  UserMeta,
  DropdownIcon,
  Avatar
} from '~/components/UserCard/UserCard.shards'

const UserCardView = ({
  login,
  avatarUrl,
  isActive,
  repos,
  userCardClickFn
}) => {
  const { t } = useTranslation('common')
  return (
    <UserCardContainer data-test='UserCardView'>
      <UserCard
        onClick={userCardClickFn}
        isActive={isActive}
      >
        <UserMeta>
          <Avatar src={avatarUrl} alt='avatar' />
          <BigHeading>{login}</BigHeading>
        </UserMeta>
        <DropdownIcon isActive={isActive} />
      </UserCard>
      {isActive &&
        (repos
          ? repos.map(repo =>
            <RepoCard
              key={repo.id}
              {...repo}
            />)
          : <NoResults text={t('errors.emptyRepos')} />
        )
      }
    </UserCardContainer>
  )
}

UserCardView.propTypes = {
  login: PropTypes.string,
  avatarUrl: PropTypes.string,
  isActive: PropTypes.bool,
  repos: PropTypes.array,
  userCardClickFn: PropTypes.func
}

export default UserCardView
