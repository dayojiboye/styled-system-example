/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";
import Box from "./Box";
import Button from "./Button";
import Text from "./Text";
import Wrapper from "./Wrapper";

const StyledLink = styled(Text)`
	&:hover {
		color: ${(props) => props.theme.colors.green};
	}
`;

export default function Header() {
	return (
		<Box
			position="fixed"
			top={0}
			left={0}
			width="100%"
			height="77px"
			display="flex"
			alignItems="center"
			justifyContent="center"
		>
			<Wrapper display="flex" justifyContent="space-between" alignItems="center">
				<Text
					as="a"
					href="javascript:void(0)"
					fontWeight="700"
					fontSize={["20px", "24px"]}
					color="blue"
				>
					BRANDLOGO
				</Text>

				<Box as="nav" display="flex" alignItems="center" gap="0px 35px">
					<StyledLink
						as="a"
						href="javascript:void(0)"
						fontWeight="500"
						fontSize={["16px", "18px"]}
						color="blue"
						textTransform="uppercase"
					>
						Link
					</StyledLink>

					<StyledLink
						as="a"
						href="javascript:void(0)"
						fontWeight="500"
						fontSize={["16px", "18px"]}
						color="blue"
						textTransform="uppercase"
					>
						Link
					</StyledLink>

					<Button variant="outline" px="16px" textTransform="uppercase">
						Create a Free Account
					</Button>
				</Box>
			</Wrapper>
		</Box>
	);
}
