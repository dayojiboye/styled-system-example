import React from "react";
import Box from "./Box";
import Wrapper from "./Wrapper";
import ShieldImg from "assets/images/security-login-400-min.png";
import Text from "./Text";

export default function SecuritySection() {
	return (
		<Box as="section" bg="whiteSmoke" paddingY="100px">
			<Wrapper
				display="flex"
				gap={["40px", null, "32px"]}
				justifyContent="center"
				alignItems="center"
				flexDirection={["column", null, "row"]}
			>
				<Box width="fit-content" height="fit-content">
					<Box as="img" width="100px" height="100px" alt="Security" src={ShieldImg} />
				</Box>

				<Box width="fit-content" maxWidth="500px">
					<Text
						as="h2"
						fontSize={["18px", null, "20px"]}
						color="blue"
						fontWeight="600"
						marginBottom="16px"
						textAlign={["center", null, "left"]}
					>
						Donec Porttitor Ac Ultrices Vulputate.
					</Text>
					<Text
						as="p"
						fontSize={["16px", null, "18px"]}
						maxWidth={["unset", null, "600px"]}
						textAlign={["center", null, "left"]}
					>
						Morbi sagittis nisi rhoncus urna pellentesque varius. Praesent ornare nunc vitae augue
						commodo condimentum eu at augue.
					</Text>
				</Box>
			</Wrapper>
		</Box>
	);
}
