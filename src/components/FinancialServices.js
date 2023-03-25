import React from "react";
import Box from "./Box";
import ServiceCard from "./ServiceCard";
import Text from "./Text";
import Wrapper from "./Wrapper";
import ImageOne from "assets/images/undraw_invest_88iw.png";
import ImageTwo from "assets/images/undraw_business_deal_cpi9.png";
import ImageThree from "assets/images/undraw_windy_day_x63l.png";

export default function FinancialServices() {
	return (
		<Box as="section" paddingY="100px">
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

				<Text
					as="p"
					maxWidth="600px"
					fontSize={["16px", null, "18px"]}
					marginX="auto"
					textAlign="center"
					marginTop="32px"
				>
					Morbi sagittis nisi rhoncus urna pellentesque varius. Praesent ornare nunc vitae augue
					commodo condimentum eu at augue.
				</Text>

				<Box
					display="grid"
					marginTop="60px"
					gridTemplateColumns="repeat(auto-fit,minmax(250px,1fr))"
					gap="10px"
				>
					<ServiceCard
						image={ImageOne}
						title="Donec porttitor ac ultrices vulputate"
						text="Morbi sagittis nisi rhoncus urna pellentesque varius. Praesent ornare nunc vitae augue commodo condimentum eu at augue."
					/>

					<ServiceCard
						image={ImageTwo}
						title="Donec porttitor ac ultrices vulputate"
						text="Morbi sagittis nisi rhoncus urna pellentesque varius. Praesent ornare nunc vitae augue commodo condimentum eu at augue."
					/>

					<ServiceCard
						image={ImageThree}
						title="Donec porttitor ac ultrices vulputate"
						text="Morbi sagittis nisi rhoncus urna pellentesque varius. Praesent ornare nunc vitae augue commodo condimentum eu at augue."
					/>
				</Box>
			</Wrapper>
		</Box>
	);
}
