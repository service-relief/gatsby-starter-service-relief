import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteCity, siteState }) => (
  <header className="container mx-auto max-w-2xl">
    <h1 className="font-heading text-5xl py-16 leading-none">
      <Link to="/">
        <span>{siteCity}</span>
        <br />
        <span>Service</span>
        <br />
        <span>Relief</span>
      </Link>
    </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteCity: PropTypes.string,
  siteState: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``,
  siteCity: ``,
  siteState: ``
}

export default Header
