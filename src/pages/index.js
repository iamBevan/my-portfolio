import React from "react"
import { Link } from "gatsby"

import './styles.scss';

import OuterLayout from "../components/OuterLayout"
import SEO from "../components/SEO"

import github from '../images/github-white.svg'
import codesandbox from '../images/codesandbox-white.svg'
import portfolio from '../images/code-white.svg'
import linkedin from '../images/linkedin-white.svg'
import email from '../images/email-white.svg'

import awer from '../images/escape-room.svg';
import ggc from '../images/ggc-name-logo.svg';
import dota2 from '../images/dota-2-app.svg';
import gatsby from '../images/gatsby.svg';

import html from '../images/html5-white.svg';
import css from '../images/css3-white.svg';
import js from '../images/javascript-white.svg';
import react from '../images/react-white.svg';
import react2 from '../images/react.svg';

import myPic from '../images/title-pic.png';


const IndexPage = () => (
	<OuterLayout>
		<SEO title="Home" />
		<div className="home-title">
			<div>&nbsp;</div>
			<img src={myPic} className="my-img" />
			<h1>Kevin Bevan</h1>
			<h2>Junior Front-end Web Developer</h2>
			<div className="icons">
				<img className="icon-img" alt="" src={html} />
				<img className="icon-img" alt="" src={css} />
				<img className="icon-img" alt="" src={js} />
				<img className="icon-img" alt="" src={react} />
			</div>
			{/* <div className="icons">
				<section>
					<Link to="/portfolio">
						<img alt="" src={portfolio} />
						<h3>Portfolio</h3>
					</Link>
				</section>
				
				<section>
					<a href="https://github.com/iamBevan/">
						<img alt="" src={github} />
						<h3>Github</h3>
					</a>
				</section>
				
	
				<section>
					<a href="https://codesandbox.io/u/iamBevan/sandboxes">
						<img alt="" src={codesandbox} />
						<h3>Examples</h3>
					</a>
				</section>
				
				<section>
					<a href="mailto:iambevan@gmail.com">
						<img alt="" src={email} />
						<h3>Email</h3>
					</a>
				</section>
				
				<section>
					<a href="https://linkedin.com/in/kevin-bevan/">
						<img alt="" src={linkedin} />
						<h3>LinkedIn</h3>
					</a>
				</section>
				
			</div> */}
		</div>
		<div className="home-container">
			<h2>Projects</h2>
			<div className="main-projects-container">
				<div className="project-row">
					<div className="project">
						<img src={dota2} alt="Avatar" className="project-image" />
						<div className="project-overlay">
							<div className="project-text">
								Description
								{/* A current project using the OpenDota API. The app is somewhat of a clone of two popular Dota 2 statistics sites, DotaBuff and OpenDota. You can navigate using the menu to check a player's statistics, past matches, heroes played and current rankings. */}
							</div>
						</div>
					</div>
					<div className="project">
						<img src={ggc} alt="Avatar" className="project-image" />
						<div className="project-overlay">
							<div className="project-text">Description</div>
						</div>
					</div>
					<div className="project">
						<img src={awer} alt="Avatar" className="project-image" />
						<div className="project-overlay">
							<div className="project-text">Description</div>
						</div>
					</div>
					<div className="project">
						<img src={gatsby} alt="Avatar" className="project-image" />
						<div className="project-overlay">
							<div className="project-text">Description</div>
						</div>
					</div>
				</div>
				{/* <div className="project-row">
					<div className="project">
						<img src={react2} alt="Avatar" clasNames="project-image" />
						<div className="project-overlay">
							<div className="project-text">Hello World</div>
						</div>
					</div>
					<div className="project">
						<img src={react2} alt="Avatar" clasNames="project-image" />
						<div className="project-overlay">
							<div className="project-text">Hello World</div>
						</div>
					</div>
				</div> */}
			</div>
			<div className="about">
				<h2>About me</h2>
				<p>
					I am a junior front-end web developer specializing in Typescript and React.
					I have always had a passion for web design and problem solving - recently I have been able to explore this further with some freelance work
					and am currently looking to expand my skill-set in a professional environment.
					<br />
					You can check out portfolio, blog or CodeSandbox examples to see my current progression.
				</p>
			</div>
		</div>

	</OuterLayout>
)

export default IndexPage
