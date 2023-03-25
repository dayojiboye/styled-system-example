import React from "react";
import Box from "./Box";
import Header from "./Header";

export default function Layout({ children }) {
	return (
		<>
			<Header />
			<Box as="main" width="100%" mt="77px">
				{children}
			</Box>
		</>
	);
}
