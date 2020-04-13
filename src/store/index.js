import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from '~/store/reducers/root'

const composeEnhancers = composeWithDevTools({})

export default createStore(reducer, {}, composeEnhancers())
