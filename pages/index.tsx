import Head from "next/head"
import { HomePage } from "../components"

export default function Home(): JSX.Element {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<HomePage />
		</>
	)
}
