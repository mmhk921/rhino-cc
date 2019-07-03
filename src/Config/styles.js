/* eslint-disable */

var Colors = {
  // Brand
  brandPrimary: '#39C171',
  brandSecondary: '#F99A49',
  lightGreyText: '#9b9b9b',
  white: '#ffffff',

  // Basic
  black: '#000000',
  red: 'red',
  whiteSmoke: 'rgb(245,245,245)',
  lightGrey: 'rgb(203,210,205)',
  darkGrey: 'rgb(135,150,134)',
  primaryGrey: '#999999',
  midGrey: '#CBD2CD',
  transparent: 'rgba(0,0,0,0)',
  buttonTextGrey: '#4a4a4a',
}

var BorderRadius = {
  small: {
    all: '5px',
    top: '5px 5px 0px 0px',
    bottom: '0px 0px 5px 5px'
  },
  medium: {
    all: '8px',
    top: '8px 8px 0px 0px',
    bottom: '0px 0px 8px 8px'
  },
  none: 'none'
}

var MaxWidth = {
  web: 750,
  mobile: 315,
  form: 536
}
var FontFamily = {
  regular: 'Noto Sans',
  bold: 'Oswald'
}

module.exports = {
  Colors,
  BorderRadius,
  MaxWidth,
}
