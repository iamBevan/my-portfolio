import styled, { keyframes } from "styled-components"

const gradient = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`

const StyledHomePage = styled.main`
	height: 100vh;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background: var(--gradient);
	background-size: 400% 400%;
	animation: ${gradient} 20s ease infinite;
`

const Headings = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
`

const Name = styled.h1`
	font-size: 90px;
	color: white;
	font-family: "Montserrat";
	margin: -20px;
`

const Description = styled.h2`
	font-size: 26px;
	color: white;
	font-family: "Roboto Slab", sans-serif;
	font-weight: 200;
`

export { StyledHomePage, Name, Description, Headings }
