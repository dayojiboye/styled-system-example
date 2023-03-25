import React from "react";
import Box from "./Box";
import Text from "./Text";
import Wrapper from "./Wrapper";
import HeroImg from "assets/images/photo-1521500875084-9ad8838c5f4bbb.jfif";
import Button from "./Button";

export default function HeroSection() {
	return (
		<Box as="section">
			<Wrapper
				display="flex"
				flexDirection={["column", "", "row"]}
				alignItems="center"
				gap={["40px 0px", "", "0px 40px"]}
				paddingY="40px"
			>
				<Box flex="1">
					<Text
						as="h1"
						fontSize={["32px", "40px"]}
						maxWidth={["600px", "", "300px"]}
						marginX={["auto", "", "0px"]}
						color="blue"
						fontWeight="700"
						textAlign={["center", "", "left"]}
					>
						HERO HEADER TEXT
					</Text>
					<Text
						as="p"
						fontSize={["16px", "18px"]}
						maxWidth={["600px", "", "500px"]}
						marginY="32px"
						marginX={["auto", "", "0px"]}
						textAlign={["center", "", "left"]}
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis arcu at sem finibus
						congue. Vestibulum nec hendrerit nisi. Lorem ipsum dolor sit amet, consectetur
						adipiscing elit. Mauris quis arcu at sem finibus congue. Vestibulum nec hendrerit nisi.
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis arcu at sem finibus
						congue. Vestibulum nec hendrerit nisi.
					</Text>
					<Button
						variant="primary"
						fontSize={["16px", "", "20px"]}
						fontWeight="600"
						width="fit-content"
						marginX={["auto", "", "0px"]}
					>
						Create a Free Account
					</Button>
				</Box>

				<Box flex="1">
					<Box as="img" alt="Hero Section" src={HeroImg} width="100%" height="100%" />
				</Box>
			</Wrapper>
		</Box>
	);
}
