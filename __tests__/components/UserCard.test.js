import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import serializer from 'jest-emotion'
import { ThemeProvider } from 'emotion-theming'
import { findByTestAtrr } from '>/jest-config/utils'
import theme from '~/styles/theme/theme'
import UserCard from '~/components/UserCard'

expect.addSnapshotSerializer(serializer)

describe('UserCard component', () => {

  it('It renders', () => {
    const wrapper =  shallow(<UserCard />)
    expect(findByTestAtrr(wrapper, 'UserCardView').exists()).toBeTruthy()
  })

  it('Snapshot', () => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <UserCard />
      </ThemeProvider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})