module.exports = {
  processors: ['stylelint-processor-styled-components'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended',
    'stylelint-config-styled-components'
  ],
  rules: {
    'declaration-empty-line-before': null,
    'no-descending-specificity': null,
    'declaration-block-no-duplicate-properties': true,
    'declaration-block-no-redundant-longhand-properties': [true, {
      ignoreShorthands: ['/flex-/', '/grid-/']
    }],
    'declaration-no-important': true,
    'declaration-colon-newline-after': null,
    'declaration-property-unit-whitelist': {
      'font-size': ['rem'],
      '/^animation/': ['s'],
      '/^transition/': ['s'],
      'line-height': ['rem']
    },
    'number-leading-zero': 'never',
    'selector-type-no-unknown': true,
    'selector-type-case': 'lower',
    'font-weight-notation': 'numeric',
    'function-url-quotes': 'always',
    'string-quotes': 'single'
  }
}
