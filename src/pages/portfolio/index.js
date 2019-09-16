import React from "react"
// import { Link } from "gatsby"

import './styles.scss';

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import Title from "../../components/Title"

import { blogTitleStyle } from '../blog/index'

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<Title titleStyle={blogTitleStyle}>
			<h1>Portfolio</h1>
			<div style={{ padding: "0px 0 40px 0", fontStyle: "italic", fontSize: "18px" }}>
				Check out my current and past projects.
			</div>
		</Title>
		<div>
			<h2>Dota2 API Application</h2>
			<h2>Gower Giant Cleaning</h2>
			<h2>Ash Williams Escape Rooms</h2>
		</div>

	</Layout>
)

export default IndexPage
