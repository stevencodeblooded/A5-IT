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
            <div className="rounded-full md:w-1/2">
              <div className="relative">
                <h1 className="absolute bottom-12 left-1/3 font-semibold text-white text-2xl z-10">
                  Shop Products
                </h1>
                <CustomSlider>
                  {products.map((image, index) => {
                    return (
                      <img
                        key={index}
                        src={image.imgURL}
                        alt={image.imgAlt}
                        className=" object-cover"
                      />
                    );
                  })}
                </CustomSlider>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:w-1/2">
              <div className="relative">
                <h1 className="absolute bottom-12 left-1/3 font-semibold text-white text-2xl z-10">
                  Shop Brands
                </h1>
                <CustomSlider2>
                  {brands.map((image, index) => {
                    return (
                      <img key={index} src={image.imgURL} alt={image.imgAlt} />
                    );
                  })}
                </CustomSlider2>
              </div>
              <div className="relative">
                <h1 className="absolute bottom-12 left-1/3 font-semibold text-white text-2xl z-10">
                  Explore Services
                </h1>
                <CustomSlider3>
                  {services.map((image, index) => {
                    return (
                      <img key={index} src={image.imgURL} alt={image.imgAlt} />
                    );
                  })}
                </CustomSlider3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductsBrandsServicesImages