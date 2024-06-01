const Filter = () => {
  return (
    <div>
      <div>
        <h2 className="text-lg font-semibold border-b-2 border-b-gray-300 pb-2 mb-10">
          Filters
        </h2>
        <div className="space-y-6">
          <div className="p-4 border-2 border-gray-200 rounded-md">
            <h3 className="font-semibold mb-3">Categories</h3>
            <form className="flex flex-col gap-2 font-semibold text-xs lg:text-sm">
              <div className="space-x-2">
                <input type="checkbox" name="all" id="all" />
                <label htmlFor="all">All</label>
              </div>
              <div className="space-x-2">
                <input type="checkbox" name="accessories" id="accessories" />
                <label htmlFor="accessories">Accessories</label>
              </div>
              <div className="space-x-2">
                <input
                  type="checkbox"
                  name="digitalProdutcs"
                  id="digitalProdutcs"
                />
                <label htmlFor="digitalProdutcs">Digital Products</label>
              </div>
              <div className="space-x-2">
                <input
                  type="checkbox"
                  name="networkHardware"
                  id="networkHardware"
                />
                <label htmlFor="networkHardware">Network Hardware</label>
              </div>
              <div className="space-x-2">
                <input
                  type="checkbox"
                  name="powerEquipment"
                  id="powerEquipment"
                />
                <label htmlFor="powerEquipment">Power Equipment</label>
              </div>
              <div className="space-x-2">
                <input type="checkbox" name="printers" id="printers" />
                <label htmlFor="printers">Printers</label>
              </div>
              <div className="space-x-2">
                <input type="checkbox" name="services" id="services" />
                <label htmlFor="services">Services</label>
              </div>
            </form>
          </div>

          <div className="p-4 border-2 border-gray-200 rounded-md">
            <h3 className="font-semibold mb-3">Brands</h3>
            <form className="flex flex-col gap-2 font-semibold text-xs lg:text-sm">
              <div className="space-x-2">
                <input type="checkbox" name="all" id="all" />
                <label htmlFor="all">All</label>
              </div>
              <div className="space-x-2">
                <input type="checkbox" name="accessories" id="accessories" />
                <label htmlFor="accessories">Accessories</label>
              </div>
              <div className="space-x-2">
                <input
                  type="checkbox"
                  name="digitalProdutcs"
                  id="digitalProdutcs"
                />
                <label htmlFor="digitalProdutcs">Digital Products</label>
              </div>
              <div className="space-x-2">
                <input
                  type="checkbox"
                  name="networkHardware"
                  id="networkHardware"
                />
                <label htmlFor="networkHardware">Network Hardware</label>
              </div>
              <div className="space-x-2">
                <input
                  type="checkbox"
                  name="powerEquipment"
                  id="powerEquipment"
                />
                <label htmlFor="powerEquipment">Power Equipment</label>
              </div>
              <div className="space-x-2">
                <input type="checkbox" name="printers" id="printers" />
                <label htmlFor="printers">Printers</label>
              </div>
              <div className="space-x-2">
                <input type="checkbox" name="services" id="services" />
                <label htmlFor="services">Services</label>
              </div>
            </form>
          </div>

          <div className="p-4 border-2 border-gray-200 rounded-md">
            <h3 className="font-semibold">Price</h3>
          </div>

          <div className="p-4 border-2 border-gray-200 rounded-md">
            <h3 className="font-semibold">Colors</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter