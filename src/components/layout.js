import React from "react"
import { Link } from "gatsby"

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