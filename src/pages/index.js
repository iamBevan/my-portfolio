import React from "react"
// import { Link } from "gatsby"

import './styles.scss';

import OuterLayout from "../components/OuterLayout"
import SEO from "../components/SEO"
import Title from "../components/Title";

import kb from '../images/kb.svg'

const titleStyle = {
	height: "330px",
	background: "#466172",
	color: "#fff",
    marginBottom: 50,
	paddingTop: 120,
	// borderTop: "1px solid rgba(0,0,0,.125)",
	// borderBottom: "1px solid rgba(0,0,0,.125)",
	textAlign: "center"
}

const IndexPage = () => (
	<OuterLayout>
		<SEO title="Home" />
		<Title titleStyle={titleStyle}>
			{/* <h1><span>&#123;</span>KB<span>&#125;</span></h1> */}
			{/* <img src={kb} style={{ width: '100px', height: '100px' }} /> */}
			<h1>Kevin Bevan</h1>
			<div style={{ padding: "0px 0 40px 0", fontStyle: "italic", fontSize: "18px" }}>
				My description about being a frontend web developer
			</div>
		</Title>
		<div className="about-and-contact">
			<div className="about">
				<h3>About me</h3>
				<p>
					All my life I've been fascinated with computers, problem solving and mathematics.
					<br />Web development has allowed me to pursue all of my interests as can been seen from my growing portfolio.

				</p>
      		</div>
			<div className="contact">
				<h3>Contact</h3>
				<p>Github</p>
				<p>Email</p>
				<p>Codepen</p>
      		</div>
		</div>

	</OuterLayout>
)

export default IndexPage
