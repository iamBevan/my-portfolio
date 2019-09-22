import React from "react"
import { Link } from "gatsby"

import InnerLayout from "../../components/InnerLayout"
import SEO from "../../components/SEO"

import './styles.scss'
import Title from "../../components/Title"
import OuterLayout from "../../components/OuterLayout"

export const blogTitleStyle = {
	height: "150px",
	background: "#1d3e53",
	color: "#fff",
    marginBottom: 50,
	paddingTop: 20,
	// borderTop: "1px solid rgba(0,0,0,.125)",
	// borderBottom: "1px solid rgba(0,0,0,.125)",
	textAlign: "center"
}

const IndexPage = () => (
	<OuterLayout>
		<SEO title="Home" />
		<Title titleStyle={blogTitleStyle}>
			<h1>Blog</h1>
			<div style={{ padding: "0px 0 40px 0", fontStyle: "italic", fontSize: "18px" }}>
				Welcome to my blog. Here you can follow my progress as a developer.
			</div>
		</Title>
		<InnerLayout>
			<div className="blog-post">
				<div className="blog-date">July 26, 2019</div>
				<div className="blog-post-heading"><Link to="/blog/BlogPost2">Unit Testing with The Builder</Link></div>
				<div className="blog-post-text">A quick overview of the builder design pattern and how I used it to improve my unit testing.</div>
				<div className="blog-link"><Link to="/blog/BlogPost2">Read more...</Link></div>
			</div>
			<div className="blog-post">
				<div className="blog-date">July 20, 2019</div>
				<div className="blog-post-heading"><Link to="/blog/BlogPost1">Dota API Project</Link></div>
				<div className="blog-post-text">Ongoing personal project using the <a href="https://docs.opendota.com/"><b>OpenDota API</b></a> - built with React and Typescript. Here are some snippets of the process so far and what I've learned.<br /><br />I will add to this blog as I add features to my app and expand my skillset. Stay tuned.</div>
				<div className="blog-link"><Link to="/blog/BlogPost1">Read more...</Link></div>
			</div>
			<div className="blog-post">
				<div className="blog-date">June 12, 2019</div>
				<div className="blog-post-heading">Using Raspberry Pi with React</div>
				<div className="blog-post-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
				<div className="blog-link"><Link to="/blog/BlogPost3">Read more...</Link></div>
			</div>
			<div className="blog-post">
				<div className="blog-date">Date</div>
				<div className="blog-post-heading">React Router</div>
				<div className="blog-post-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
				<div className="blog-link"><Link to="/">Read more...</Link></div>
			</div>
			{/* <div className="blog-post">
				<div className="blog-date">Date</div>
				<div className="blog-post-heading">Blog Post Heading</div>
				<div className="blog-post-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
				<div className="blog-link"><Link to="/">Read more...</Link></div>
			</div>
			<div className="blog-post">
				<div className="blog-date">Date</div>
				<div className="blog-post-heading">Blog Post Heading</div>
				<div className="blog-post-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
				<div className="blog-link"><Link to="/">Read more...</Link></div>
			</div>
			<div className="blog-post">
				<div className="blog-date">Date</div>
				<div className="blog-post-heading">Blog Post Heading</div>
				<div className="blog-post-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
				<div className="blog-link"><Link to="/">Read more...</Link></div>
			</div> */}
		</InnerLayout>

		<Link to="/">Go back to the homepage</Link>
	</OuterLayout>
)

export default IndexPage
