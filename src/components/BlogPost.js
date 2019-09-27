import React from "react"
import PropTypes from "prop-types"

import "./blogPost.scss"

const BlogPost = ({ children, Title, Description }) => {
    return (
        <>
            <div className="blog-title">
                <div>&nbsp;</div>
                <h1>{Title}</h1>
                <h2>{Description}</h2>
            </div>
            <div className="blog-main">{children}</div>            
        </>
    )
}

BlogPost.propTypes = {
    children: PropTypes.node.isRequired,
}

export default BlogPost
