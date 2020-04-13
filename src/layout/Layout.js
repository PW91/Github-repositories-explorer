import React from 'react'
import PropTypes from 'prop-types'
import { Root, Main, Content } from '~/layout/Layout.shards'
import Header from '~/layout/Header'
import Footer from '~/layout/Footer'
import Notifications from '~/components/Notifications'

const Layout = ({ children }) => (
  <Root>
    <Header />
    <Main>
      <Content>
        {children}
      </Content>
    </Main>
    <Footer />
    <Notifications />
  </Root>
)

Layout.propTypes = {
  children: PropTypes.element
}

export default Layout
