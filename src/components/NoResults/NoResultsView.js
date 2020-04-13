import React from 'react'
import PropTypes from 'prop-types'
import { Paragraph } from '~/components/Typography'
import { NoResultsContainer } from '~/components/NoResults/NoResults.shards'

const NoResultsView = ({ text }) => (
  <NoResultsContainer data-test='NoResultsView'>
    <Paragraph>{text}</Paragraph>
  </NoResultsContainer>
)

NoResultsView.propTypes = {
  text: PropTypes.string
}

export default NoResultsView
