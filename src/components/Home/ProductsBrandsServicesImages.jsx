import products from "../../assets/products";
import brands from "../../assets/brands";
import services from "../../assets/services";
import CustomSlider from '../../components/ShopProductsSlider/custom.slider'
import CustomSlider2 from '../../components/ShopBrandsSlider/custom.slider'
import CustomSlider3 from '../../components/ExploreServices/custom.slider'

const ProductsBrandsServicesImages = () => {
  return (
    <div className="py-32 px-3">
      <section className="max-w-6xl mx-auto rounded-full">
        <div>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="rounded-full">
              <div>
                <CustomSlider>
                  {products.map((image, index) => {
                    return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
                  })}
                </CustomSlider>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <CustomSlider2>
                  {brands.map((image, index) => {
                    return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
                  })}
                </CustomSlider2>
              </div>
              <div>
                <CustomSlider3>
                  {services.map((image, index) => {
                    return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
                  })}
                </CustomSlider3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductsBrandsServicesImages