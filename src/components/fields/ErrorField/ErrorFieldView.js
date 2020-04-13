import React from 'react'
import PropTypes from 'prop-types'
import { ErrorMessage } from 'formik'
import { useTranslation } from 'react-i18next'
import { Error } from '~/components/fields/ErrorField/ErrorField.shards'

const ErrorFieldView = ({ name }) => {
  const { t } = useTranslation('common')
  return (
    <ErrorMessage
      data-test='ErrorFieldView'
      name={name}
      render={validationMessage =>
        (typeof validationMessage === 'string') &&
        <Error>
          { t(`errors.${validationMessage}`) }
        </Error>
      }
    />
  )
}

ErrorFieldView.propTypes = {
  name: PropTypes.string
}

export default ErrorFieldView
