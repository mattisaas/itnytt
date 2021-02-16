import React from "react"
import { Link } from "gatsby"

import "@wordpress/block-library/build-style/style.css"
import "../styles/layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Link to="/" className="home">
          Forside
        </Link>
      </header>
      <main>{children}</main>
    </>
  )
}

export default Layout