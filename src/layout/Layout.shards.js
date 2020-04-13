import styled from '@emotion/styled'
import { BREAKPOINTS } from '~/utils/consts'

export const Root = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background.grey};
`

export const Main = styled.main``

export const Header = styled.header`
  text-align: center;
  padding: 2rem 0;
`

export const Footer = styled.footer`
  text-align: center;
  padding: 2rem 0;
`

export const Content = styled.div`
  margin: 0 auto;
  width: 90%;

  @media (min-width: ${BREAKPOINTS.SM}px) {
    width: 75%;
  }

  @media (min-width: ${BREAKPOINTS.MD}px) {
    width: 60%;
  }

  @media (min-width: ${BREAKPOINTS.LG}px) {
    width: 45%;
  }

  @media (min-width: ${BREAKPOINTS.XL}px) {
    width: 30%;
  }
`
