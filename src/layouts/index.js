import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Menu from '../components/Menu'
import '../assets/sass/index.scss'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Portfolio' },
        { name: 'keywords', content: 'react, gatsby' },
      ]}
    />
    <Menu />
    <div>{children()}</div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
