import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import '../static/style.css'
import config from '../utils/siteConfig'
import Footer from './footer'
import Source from './source'
import favicon from '../static/favicon.ico'

const Layout = ({ children }) => (
  <div className="wrapper">
    <Helmet>
      <title>{config.siteTitle}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href={favicon} />
      <meta name="description" content={config.siteDescription} />
      <meta property="og:title" content={config.siteTitle} />
      <meta property="og:url" content={config.siteUrl} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={config.siteTitle} />
    </Helmet>
    <main>
      {children}
    </main>
    <Footer />
    <Source />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
