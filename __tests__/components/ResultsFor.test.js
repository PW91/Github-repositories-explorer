import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import serializer from 'jest-emotion'
import { ThemeProvider } from 'emotion-theming'
import { findByTestAtrr } from '>/jest-config/utils'
import theme from '~/styles/theme/theme'
import ResultsFor from '~/components/ResultsFor'

expect.addSnapshotSerializer(serializer)

describe('ResultsFor component', () => {

  it('It renders', () => {
    const wrapper =  shallow(<ResultsFor />)
    expect(findByTestAtrr(wrapper, 'ResultsForView').exists()).toBeTruthy()
  })

  it('Snapshot', () => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <ResultsFor />
      </ThemeProvider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})