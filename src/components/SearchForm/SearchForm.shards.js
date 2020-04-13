import styled from '@emotion/styled'
import { BaseButton } from '~/components/SubmitButton/SubmitButton.shards'

export const SearchFormContainer = styled.div`
  padding: 3rem 2rem;
  background-color: ${({ theme }) => theme.colors.background.white};
  border-radius: ${({ theme }) => theme.borderRadius.main};
  box-shadow: ${({ theme }) => theme.shadow.box};

  ${BaseButton} {
    margin-top: 1rem;
  }
`
