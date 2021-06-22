import { StyledHomePage, Name, Description, Headings } from "./styled-home-page"

const HomePage = (): JSX.Element => {
	return (
		<StyledHomePage>
			<Headings>
				<Name>Kevin Bevan</Name>
				<Description>Front End Developer</Description>
			</Headings>
		</StyledHomePage>
	)
}
export { HomePage }
