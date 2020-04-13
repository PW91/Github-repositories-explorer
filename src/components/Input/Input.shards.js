import styled from '@emotion/styled'

export default styled.input`
  width: 100%;
  height: 3rem;
  padding: .5rem 1rem;
  background: ${({ theme }) => theme.colors.background.white};
  font-size: ${({ theme }) => theme.fontSize.text.small};
  border: ${({ theme }) => theme.border.input};
  border-radius: ${({ theme }) => theme.borderRadius.main};
  border-color: ${({ invalid, theme }) => invalid && theme.colors.border.input.invalid};
  color: ${({ theme }) => theme.colors.text.main};
  text-overflow: ellipsis;
  transition: .1s;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.border.input.focused};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.label};
    font-style: italic;
  }
`
