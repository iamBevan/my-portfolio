import React from "react"
// import { Link } from "gatsby"

import './styles.scss';

import OuterLayout from "../../components/OuterLayout"
import InnerLayout from "../../components/InnerLayout"
import SEO from "../../components/SEO"
import Title from "../../components/Title"

import dota2 from '../../images/dota-2-app.svg';
import awer from '../../images/ashley-williams-escape-room.svg';
import ggc from '../../images/ggc-name-logo.svg';
import gatsbyIcon from '../../images/gatsby-icon.png';
import codesandbox from '../../images/codesandbox.svg';

import { blogTitleStyle } from '../blog/index'

const IndexPage = () => (
	<OuterLayout>
		<SEO title="Home" />
		<Title titleStyle={blogTitleStyle}>
			<h1>Portfolio</h1>
			<div style={{ padding: "0px 0 40px 0", fontStyle: "italic", fontSize: "18px" }}>
				Check out my current and past projects.
			</div>
		</Title>
		<InnerLayout>
			<div className="project">
				<div className="project-image">
					<img src={dota2} /> 
				</div>
				<div className="project-description">
					<h2>Dota 2 API App</h2>
					<a href="https://stupefied-knuth-2bd1f1.netlify.com/"><b>Netlify</b></a>
					<p>
						My ongoing project using the <a href="https://docs.opendota.com/"><b>OpenDota API</b></a>. The app is somewhat of a clone of two popular 
						Dota 2 statistics sites, <a href="https://www.dotabuff.com/"><b>DotaBuff</b></a> and <a href="https://www.opendota.com/players/87430370"><b>OpenDota</b></a>.
						You can navigate using the menu to check a player's statistics, past matches, heroes played and current rankings.
					</p>

				</div>
			</div>
			<div className="project">
				<div className="project-image">
					<img src={awer} />
				</div>
				<div className="project-description">
					<h2>Ash Williams Escape Room</h2>
					<a href="https://github.com/iamBevan/raspbian-express-react"><b>Github</b></a>
					<p>
						Freelance project in which I have written a full-stack using Node, Express, React and a Raspberry Pi.
						My app allows an escape room player to test a password in the React app; should they guess correctly a physical lock is opened by the Pi via Express.
					</p>
				</div>
			</div>
			<div className="project">
				<div className="project-image">
				<img src={ggc} />
				</div>
				<div className="project-description">
					<h2>Gower Giant Cleaning</h2>
					<a href="https://gowergiantcleaning.co.uk"><b>www.gowergiantcleaning.co.uk</b></a>
					<p>
						Freelance project for a local cleaning company. Written in React and Typescript. The website is fully responsive with all artwork being custom made by me.
					</p>
				</div>
			</div>
			<div className="project">
				<div className="project-image">
				<img src={gatsbyIcon} />
				</div>
				<div className="project-description">
					<h2>My Personal Site</h2>
					<a href="https://kevinbevan.com/"><b>www.kevinbevan.com</b></a>
					<p>
						The website you are currently on was created with Gatsby and SASS; it's responsive and incredibly fast when using internal links. I've made use of GraphQL
						and have reusable components for most things.
					</p>
				</div>
			</div>
			<div className="project">
				<div className="project-image">
				<img src={codesandbox} />
				</div>
				<div className="project-description">
					<h2>My CodeSandbox</h2>
					<a href="https://codesandbox.io/u/iamBevan/sandboxes"><b>CodeSandbox</b></a>
					<p>
						The website you are currently on was created with Gatsby and SASS; it's responsive and incredibly fast when using internal links. I've made use of GraphQL
						and have reusable components for most things.
					</p>
				</div>
			</div>
			{/* <div className="project">
				<div className="project-image">
					1
				</div>
				<div className="project-description">
					2
				</div>
			</div> */}
		</InnerLayout>

	</OuterLayout>
)

export default IndexPage
