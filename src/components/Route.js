import React, { Suspense } from 'react'
import { Route as ReactRoute } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import Loader from '~/components/Loader'

const Route = ({
  component: Component,
  layout: Layout,
  preloadNS,
  ...rest
}) => {

  const NSPreloader = ({ ns }) => {
    useTranslation(ns, { useSuspense: true })
    return null
  }

  return (
    <ReactRoute {...rest} render={(props) => (
      <Suspense fallback={<Loader />}>
        <NSPreloader ns={preloadNS} />
        <Layout>
          <Component {...props} />
        </Layout>
      </Suspense>
    )} />
  )
}

Route.propTypes = {
  preloadNS: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ])
}

export default Route
