import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
	<header className="topnav">
		{/* <div
      style={{
        margin: `0 auto`,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#404040`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div className="topnav-right">
        <Link to="/portfolio">Blog</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/portfolio">CV</Link>
      </div>
    </div> */}
		<Link to="/"><span className="name">Kevin Bevan</span></Link>
		<div className="topnav-right">
			<Link to="/blog">Blog</Link>
			<Link to="/portfolio">Portfolio</Link>
			<Link to="/cv">CV</Link>
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
