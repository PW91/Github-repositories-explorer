import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import { ThemeProvider } from 'emotion-theming'
import { Global } from '@emotion/core'
import store from '~/store'
import globalStyles from '~/styles/global'
import theme from '~/styles/theme/theme'
import Pages from '~/pages/index'
import '~/i18n'

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('app'))
