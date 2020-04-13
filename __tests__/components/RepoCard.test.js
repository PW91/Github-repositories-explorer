import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import serializer from 'jest-emotion'
import { ThemeProvider } from 'emotion-theming'
import { findByTestAtrr } from '>/jest-config/utils'
import theme from '~/styles/theme/theme'
import RepoCard from '~/components/RepoCard'

expect.addSnapshotSerializer(serializer)

describe('RepoCard component', () => {

  it('It renders', () => {
    const wrapper = shallow(<RepoCard />)
    expect(findByTestAtrr(wrapper, 'RepoCardView').exists()).toBeTruthy()
  })

  it('Snapshot', () => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <RepoCard />
      </ThemeProvider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
