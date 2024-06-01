import Consultations from "../components/Home/Consultations"
import HaveQuestions from "../components/Home/HaveQuestions"
import Hero from "../components/Home/Hero"
import LatestProducts from "../components/Home/LatestProducts"
import LetsHelp from "../components/Home/LetsHelp"
import ProductsBrandsServicesImages from "../components/Home/ProductsBrandsServicesImages"
import SeamlessExperience from "../components/Home/SeamlessExperience"
import TrustedClients from "../components/Home/TrustedClients"
import UnlockBusinessPotential from "../components/Home/UnlockBusinessPotential"
import WhyUs from "../components/Home/WhyUs"

const HomeScreen = () => {
  return (
    <div>
        <Hero />
        <ProductsBrandsServicesImages />
        <LatestProducts />
        <UnlockBusinessPotential />
        <WhyUs />
        <TrustedClients />
        <SeamlessExperience />
        <Consultations />
        <HaveQuestions />
        <LetsHelp />
    </div>
  )
}

export default HomeScreen