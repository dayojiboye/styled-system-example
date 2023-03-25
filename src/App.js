import SecuritySection from "components/SecuritySection";
import HeroSection from "./components/HeroSection";
import Layout from "./components/Layout";

export default function App() {
	return (
		<>
			<Layout>
				<HeroSection />
				<SecuritySection />
			</Layout>
		</>
	);
}
