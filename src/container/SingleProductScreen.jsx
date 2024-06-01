import { useParams } from "react-router-dom"
import ProductDisplay from "../components/SingleProduct/ProductDisplay";
import ProductDetailAccordion from "../components/SingleProduct/ProductDetailAccordion";
import SimilarProducts from "../components/SingleProduct/SimilarProducts";

const SingleProductScreen = () => {
    const { id } = useParams()
    console.log(id);
  return (
    <div>
        <ProductDisplay />
        <ProductDetailAccordion />
        <SimilarProducts />
    </div>
  )
}

export default SingleProductScreen