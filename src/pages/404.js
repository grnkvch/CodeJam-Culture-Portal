import React from 'react'
import { withI18next } from 'gatsby-plugin-i18next';
import { withNamespaces } from 'react-i18next';
import { graphql } from 'gatsby';

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = ({ t }) => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404 {t(`errTitle`)}</h1>
    <p>{t(`errDescription`)}</p>
  </Layout>
)

export default withI18next()(withNamespaces()(NotFoundPage));

export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "messages" } }) {
      ...TranslationFragment
    }
  }
`;
