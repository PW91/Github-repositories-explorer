import styled from '@emotion/styled'

export const BaseButton = styled.button`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.text.small};
  border-radius: ${({ theme }) => theme.borderRadius.main};
  cursor: pointer;
  user-select: none;
  border: none;
  padding: 1rem 2rem;
  transition: background-color .1s;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.button.accept.main};
  color: ${({ theme }) => theme.colors.text.contrast};

  &:focus {
    outline: none;
  }

  &:disabled {
    pointer-events: none;
    background-color: ${({ theme }) => theme.colors.button.accept.disabled};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.button.accept.hover};
  }
`
