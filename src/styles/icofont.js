// eslint-disable-next-line no-unused-vars
import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import icofontEot from '-/fonts/icofont.eot'
import icofontWoff2 from '-/fonts/icofont.woff2'
import icofontWoff from '-/fonts/icofont.woff'
import icofontTtf from '-/fonts/icofont.ttf'

export const icofontFace = css`
  @font-face {
    font-family: "icofont";
    src: url(${icofontEot}) format("embedded-opentype"),
    url(${icofontWoff2}) format("woff2"),
    url(${icofontWoff}) format("woff"),
    url(${icofontTtf}) format("truetype");
  }
`

const icoBase = css`
  font-family: 'icofont' !important;
  speak: none;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

export const IcoArrow = styled.span`
  ${icoBase}
  &:before {
    content: "\f101";
  }
`
export const IcoClose = styled.span`
  ${icoBase}
  &:before {
    content: "\f102";
  }
`
export const IcoLink = styled.span`
  ${icoBase}
  &:before {
    content: "\f103";
  }
`
export const IcoStar = styled.span`
  ${icoBase}
  &:before {
    content: "\f104";
  }
`
