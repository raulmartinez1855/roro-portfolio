import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Footer from '../components/Footer'
import '../assets/sass/index.scss'
import favicon from '../../static/faviicon.ico'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Portfolio' },
        { name: 'keywords', content: 'react, gatsby' },
      ]}
      link={[{ rel: 'icon', type: 'image/x-icon', href: `${favicon}` }]}
    />
    <div>{children()}</div>
    <Footer />
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
