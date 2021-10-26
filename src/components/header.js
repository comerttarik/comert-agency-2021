/*
import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
*/

import * as React from 'react'
// Stap 1: Importeer de useStaticQuery hook en graphql tag
import { useStaticQuery, graphql } from 'gatsby'

const Header = () => {
  /* Stap 2: gebruik de useStaticQuery hook en
    graphql tag om de data te query'en
    (De query wordt uitgevoerd tijdens build time) */
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header>
      {/* Stap 3: Gebruik de data in je component */}
      <h1>{ data.site.siteMetadata.title }</h1>
    </header>
  )
}

export default Header