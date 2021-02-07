import Head from "next/head"
import styles from "../styles/Home.module.scss"

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Kevin Bevan | Developer</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<header>header</header>

			<main className={styles.main}>
				<h1 className={styles.title}>Kevin Bevan</h1>

				<p className={styles.description}>Frontend Developer</p>

				<div className={styles.icons}>icons</div>
			</main>

			<footer className={styles.footer}>
				<a
					href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'
				>
					Powered by{" "}
					<img
						src='/vercel.svg'
						alt='Vercel Logo'
						className={styles.logo}
					/>
				</a>
			</footer>
		</div>
	)
}
