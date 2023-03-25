import SecuritySection from "components/SecuritySection";
import FinancialServices from "components/FinancialServices";
import HeroSection from "./components/HeroSection";
import Layout from "./components/Layout";
import MedicalServices from "components/MedicalServices";

export default function App() {
	return (
		<>
			<Layout>
				<HeroSection />
				<SecuritySection />
				<FinancialServices />
				<MedicalServices />
			</Layout>
		</>
	);
}
