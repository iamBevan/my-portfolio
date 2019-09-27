import React from "react"
// import { Link } from "gatsby"

import './styles.scss';

import OuterLayout from "../components/OuterLayout"
import SEO from "../components/SEO"

import github from '../images/github-white.svg'
import codesandbox from '../images/codesandbox-white.svg'
import portfolio from '../images/code-white.svg'

const IndexPage = () => (
	<OuterLayout>
		<SEO title="Home" />
		<div className="home-title">
			<div>&nbsp;</div>
			<h1>Kevin Bevan</h1>
			<h2>Front-end Web Developer</h2>
			<div className="icons">
				<section>
					<img alt="" src={portfolio} />
					<h3>Portfolio</h3>
				</section>
				<section>
					<img alt="" src={github} />
					<h3>Github</h3>
				</section>
				<section>
					<img alt="" src={codesandbox} />
					<h3>CodeSandbox</h3>
				</section>
			</div>
		</div>
		<div className="home-container">
			<div className="about">
				<h2>About me</h2>
				<p>
					I am a junior front-end web developer specializing in Typescript and React.
					I have always had a passion for web design and problem solving - recently I have been able to explore this further with some freelance work
					and am currently looking to expand my skill-set in a professional environment.
					<br />
					You can check out portfolio, blog or CodeSandbox to see my current progression.
				</p>
			</div>
		</div>

	</OuterLayout>
)

export default IndexPage
