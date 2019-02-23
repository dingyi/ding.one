import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/layout'
import Logo from '../components/logo'
import Bio from '../components/bio'
import SEO from '../components/SEO'

const Home = () => {
  const postNode = {
    title: `${config.siteTitle}`,
  }

  return (
    <Layout>
      <Helmet>
        <title>{`${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="contact" customTitle />
      <Logo />
      <Bio />
    </Layout>
  )
}

export default Home
