import React from 'react'
import PropTypes from 'prop-types'
import { Form, Formik } from 'formik'
import { useTranslation } from 'react-i18next'
import { SearchFormContainer } from '~/components/SearchForm/SearchForm.shards'
import InputField from '~/components/fields/InputField'
import SubmitButton from '~/components/SubmitButton'
import { searchForm as validationSchema } from '~/utils/validations'

const SearchFormView = ({ submitFn }) => {

  const { t } = useTranslation('common')

  const initialValues = {
    search: ''
  }

  return (
    <SearchFormContainer data-test='SearchFormView'>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitFn}
      >
        <Form>
          <InputField
            id='search'
            name='search'
            label={t('form.labels.username')}
            placeholder={t('form.placeholders.username')}
          />
          <SubmitButton>
            {t('buttons.search')}
          </SubmitButton>
        </Form>
      </Formik>
    </SearchFormContainer>
  )
}

SearchFormView.propTypes = {
  submitFn: PropTypes.func
}

export default SearchFormView
