import styled from '@emotion/styled'
import { Paragraph } from '~/components/Typography'
import { IcoClose } from '~/styles/icofont'

export const ResultsForContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;

  ${Paragraph} {
    margin-right: .5rem;
  }
`

export const ClearIcon = styled(IcoClose)`
  margin-left: 1rem;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.icon.normal};
  color: ${({ theme }) => theme.colors.text.main};
`
