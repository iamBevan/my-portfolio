import React from "react"
// import { Link } from "gatsby"

import './styles.scss';

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Title from "../components/Title";

const titleStyle = {
	height: "330px",
	background: "#1d3e53",
	color: "#fff",
    marginBotton: 50,
	paddingTop: 50,
	borderTop: "1px solid rgba(0,0,0,.125)",
	borderBottom: "1px solid rgba(0,0,0,.125)",
	textAlign: "center"
}

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<Title titleStyle={titleStyle}>
			<h1>Kevin Bevan</h1>
			<div style={{ padding: "0px 0 40px 0", fontStyle: "italic", fontSize: "18px" }}>
				My description about being a frontend web developer
			</div>
		</Title>
		<div className="about-and-contact">
			<div className="about">
				<h3>About me</h3>
				<p>
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur aut odit aut fugit, sed quia consequuntur 
				</p>
      		</div>
			<div className="contact">
				<h3>Contact</h3>
      		</div>
		</div>

	</Layout>
)

export default IndexPage
