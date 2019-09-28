import React from "react"
import { Link } from "gatsby"

import SEO from "../../components/SEO"

import './styles.scss'
import OuterLayout from "../../components/OuterLayout"

const IndexPage = () => (
	<OuterLayout>
		<SEO title="Blog" />
		<div className="blog-title">
			<div>&nbsp;</div>
			<h1>Blog</h1>
			<h2>Welcome to my blog. Here you can follow my progress as a developer</h2>
		</div>
		<div className="blog-main">
			<div className="blog-post">
				<span>July 26, 2019</span>
				<h3><Link to="/blog/BlogPost2">Unit Testing with The Builder</Link></h3>
				<p>A quick overview of the builder design pattern and how I used it to improve my unit testing.</p>
				<div className="blog-link"><Link to="/blog/BlogPost2">Read more...</Link></div>
			</div>
			<div className="blog-post">
				<span>July 20, 2019</span>
				<h3><Link to="/blog/BlogPost1">Dota API Project</Link></h3>
				<p>Ongoing personal project using the <a href="https://docs.opendota.com/"><b>OpenDota API</b></a> - built with React and Typescript. Here are some snippets of the process so far and what I've learned.</p>
				<div className="blog-link"><Link to="/blog/BlogPost1">Read more...</Link></div>
			</div>
			<div className="blog-post">
				<span>June 12, 2019</span>
				<h3><Link to="/blog/BlogPost3">Using Raspberry Pi with React</Link></h3>
				<p>A look at how I set up a Node/Express backend that allows a user to operate a Raspberry Pi through a React app.</p>
				<div className="blog-link"><Link to="/blog/BlogPost3">Read more...</Link></div>
			</div>
			{/* <div className="blog-post">
				<span>Date</span>
				<h3>React Router</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
				<div className="blog-link"><Link to="/">Read more...</Link></div>
			</div> */}
		</div>
	</OuterLayout>
)

export default IndexPage
