import React from "react";
import Box from "./Box";
import Text from "./Text";
import Wrapper from "./Wrapper";
import CustomersImg from "assets/images/pexels-photo-1417255.jpeg";
import styled from "styled-components";
import Button from "./Button";

const BouncingImage = styled(Box)`
	animation: bounce 2s linear infinite alternate;

	@-webkit-keyframes bounce {
		0% {
			transform: translateY(0);
		}
		100% {
			transform: translateY(-35px);
		}
	}

	@keyframes bounce {
		0% {
			transform: translateY(0);
		}
		100% {
			transform: translateY(-35px);
		}
	}
`;

export default function Customer() {
	return (
		<Box as="section" paddingBottom="100px">
			<Wrapper>
				<Text
					as="h2"
					color="blue"
					fontWeight="600"
					fontSize={["24px", null, "32px"]}
					maxWidth="600px"
					marginX="auto"
					textAlign="center"
				>
					Donec porttitor ac ultrices vulputate!
				</Text>

				<Box
					display="flex"
					flexDirection={["column", null, "row"]}
					gap={["40px", null, "32px"]}
					marginTop="48px"
					justifyContent="center"
				>
					<Box
						width="100%"
						maxWidth="400px"
						height="auto"
						alignSelf="center"
						position="relative"
						zIndex={1}
						bg="red"
					>
						<BouncingImage
							as="img"
							alt="John & Jane"
							src={CustomersImg}
							width="100%"
							height="auto"
							borderRadius="10px"
						/>
					</Box>

					<Box display="flex" flexDirection="column" alignItems={["center", null, "flex-start"]}>
						<Text
							as="h3"
							color="blue"
							fontWeight="500"
							fontSize={["20px", null, "24px"]}
							textAlign={["center", null, "left"]}
						>
							Donec porttitor ac ultrices vulputate
						</Text>
						<Text
							as="p"
							fontSize={["16px", null, "18px"]}
							maxWidth="550px"
							textAlign={["center", null, "left"]}
							marginY="28px"
						>
							Morbi sagittis nisi rhoncus urna pellentesque varius. Praesent ornare nunc vitae augue
							commodo condimentum eu at augue.
						</Text>

						<Button as="a" href="/" variant="primary">
							Meet John & Jane
						</Button>
					</Box>
				</Box>
			</Wrapper>
		</Box>
	);
}
