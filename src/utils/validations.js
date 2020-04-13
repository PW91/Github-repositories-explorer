import { object, string } from 'yup'

export const searchForm = object().shape({
  search: string()
    .required('validations.requiredField')
    .min(3, 'validations.minThreeLetters')
})
