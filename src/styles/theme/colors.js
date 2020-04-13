const _white = '#ffffff'

const _blue = '#002442'

const _orange = '#f47f00'
const _darkOrange = '#cc7104'

const _lightGrey = '#f5f5f5'
const _grey = '#ebebeb'
const _darkGrey = '#757575'

const _green = '#66c300'
const _darkGreen = '#1ba307'

const _lightRed = '#e77f7f'
const _red = '#ce0000'

export const background = {
  white: _white,
  lightGrey: _lightGrey,
  grey: _grey
}

export const error = {
  main: _red,
  background: _lightRed
}

export const text = {
  main: _blue,
  contrast: _white,
  label: _darkGrey,
  error: _red,
}

export const border = {
  input: {
    main: _lightGrey,
    focused: _blue,
    invalid: _red
  },
  error: {
    main: _red
  },
  box: {
    main: _blue
  }
}

export const button = {
  accept: {
    main: _green,
    hover: _darkGreen,
    disabled: _darkGrey
  }
}

export const throbber = {
  main: _orange,
}

export const link = {
  main: {
    active: _orange,
    hovered: _darkOrange
  }
}
