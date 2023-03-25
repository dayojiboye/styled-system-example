import React from "react";
import styled from "styled-components";
import Box from "./Box";
import Button from "./Button";
import Text from "./Text";
import Wrapper from "./Wrapper";
import { ReactComponent as FacebookIcon } from "assets/icons/facebook.svg";
import { ReactComponent as TwitterIcon } from "assets/icons/twitter.svg";
import { ReactComponent as InstagramIcon } from "assets/icons/instagram.svg";

const FooterLink = styled(Text)`
	font-size: 16px;
	font-weight: 500;
	width: fit-content;

	&:hover {
		text-decoration: underline;
		text-underline-offset: 4px;
	}
`;

const SocialIcon = styled(Box)`
	width: fit-content;

	> svg {
		width: auto;
		height: 30px;

		path {
			fill: ${(props) => props.theme.colors.blue};
		}
	}
`;

export default function Footer() {
	return (
		<Box as="footer">
			<Box bg="blue">
				<Wrapper
					paddingY="48px"
					display="flex"
					flexDirection="column"
					alignItems="center"
					justifyContent="center"
				>
					<Text
						as="h2"
						color="white"
						fontWeight="600"
						fontSize={["18px", null, "20px"]}
						textAlign="center"
					>
						Nam ultrices pulvinar orci fringilla condimentum. Sed in vestibulum dolor, a vulputate
						arcu.
					</Text>
					<Text
						as="p"
						fontSize={["16px", null, "18px"]}
						textAlign="center"
						color="silver"
						marginTop="24px"
					>
						Aenean eget orci vel ex rutrum convallis sed ac magna.
					</Text>
					<Text
						as="p"
						fontSize={["16px", null, "18px"]}
						textAlign="center"
						color="silver"
						marginTop="10px"
					>
						Aliquam ultricies quam sodales, dapibus dolor quis, pharetra nulla.
					</Text>
					<Button as="a" href="/" variant="light" marginTop="32px">
						Create Account for Free
					</Button>
				</Wrapper>
			</Box>

			<Wrapper
				paddingY="64px"
				display="flex"
				justifyContent="space-between"
				gap="60px"
				flexDirection={["column", null, "row"]}
				alignItems={["center", null, "flex-start"]}
			>
				<Box flex="1" order={["2", null, "1"]}>
					<Text
						as="a"
						href="/"
						color="blue"
						fontSize="20px"
						fontWeight="600"
						marginX={["auto", null, "unset"]}
						width="fit-content"
						display="block"
					>
						LOGO
					</Text>
					<Text
						as="p"
						fontSize="16px"
						maxWidth="600px"
						marginTop="20px"
						textAlign={["center", null, "left"]}
					>
						Donec lorem nulla, dignissim at pulvinar non, fringilla vitae mi. Vestibulum semper
						accumsan leo, a molestie orci sodales ac. Suspendisse sit amet diam ut massa semper
						lobortis.
					</Text>
					<Text
						as="p"
						fontSize="16px"
						maxWidth="600px"
						marginTop="20px"
						textAlign={["center", null, "left"]}
					>
						Donec lorem nulla, dignissim at pulvinar non, fringilla vitae mi. Vestibulum semper
						accumsan leo, a molestie orci sodales ac. Suspendisse sit amet diam ut massa semper
						lobortis.
					</Text>
					<Text as="p" fontSize="14px" marginTop="24px" textAlign={["center", null, "left"]}>
						© {new Date().getFullYear()} Brand Name - Brand serial number
					</Text>
				</Box>

				<Box
					width="fit-content"
					display="flex"
					justifyContent="space-between"
					gap="80px"
					order={["1", null, "2"]}
				>
					<Box display="flex" flexDirection="column" gap="7px" width="fit-content">
						<Text as="h3" color="blue" fontWeight="600" fontSize="18px">
							Heading
						</Text>
						<FooterLink as="a" href="/">
							Link
						</FooterLink>
						<FooterLink as="a" href="/">
							Link
						</FooterLink>
						<FooterLink as="a" href="/">
							Link
						</FooterLink>
						<FooterLink as="a" href="/">
							Link
						</FooterLink>
						<Box display="flex" gap="3px" marginTop="20px">
							<SocialIcon as="a" href="/">
								<TwitterIcon />
							</SocialIcon>
							<SocialIcon as="a" href="/">
								<FacebookIcon />
							</SocialIcon>
							<SocialIcon as="a" href="/">
								<InstagramIcon />
							</SocialIcon>
						</Box>
					</Box>

					<Box display="flex" flexDirection="column" gap="7px" width="fit-content">
						<Text as="h3" color="blue" fontWeight="600" fontSize="18px">
							Heading
						</Text>
						<FooterLink as="a" href="/">
							Link
						</FooterLink>
						<FooterLink as="a" href="/">
							Link
						</FooterLink>
						<FooterLink as="a" href="/">
							Link
						</FooterLink>
						<FooterLink as="a" href="/">
							Link
						</FooterLink>
						<FooterLink as="a" href="/">
							Link
						</FooterLink>
						<FooterLink as="a" href="/">
							Link
						</FooterLink>
					</Box>
				</Box>
			</Wrapper>
		</Box>
	);
}
