import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'formik'
import Input from '~/components/Input'
import { Label } from '~/components/fields/InputField/InputField.shards'
import ErrorField from '~/components/fields/ErrorField'

const InputFieldView = ({
  id,
  name,
  type = 'text',
  label,
  ...props
}) => (
  <Field
    name={name}
  >
    {({
      field: {
        name,
        ...field
      },
      form: {
        setFieldTouched,
        setFieldValue,
        touched,
        errors
      }
    }) => (
      <>
        {label && <Label htmlFor={id}>{label}</Label>}
        <Input
          {...field}
          {...props}
          onKeyUp={(e) => e.keyCode === 13 && e.target.blur()}
          onChange={({ target: { value } }) => {
            setFieldValue(name, value)
            setFieldTouched(name, true)
          }}
          id={id}
          type={type}
          invalid={touched[name] && errors[name]}
        />
        <ErrorField
          name={name}
        />
      </>
    )}
  </Field>
)

InputFieldView.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string
}

export default InputFieldView
