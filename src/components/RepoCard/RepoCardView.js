import React from 'react'
import PropTypes from 'prop-types'
import { ExternalLink } from '~/components/Link'
import {
  RepoCard,
  RepoMeta,
  RepoHeader,
  StarIcon,
  LinkIcon,
  StarsContainer
} from '~/components/RepoCard/RepoCard.shards'
import {
  NormalHeading,
  SmallHeading,
  Paragraph
} from '~/components/Typography'

const RepoCardView = ({
  name,
  stars,
  htmlUrl,
  description
}) => (
  <RepoCard data-test='RepoCardView'>
    <RepoMeta>
      <RepoHeader>
        <NormalHeading>{name}</NormalHeading>
        <ExternalLink
          href={htmlUrl}
          target='_blank'
        >
          <LinkIcon />
        </ExternalLink>
      </RepoHeader>
      <Paragraph>{description}</Paragraph>
    </RepoMeta>
    <StarsContainer>
      <SmallHeading>{stars}</SmallHeading>
      <StarIcon />
    </StarsContainer>
  </RepoCard>
)

RepoCardView.propTypes = {
  name: PropTypes.string,
  stars: PropTypes.number,
  htmlUrl: PropTypes.string,
  description: PropTypes.string
}

export default RepoCardView
