import styles from "./header.module.scss"

function Header() {
	return (
		<div className={styles.header}>
			<div className={styles.left}>Left</div>
			<div className={styles.projects}>
				<a href='#'>Projects</a>
			</div>
		</div>
	)
}

export { Header }
