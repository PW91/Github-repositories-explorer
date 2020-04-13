import { border as borderColor } from '~/styles/theme/colors'

export const shadow = {
  box: '0 2px 6px 0 rgba(0, 0, 0, 0.12)',
}

export const border = {
  input: `1px solid ${borderColor.input.main}`,
  error: `1px solid ${borderColor.error.main}`,
  element: `1px solid ${borderColor.box.main}`
}

export const fontFamily = {
  main: 'ProximaNova, sans-serif',
}

export const fontSize = {
  text: {
    extraSmall: '1rem',
    tiny: '1.2rem',
    small: '1.4rem',
    normal: '1.6rem',
    big: '2rem',
  },
  icon: {
    normal: '1.8rem'
  }
}

export const lineHeight = {
  normal: 1.43
}

export const borderRadius = {
  main: '.2rem',
}
