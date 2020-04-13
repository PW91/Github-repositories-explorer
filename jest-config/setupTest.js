import Enzyme from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import 'regenerator-runtime/runtime.js'
import '~/i18n'

Enzyme.configure({
  adapter: new EnzymeAdapter(),
  disableLifecycleMethods: true
})
