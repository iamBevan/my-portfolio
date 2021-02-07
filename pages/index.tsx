import Head from "next/head"
import { Home } from "../components/home/home"
import { Github, Mail } from "../components/icons/svgr"
import SvgFileText from "../components/icons/svgr/FileText"
import SvgLinkedin from "../components/icons/svgr/Linkedin"
import styles from "../styles/Home.module.scss"

export default function Index() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Kevin Bevan | Developer</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Home />
		</div>
	)
}
