import React from "react"
// import { Link } from "gatsby"

import './styles.scss';

import OuterLayout from "../../components/OuterLayout"
import SEO from "../../components/SEO"

import dota2 from '../../images/dota-2-app.svg';
import awer from '../../images/ashley-williams-escape-room.svg';
import ggc from '../../images/ggc-name-logo.svg';
import gatsbyIcon from '../../images/gatsby-icon.png';
import codesandbox from '../../images/codesandbox.svg';

const IndexPage = () => (
	<OuterLayout>
		<SEO title="Home" />
		<div className="portfolio-title">
			<div>&nbsp;</div>
			<h1>Portfolio</h1>
			<h2>Check out my current and past projects</h2>
		</div>
		<div className="portfolio-container">

			<div className="project">
				<div className="title-img">
					<h2><a href="https://stupefied-knuth-2bd1f1.netlify.com/">Dota 2 API App</a></h2>
					<a href="https://stupefied-knuth-2bd1f1.netlify.com/"><img alt="" src={dota2} /></a>
				</div>

				<div className="description">

					<span><a href="https://stupefied-knuth-2bd1f1.netlify.com/">Netlify</a></span>
					<p>
						My ongoing project using the <a href="https://docs.opendota.com/"><b>OpenDota API</b></a>. The app is somewhat of a clone of two popular
						Dota 2 statistics sites, <a href="https://www.dotabuff.com/"><b>DotaBuff</b></a> and <a href="https://www.opendota.com/players/87430370"><b>OpenDota</b></a>.
						You can navigate using the menu to check a player's statistics, past matches, heroes played and current rankings.
					</p>

				</div>

			</div>


			<div className="project">
				<div className="title-img">
					<h2><a href="https://github.com/iamBevan/raspbian-express-react">Ash Williams Escape Room</a></h2>
					<a href="https://github.com/iamBevan/raspbian-express-react"><img alt="" src={awer} /></a>
				</div>

				<div className="description">

					<span><a href="https://github.com/iamBevan/raspbian-express-react">Github</a></span>
					<p>
						Freelance project in which I have written a full-stack using Node, Express, React and a Raspberry Pi.
						My app allows an escape room player to test a password in the React app; should they guess correctly a physical lock is opened by the Pi via Express.
					</p>

				</div>
			</div>

			<div className="project">
				<div className="title-img">
					<h2><a href="https://gowergiantcleaning.co.uk">Gower Giant Cleaning</a></h2>
					<a href="https://gowergiantcleaning.co.uk"><img alt="" src={ggc} /></a>
				</div>

				<div className="description">

					<span><a href="https://gowergiantcleaning.co.uk">gowergiantcleaning.co.uk</a></span>
					<p>
						Freelance project for a local cleaning company. Written in React and Typescript. The website is fully responsive with all artwork being custom made by me.
					</p>

				</div>
			</div>

			<div className="project">
				<div className="title-img">
					<h2><a href="https://github.com/iamBevan/my-portfolio">My Personal Site</a></h2>
					<a href="https://github.com/iamBevan/my-portfolio"><img alt="" src={gatsbyIcon} /></a>
				</div>

				<div className="description">

					<span><a href="https://www.kevinbevan.com">kevinbevan.com</a></span>
					<p>
						The website you are currently on was created with Gatsby and SASS; it's responsive and incredibly fast when using internal links. I've made use of GraphQL
						and have reusable components for most things.
					</p>

				</div>
			</div>

			<div className="project">
				<div className="title-img">
					<h2><a href="https://codesandbox.io/u/iamBevan/sandboxes">My CodeSandbox</a></h2>
					<img alt="" src={codesandbox} />
				</div>
				<div className="description">

					<span><a href="https://codesandbox.io/u/iamBevan/sandboxes">CodeSandbox</a></span>
					<p>
						Check out my CodeSandbox, in which I have a lot of React components that aren't large 
						enough to be included in my portfolio but still clearly demonstrate my ability with Javascript.
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

		</div>

	</OuterLayout>
)

export default IndexPage
