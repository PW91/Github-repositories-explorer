import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'formik'
import { BaseButton } from '~/components/SubmitButton/SubmitButton.shards'

const SubmitButtonView = ({ children, formik }) => {
  const { isSubmitting, isValid } = formik
  return (
    <BaseButton
      data-test='SubmitButtonView'
      type='submit'
      disabled={!isValid || isSubmitting}
    >
      {children}
    </BaseButton>
  )
}

SubmitButtonView.propTypes = {
  children: PropTypes.string,
  formik: PropTypes.object
}

export default connect(SubmitButtonView)
