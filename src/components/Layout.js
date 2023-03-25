import React from "react";
import Box from "./Box";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
	return (
		<>
			<Header />
			<Box as="main" width="100%" mt="77px">
				{children}
			</Box>
			<Footer />
		</>
	);
}
