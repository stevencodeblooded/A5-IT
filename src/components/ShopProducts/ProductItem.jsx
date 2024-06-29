import { faCartShopping, faHeart, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import product from '../../assets/bulb.png'
import { Link } from "react-router-dom";

const ProductItem = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
        <div>
          <div className="bg-gray-100 hover:bg-gray-200 px-6 pt-4 pb-7 rounded-xl flex flex-col gap-3 ">
            <div className="flex items-center justify-between">
              <p className="bg-red-500 text-xs text-white font-semibold px-3 py-1 rounded-full">
                Sale
              </p>
              <button>
                <FontAwesomeIcon icon={faHeart} className="text-gray-500" />
              </button>
            </div>
            <Link to={"/product/1"}>
              <img
                src={product}
                alt="product display"
                className="justify-center w-48 mx-auto cursor-pointer"
              />
            </Link>
          </div>
          <div className="flex flex-col gap-1">
            <Link to={"/product/1"} className="hover:text-blue-900 transition-all">
              <p className="font-semibold text-sm">
                5GB Uncompressed/15GB Compressed 3570 MAG STAR MP 8MM{" "}
              </p>
            </Link>
            <h3 className="text-blue-600 text-xl font-semibold">
              $123.21{" "}
              <span className="text-sm text-gray-400 line-through">
                $155.21
              </span>
            </h3>
            <div>
              <div className="flex items-center gap-1 justify-between">
                <button className="border border-gray-400 px-3 py-1 rounded-md">
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <h2 className="border font-semibold border-gray-400 px-7 py-1 rounded-md">
                  5
                </h2>
                <button className="border border-gray-400 px-3 py-1 rounded-md">
                  <FontAwesomeIcon icon={faPlus} />
                </button>
                <button
                  className="bg-blue-600 hover:bg-blue-700 transition-all px-6 py-2 uppercase text-xs flex items-center gap-2 rounded-md text-white font-semibold border-none"
                >
                  Add <FontAwesomeIcon icon={faCartShopping} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-gray-100 hover:bg-gray-200 px-6 pt-4 pb-7 rounded-xl flex flex-col gap-3 ">
            <div className="flex items-center justify-between">
              <p className="bg-red-500 text-xs text-white font-semibold px-3 py-1 rounded-full">
                Sale
              </p>
              <button>
                <FontAwesomeIcon icon={faHeart} className="text-gray-500" />
              </button>
            </div>
            <img
              src={product}
              alt="product display"
              className="justify-center w-48 mx-auto"
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-semibold text-sm">
              5GB Uncompressed/15GB Compressed 3570 MAG STAR MP 8MM{" "}
            </p>
            <h3 className="text-blue-600 text-xl font-semibold">
              $123.21{" "}
              <span className="text-sm text-gray-400 line-through">
                $155.21
              </span>
            </h3>
            <div>
              <div className="flex items-center gap-1 justify-between">
                <button className="border border-gray-400 px-3 py-1 rounded-md">
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <h2 className="border font-semibold border-gray-400 px-7 py-1 rounded-md">
                  5
                </h2>
                <button className="border border-gray-400 px-3 py-1 rounded-md">
                  <FontAwesomeIcon icon={faPlus} />
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 transition-all px-6 py-2 uppercase text-xs flex items-center gap-2 rounded-md text-white font-semibold border-none">
                  Add <FontAwesomeIcon icon={faCartShopping} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-gray-100 hover:bg-gray-200 px-6 pt-4 pb-7 rounded-xl flex flex-col gap-3 ">
            <div className="flex items-center justify-between">
              <p className="bg-red-500 text-xs text-white font-semibold px-3 py-1 rounded-full">
                Sale
              </p>
              <button>
                <FontAwesomeIcon icon={faHeart} className="text-gray-500" />
              </button>
            </div>
            <img
              src={product}
              alt="product display"
              className="justify-center w-48 mx-auto"
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-semibold text-sm">
              5GB Uncompressed/15GB Compressed 3570 MAG STAR MP 8MM{" "}
            </p>
            <h3 className="text-blue-600 text-xl font-semibold">
              $123.21{" "}
              <span className="text-sm text-gray-400 line-through">
                $155.21
              </span>
            </h3>
            <div>
              <div className="flex items-center gap-1 justify-between">
                <button className="border border-gray-400 px-3 py-1 rounded-md">
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <h2 className="border font-semibold border-gray-400 px-7 py-1 rounded-md">
                  5
                </h2>
                <button className="border border-gray-400 px-3 py-1 rounded-md">
                  <FontAwesomeIcon icon={faPlus} />
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 transition-all px-6 py-2 uppercase text-xs flex items-center gap-2 rounded-md text-white font-semibold border-none">
                  Add <FontAwesomeIcon icon={faCartShopping} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-gray-100 hover:bg-gray-200 px-6 pt-4 pb-7 rounded-xl flex flex-col gap-3 ">
            <div className="flex items-center justify-between">
              <p className="bg-red-500 text-xs text-white font-semibold px-3 py-1 rounded-full">
                Sale
              </p>
              <button>
                <FontAwesomeIcon icon={faHeart} className="text-gray-500" />
              </button>
            </div>
            <img
              src={product}
              alt="product display"
              className="justify-center w-48 mx-auto"
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-semibold text-sm">
              5GB Uncompressed/15GB Compressed 3570 MAG STAR MP 8MM{" "}
            </p>
            <h3 className="text-blue-600 text-xl font-semibold">
              $123.21{" "}
              <span className="text-sm text-gray-400 line-through">
                $155.21
              </span>
            </h3>
            <div>
              <div className="flex items-center gap-1 justify-between">
                <button className="border border-gray-400 px-3 py-1 rounded-md">
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <h2 className="border font-semibold border-gray-400 px-7 py-1 rounded-md">
                  5
                </h2>
                <button className="border border-gray-400 px-3 py-1 rounded-md">
                  <FontAwesomeIcon icon={faPlus} />
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 transition-all px-6 py-2 uppercase text-xs flex items-center gap-2 rounded-md text-white font-semibold border-none">
                  Add <FontAwesomeIcon icon={faCartShopping} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-b-2 border-b-gray-300 pb-2 mt-10 border-0" />
    </div>
  );
}

export default ProductItem