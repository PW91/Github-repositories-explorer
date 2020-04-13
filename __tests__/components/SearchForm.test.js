import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import serializer from 'jest-emotion'
import { ThemeProvider } from 'emotion-theming'
import { findByTestAtrr } from '>/jest-config/utils'
import theme from '~/styles/theme/theme'
import SearchForm from '~/components/SearchForm'

expect.addSnapshotSerializer(serializer)

describe('SearchForm component', () => {

  it('It renders', () => {
    const  wrapper =  shallow(<SearchForm />)
    expect(findByTestAtrr(wrapper, 'SearchFormView').exists()).toBeTruthy()
  })

  it('Snapshot', () => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <SearchForm />
      </ThemeProvider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})