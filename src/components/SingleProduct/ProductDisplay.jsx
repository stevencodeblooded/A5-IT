import { faCartShopping, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'
import ProductCarousel from './ProductCarousel';

const ProductDisplay = () => {
  return (
    <div className="px-3 pt-48">
      <section className="max-w-6xl mx-auto">
        <div>
          <h4 className="text-xs mb-6">
            <Link to="/" className="font-semibold">
              Home
            </Link>{" "}
            | Acer Nitro 5 15.6" FHD Laptop, i5-12450H, 16GB RAM, 512GB SSD, RTX
            4060, Windows 11 Home
          </h4>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <ProductCarousel />
            </div>
            <div>
              <h2 className="text-2xl font-semibold">
                Acer Nitro 5 15.6" FHD Laptop, i5-12450H, 16GB RAM, 512GB SSD,
                RTX 4060, Windows 11 Home
              </h2>

              <hr className="border-t-0 border-b border-gray-300 my-5" />

              <p className="text-gray-500">Price starts from</p>
              <h2 className="text-3xl text-blue-600 font-semibold flex items-center gap-2 ">
                $1497.00{" "}
                <span className="text-sm line-through text-gray-500">
                  $1800.00
                </span>
              </h2>

              <hr className="border-t-0 border-b border-gray-300 my-5" />

              <h3 className="text-sm text-gray-600 font-semibold mb-1">
                Dominating Specs
              </h3>
              <ul className="text-sm mb-3 text-gray-500 list-disc px-6">
                <li>12th Gen Intel uore i7 processor</li>
                <li>NVIDIA GeForce RTX 30 Series GPfe</li>
                <li>Fully optimized for maximium MGP</li>
                <li>
                  Configure for top speed and massive storage with two slots for
                  GEN 4M.2 PCIe
                </li>
                <li>Up to 32GB of DDR4 3200 RAM</li>
              </ul>

              <h3 className="text-sm text-gray-500">
                SKU:{" "}
                <span className="font-semibold text-black">
                  NL45-0800WT240E27-3PK
                </span>
              </h3>
              <h3 className="text-sm text-gray-500 mb-3">
                Brand: <span className="font-semibold text-black">Apple</span>
              </h3>

              <h3 className="text-sm text-gray-600 font-semibold mb-1">
                Built for the Next Generation of Gaming
              </h3>

              <ul className="text-sm mb-3 text-gray-500 list-disc px-6">
                <li>
                  Superior gaming performance with 12th Gen Intel core processor
                </li>
                <li>Seamless multitasking with innovative new architecture</li>
                <li>
                  Matched cores to workload for enhanced efficiency and
                  performance
                </li>
              </ul>

              <hr className="border-t-0 border-b border-gray-300 my-5" />

              <div>
                <div className="flex items-center gap-1 justify-between">
                  <button className="border border-gray-400 px-3 py-2 rounded-full">
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <h2 className="border font-semibold border-gray-400 px-7 py-2 rounded-md">
                    5
                  </h2>
                  <button className="border border-gray-400 px-3 py-2 rounded-full">
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                  <button
                    // onClick={() => setDisplayCart(true)}
                    className="bg-blue-600 hover:bg-blue-700 transition-all px-3 lg:px-6 py-3 uppercase text-xs flex items-center gap-3 rounded-md text-white font-semibold border-none"
                  >
                    Add To Cart
                    <FontAwesomeIcon icon={faCartShopping} />
                  </button>
                  <button className="transition-all px-3 lg:px-6 py-3 uppercase text-xs flex items-center gap-3 rounded-md text-blue-600 hover:bg-blue-600 hover:text-white font-semibold border-blue-600 border-2">
                    Contact Supplier
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductDisplay