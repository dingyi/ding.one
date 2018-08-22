import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Logo from '../components/logo'
import Bio from '../components/bio'
import SEO from '../components/SEO'

const Home = ({ data }) => {
  const postNode = {
    title: `${config.siteTitle}`,
  }

  return (
    <main>
      <Helmet>
        <title>{`${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="contact" customTitle />
      <Logo />
      <Bio />
    </main>
  )
}

export default Home
