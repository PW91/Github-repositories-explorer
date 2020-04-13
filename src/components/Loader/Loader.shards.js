import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import theme from '+/theme/theme'

const throbber = keyframes`
  0% {
    background-color: ${theme.colors.throbber.main};
    border-color: transparent;
    transform: translate(-50%, -50%) scale(0);
  }

  80% {
    background-color: transparent;
    border-color: ${theme.colors.throbber.main};
    transform: translate(-50%, -50%) scale(.8);
  }

  100% {
    border-color: transparent;
    transform: translate(-50%, -50%) scale(1);
  }
`

export default styled.div`
  &::after {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    content: '';
    width: 10rem;
    height: 10rem;
    border-radius: 100%;
    border: .5rem solid;
    animation: ${throbber} 1s infinite ease-in-out;
    opacity: .5;
  }
`
