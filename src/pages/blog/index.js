import React from "react"
import { Link } from "gatsby"

import BlogLayout from "../../components/BlogLayout"
import SEO from "../../components/SEO"

import './styles.scss'
import Title from "../../components/Title"
import Layout from "../../components/Layout"

export const blogTitleStyle = {
	height: "150px",
	background: "#1d3e53",
	color: "#fff",
    marginBotton: 50,
	paddingTop: 20,
	borderTop: "1px solid rgba(0,0,0,.125)",
	borderBottom: "1px solid rgba(0,0,0,.125)",
	textAlign: "center"
}

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<Title titleStyle={blogTitleStyle}>
			<h1>Blog</h1>
			<div style={{ padding: "0px 0 40px 0", fontStyle: "italic", fontSize: "18px" }}>
				Welcome to my blog. Here you can follow my progress as a developer.
			</div>
		</Title>
		<BlogLayout>
			<div className="blog-post">
				<div className="blog-date">July 20, 2019</div>
				<div className="blog-post-heading"><Link to="/blog/blog-post1">Dota API Project</Link></div>
				<div className="blog-post-text">Ongoing personal project using the <a href="https://docs.opendota.com/"><b>OpenDota API</b></a> - built with React and Typescript. Here are some are snippits of the process so far and what I've learned.<br /><br />I will add to this blog as I add features to my app and expand my skillset. Stay tuned.</div>
				<div className="blog-link"><Link to="/blog-post1">Read more...</Link></div>
			</div>
			<div className="blog-post">
				<div className="blog-date">June 12, 2019</div>
				<div className="blog-post-heading">Using Raspberry Pi with React</div>
				<div className="blog-post-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
				<div className="blog-link"><Link to="/">Read more...</Link></div>
			</div>
			<div className="blog-post">
				<div className="blog-date">Date</div>
				<div className="blog-post-heading">React Router</div>
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
			</div>
			<div className="blog-post">
				<div className="blog-date">Date</div>
				<div className="blog-post-heading">Blog Post Heading</div>
				<div className="blog-post-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
				<div className="blog-link"><Link to="/">Read more...</Link></div>
			</div>
		</BlogLayout>

		<Link to="/">Go back to the homepage</Link>
	</Layout>
)

export default IndexPage
