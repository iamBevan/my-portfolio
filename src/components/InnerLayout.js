import React from "react"
import PropTypes from "prop-types"

import '../pages/blog/styles.scss'

const BlogLayout = ({ children }) => {

	return (
		<div
			style={{
				margin: `0 auto`,
				width: 960,
				paddingTop: 0,
			}}
		>
			{children}
		</div>
	)
}

BlogLayout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default BlogLayout
