import styled from '@emotion/styled'

export const Label = styled.label`
  display: block;
  text-transform: uppercase;
  cursor: pointer;
  margin: 0 0 .6rem 0;
  font-size: ${({ theme }) => theme.fontSize.text.tiny};
  color: ${({ theme }) => theme.colors.text.label};
`
