import SecuritySection from "components/SecuritySection";
import ServiceOneSection from "components/ServiceOneSection";
import HeroSection from "./components/HeroSection";
import Layout from "./components/Layout";

export default function App() {
	return (
		<>
			<Layout>
				<HeroSection />
				<SecuritySection />
				<ServiceOneSection />
			</Layout>
		</>
	);
}
