import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import serializer from 'jest-emotion'
import { ThemeProvider } from 'emotion-theming'
import { findByTestAtrr } from '>/jest-config/utils'
import theme from '~/styles/theme/theme'
import SubmitButton from '~/components/SubmitButton'

expect.addSnapshotSerializer(serializer)

describe('SubmitButton component', () => {

  it('It renders', () => {
    const wrapper =  shallow(<SubmitButton />).dive().dive()
    expect(findByTestAtrr(wrapper, 'SubmitButtonView').exists()).toBeTruthy()
  })

  it('Snapshot', () => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <SubmitButton />
      </ThemeProvider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
