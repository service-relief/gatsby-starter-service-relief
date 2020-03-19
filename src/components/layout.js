/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../css/global.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title,
          city,
          state
        }
      }
    }
  `)

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata.title}
        siteCity={data.site.siteMetadata.city}
        siteState={data.site.siteMetadata.state}
      />
      <div className="container mx-auto max-w-2xl">
        <main>{children}</main>
        <footer className="text-sm pt-10">
          &copy; {new Date().getFullYear()} &amp; built with
          {` `}
          <a className="text-blue-600" href="https://www.gatsbyjs.org">
            Gatsby
          </a>{" "}
          by{" "}
          <a className="text-blue-600" href="https://boborchard.com">
            Bob Orchard
          </a>
          . A work in progress.
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
