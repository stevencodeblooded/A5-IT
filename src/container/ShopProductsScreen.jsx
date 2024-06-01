import CartOverlay from "../components/ShopProducts/CartOverlay"
import Filter from "../components/ShopProducts/Filter"
import Products from "../components/ShopProducts/Products"

const ShopProductsScreen = () => {
  return (
    <div className="px-3 py-48">
      <section className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="cols-span-1 md:col-span-1">
            <Filter />
          </div>
          <div className="cols-span-1 md:col-span-3">
            <Products />
          </div>
          {/* <CartOverlay /> */}
        </div>
      </section>
    </div>
  );
}

export default ShopProductsScreen