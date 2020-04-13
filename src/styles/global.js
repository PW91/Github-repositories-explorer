import { css } from '@emotion/core'
import normalize from 'emotion-normalize'
import { fontSize, lineHeight, fontFamily } from '~/styles/theme/commons'
import { link, text } from '~/styles/theme/colors'
import { icofontFace } from '~/styles/icofont'

import proximaNovaLightEot from '~/static/fonts/ProximaNova-Light.eot'
import proximaNovaLightTtf from '~/static/fonts/ProximaNova-Light.ttf'
import proximaNovaLightWoff from '~/static/fonts/ProximaNova-Light.woff'
import proximaNovaLightWoff2 from '~/static/fonts/ProximaNova-Light.woff2'

import proximaNovaRegularEot from '~/static/fonts/ProximaNova-Regular.eot'
import proximaNovaRegularTtf from '~/static/fonts/ProximaNova-Regular.ttf'
import proximaNovaRegularWoff from '~/static/fonts/ProximaNova-Regular.woff'
import proximaNovaRegularWoff2 from '~/static/fonts/ProximaNova-Regular.woff2'

const fontface = css`
  @font-face {
    font-family: ProximaNova;
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url(${proximaNovaLightEot}) format('embedded-opentype'),
      url(${proximaNovaLightTtf}) format('truetype'),
      url(${proximaNovaLightWoff}) format('woff'),
      url(${proximaNovaLightWoff2}) format('woff2');
  }
  @font-face {
    font-family: ProximaNova;
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${proximaNovaRegularEot}) format('embedded-opentype'),
      url(${proximaNovaRegularTtf}) format('truetype'),
      url(${proximaNovaRegularWoff}) format('woff'),
      url(${proximaNovaRegularWoff2}) format('woff2');
  }
`

const base = css`
  * {
    border: none;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%; //== 10px (so that 1rem == 10px)
    height: 100%;
  }

  body {
    color: ${text.primary};
    font: normal ${fontSize.text.normal} / ${lineHeight.normal} ${fontFamily.main};
    min-height: 100%;
  }

  a {
    color: ${link.main.active};
    text-decoration: none;
    transition: color .1s;
    cursor: pointer;

    &:hover,
    &:active,
    &:focus {
      color: ${link.main.hovered};
      text-decoration: none;
    }
  }
`

export default css`
  ${normalize}
  ${fontface}
  ${base}
  ${icofontFace}
`
