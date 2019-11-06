import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
    <div className="nav-header">
        <Link to="/"><span>Kevin Bevan</span></Link>
        <nav>
            <Link to="/blog">Blog</Link>
            <Link to="/portfolio">Portfolio</Link>
            <a target="_blank" href="https://github.com/iamBevan/" rel="noopener noreferrer">Github</a>
            <a target="_blank" href="https://drive.google.com/open?id=1P6TKo09b3EzrJ_VKw_31Fq45pbTC7SQI" rel="noopener noreferrer">CV</a>
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
