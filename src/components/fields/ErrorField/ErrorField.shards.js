import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'

const slidein = keyframes`
  0% {
    line-height: 3rem;
  }

  100% {
    line-height: 1.4rem;
  }
`

export const Error = styled.div`
  color: ${({ theme }) => theme.colors.text.error};
  font-size: ${({ theme }) => theme.fontSize.text.tiny};
  margin-top: .5rem;
  margin-bottom: 1rem;
  white-space: nowrap;
  max-width: 1rem;
  max-height: 1.4rem;
  animation: ${slidein} .3s;
`
