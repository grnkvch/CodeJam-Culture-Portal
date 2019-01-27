import React from 'react'
import PropTypes from 'prop-types'
import { withNamespaces } from 'react-i18next';
import { Head } from 'gatsby-plugin-i18next';


import Header from './header'
import './layout.scss'

const Layout = ({ children, data, t }) => (
      <>
        <Head hreflang>
        <title>{t('Gatsby I18next')}</title>
        <meta name="description" content="Example Gatsby site with i18next" />
        <meta name="keywords" content="gatsby, react, i18next" />
      </Head>
        <Header t={ t }/>
        <div style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 0,
        }}>
          {children}
        </div>
      </>
    )

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default withNamespaces()(Layout);
