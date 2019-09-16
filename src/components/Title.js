import React from "react"
import PropTypes from "prop-types"

import '../pages/blog/styles.scss'

const Title = ({ children, titleStyle }) => {

    return (
        <div
            style={titleStyle}
        >
            { children }
        </div >
  )
}

Title.propTypes = {
    children: PropTypes.node.isRequired,
    height: PropTypes.number
}

export default Title
