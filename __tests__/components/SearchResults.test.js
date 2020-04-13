import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import serializer from 'jest-emotion'
import { ThemeProvider } from 'emotion-theming'
import { findByTestAtrr } from '>/jest-config/utils'
import theme from '~/styles/theme/theme'
import SearchResults from '~/components/SearchResults'

expect.addSnapshotSerializer(serializer)

describe('SearchResults component', () => {

  it('It renders', () => {
    const wrapper =  shallow(<SearchResults users={[]} />)
    expect(findByTestAtrr(wrapper, 'SearchResultsView').exists()).toBeTruthy()
  })
  
  it('Snapshot', () => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <SearchResults users={[]} />
      </ThemeProvider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})