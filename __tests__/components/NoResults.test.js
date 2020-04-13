import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import serializer from 'jest-emotion'
import { ThemeProvider } from 'emotion-theming'
import { findByTestAtrr } from '>/jest-config/utils'
import theme from '~/styles/theme/theme'
import NoResults from '~/components/NoResults'

expect.addSnapshotSerializer(serializer)

describe('NoResults component', () => {

  it('It renders', () => {
    const wrapper = shallow(<NoResults />)
    expect(findByTestAtrr(wrapper, 'NoResultsView').exists()).toBeTruthy()
  })

  it('Snapshot', () => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <NoResults />
      </ThemeProvider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})