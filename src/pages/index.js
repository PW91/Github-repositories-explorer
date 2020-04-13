import React, { Fragment, lazy } from 'react'
import { Switch } from 'react-router-dom'
import Layout from '~/layout/Layout'
import Error from '~/pages/Error/index'
import Route from '~/components/Route'

const LoadablePageComponent = (resource) => lazy(() => import(`./${resource}/index`))

const pagesRoutes = [
  {
    path: '/',
    component: LoadablePageComponent('Home'),
    exact: true,
    preloadNs: 'common'
  },
  {
    component: Error,
    layout: Fragment
  }
]

export default () => (
  <Switch>
    {pagesRoutes.map(({ layout = Layout, ...props }, i) =>
      <Route
        {...props}
        layout={layout}
        key={i}
      />
    )}
  </Switch>
)
