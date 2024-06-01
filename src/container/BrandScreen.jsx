import DisplayAllBrands from "../components/Brands/DisplayAllBrands"
import FeaturedBrands from "../components/Brands/FeaturedBrands"
import SearchBrands from "../components/Brands/SearchBrands"

const BrandScreen = () => {
  return (
    <div>
        <SearchBrands />
        <FeaturedBrands />
        <DisplayAllBrands />
    </div>
  )
}

export default BrandScreen