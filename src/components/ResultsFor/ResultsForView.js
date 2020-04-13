import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { Paragraph, NormalHeading } from '~/components/Typography'
import { ResultsForContainer, ClearIcon } from '~/components/ResultsFor/ResultsFor.shards'

const ResultsForView = ({ searchQuery, clearingFn }) => {
  const { t } = useTranslation('common')
  return (
    <ResultsForContainer data-test='ResultsForView'>
      <Paragraph>{t('resultsFor')}</Paragraph>
      <NormalHeading>{searchQuery}</NormalHeading>
      <ClearIcon onClick={clearingFn} />
    </ResultsForContainer>
  )
}

ResultsForView.propTypes = {
  clearingFn: PropTypes.func,
  searchQuery: PropTypes.string
}

export default ResultsForView
