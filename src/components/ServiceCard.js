import React from "react";
import Box from "./Box";
import Text from "./Text";

export default function ServiceCard({ image, title, text, ...props }) {
	return (
		<Box
			border="1px solid"
			borderColor="lightPurple"
			minHeight="200px"
			padding="60px 32px"
			display="flex"
			borderRadius="10px"
			flexDirection="column"
			{...props}
		>
			<Box
				as="img"
				alt={title}
				src={image}
				maxWidth="275.501px"
				width="100%"
				height="183.101px"
				margin="0 auto"
			/>
			<Text
				as="h3"
				fontSize={["20px", null, "24px"]}
				fontWeight="600"
				color="blue"
				marginTop="80px"
				maxWidth="400px"
			>
				{title}
			</Text>
			<Text as="p" fontSize={["16px", null, "18px"]} marginTop="32px" maxWidth="400px">
				{text}
			</Text>
		</Box>
	);
}
