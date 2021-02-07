import React from "react"
import { Header } from "../header/header"
import { FileText, Github, Linkedin, Mail } from "../icons"
import styles from "./home.module.scss"

export function Home() {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<h1 className={styles.title}>
					Kev<span className={styles.i}>i</span>n Bevan
				</h1>

				<p className={styles.description}>Frontend Developer</p>

				<div className={styles.icons}>
					<a
						href='https://github.com/iamBevan'
						target='_blank'
						rel='noopener noreferrer'
					>
						<Github color='none' size={26} />
					</a>
					<a
						href='mailto:iambevan@gmail.com'
						target='_blank'
						rel='noopener noreferrer'
					>
						<Mail color='none' size={26} />
					</a>
					<a
						href='https://www.linkedin.com/in/kevin-bevan/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<Linkedin color='none' size={26} />
					</a>
					<a
						href='https://drive.google.com/open?id=1P6TKo09b3EzrJ_VKw_31Fq45pbTC7SQI'
						target='_blank'
						rel='noopener noreferrer'
					>
						<FileText color='none' size={26} />
					</a>
				</div>
			</main>
			<footer className={styles.footer}>
				<p>
					<span>©</span>
					{new Date().getFullYear()} Kevin Bevan
				</p>
			</footer>
		</>
	)
}
