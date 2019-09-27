import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
	<div className="nav-header">
		<Link to="/"><span>Kevin Bevan</span></Link>
		<nav>
			<Link to="/blog">Blog</Link>
			<Link to="/portfolio">Portfolio</Link>
			<Link to="/cv">CV</Link>
		</nav>
	</div>
)

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
