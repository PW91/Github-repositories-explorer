import styled from '@emotion/styled'
import { Paragraph } from '~/components/Typography/index'

export const NoResultsContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.error.background};
  border: ${({ theme }) => theme.border.error};
  padding: .5rem 2rem;
  border-radius: ${({ theme }) => theme.borderRadius.main};

  ${Paragraph} {
    color: ${({ theme }) => theme.colors.text.contrast};
  }
`
