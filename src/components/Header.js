/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";
import Box from "./Box";
import Button from "./Button";
import Text from "./Text";
import Wrapper from "./Wrapper";

const Nav = styled(Box)`
	@media (max-width: 639px) {
		position: fixed;
		top: 0;
		right: ${(props) => (props.show ? 0 : "-100%")};
		z-index: 200;
		background-color: rgba(18, 61, 138);
		width: 100%;
		height: 100vh;
		transition: right 0.5s ease-in-out;
		overflow-y: auto;
	}
`;

const NavLink = styled(Text)`
	&:hover {
		text-decoration: underline;
		text-underline-offset: 4px;
	}
`;

const Hamburger = styled(Box)`
	position: relative;
	z-index: 250;

	#bar1,
	#bar2,
	#bar3 {
		width: 30px;
		height: 2px;
		margin: 6px 0;
		transition: all 0.4s ease-in-out;
	}

	#bar1 {
		transform: ${(props) => (props.show ? "rotate(-45deg) translate(-4px, 6px)" : "none")};
		background-color: ${(props) =>
			props.show ? props.theme.colors.white : props.theme.colors.blue};
	}

	#bar2 {
		opacity: ${(props) => (props.show ? 0 : 1)};
		background-color: ${(props) => props.theme.colors.blue};
	}

	#bar3 {
		transform: ${(props) => (props.show ? "rotate(45deg) translate(-5px, -8px)" : "none")};
		background-color: ${(props) =>
			props.show ? props.theme.colors.white : props.theme.colors.blue};
	}
`;

export default function Header() {
	const [openSideBar, setOpenSideBar] = React.useState(false);

	return (
		<Box
			as="header"
			position="fixed"
			top={0}
			left={0}
			width="100%"
			height="77px"
			display="flex"
			alignItems="center"
			justifyContent="center"
			bg="white"
		>
			<Wrapper display="flex" justifyContent="space-between" alignItems="center">
				<Text
					as="a"
					href="/"
					fontWeight="700"
					fontSize="24px"
					color={openSideBar ? ["white", "blue"] : "blue"}
					position="relative"
					zIndex={250}
					transition="color 0.5s ease-in-out"
				>
					LOGO
				</Text>

				<Nav
					as="nav"
					display="flex"
					flexDirection={["column", "row"]}
					alignItems={["flex-start", "center"]}
					gap={["48px 0px", "0px 35px"]}
					p={["84px 35px 60px", "0px"]}
					show={openSideBar}
				>
					<NavLink
						as="a"
						href="/"
						fontWeight="500"
						fontSize="18px"
						color={["white", "blue"]}
						textTransform="uppercase"
						width={["100%", "fit-content"]}
					>
						Link
					</NavLink>

					<NavLink
						as="a"
						href="/"
						fontWeight="500"
						fontSize="18px"
						color={["white", "blue"]}
						textTransform="uppercase"
						width={["100%", "fit-content"]}
					>
						Link
					</NavLink>

					<Button
						as="a"
						href="/"
						variant={["light", "outline"]}
						px="16px"
						textTransform="uppercase"
						whiteSpace="nowrap"
					>
						Create a Free Account
					</Button>
				</Nav>

				<Hamburger
					role="button"
					show={openSideBar}
					display={["block", "none"]}
					onClick={() => {
						setOpenSideBar(!openSideBar);
						document.documentElement.classList.toggle("_fixed");
						document.body.classList.toggle("_fixed");
					}}
				>
					<Box id="bar1"></Box>
					<Box id="bar2"></Box>
					<Box id="bar3"></Box>
				</Hamburger>
			</Wrapper>
		</Box>
	);
}
