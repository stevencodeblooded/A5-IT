import { faCartShopping, faHeart, faMinus, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import product from '../../assets/bulb.png'
import { useState } from "react";
import bulb from '../../assets/bulb.png'
import { Link } from "react-router-dom";

const ProductItem = () => {
  const [displayCart, setDisplayCart] = useState(false);
  return (
    <div className="relative">
      {displayCart && (
        <div
          className="fixed z-20 w-screen inset-0 bg-black bg-opacity-50"
          // onClick={() => setDisplayCart(false)}
        >
          <div className="fixed z-30 w-1/2 bg-white min-h-screen top-0 right-0 p-10 flex flex-col justify-between">
            <div>
              <div>
                <div className="flex items-start justify-between gap-3 mb-8">
                  <div>
                    <h1 className="text-black text-3xl font-semibold mb-2">
                      Your Cart
                    </h1>
                    <p className=" font-light text-sm">
                      These are items in your shopping cart. You can add or
                      remove items from your cart.
                    </p>
                  </div>
                  <FontAwesomeIcon
                    icon={faXmark}
                    className="text-3xl cursor-pointer"
                    onClick={() => setDisplayCart(false)}
                  />
                </div>

                <div>
                  <div className="font-semibold flex items-center ">
                    <h3 className="w-1/2">Product</h3>
                    <div className="w-1/2 flex items-center justify-between">
                      <h3>Price</h3>
                      <h3>Quantity</h3>
                      <h3>Subtotal</h3>
                    </div>
                  </div>

                  <hr className="border-t-0 border-b border-gray-300 my-5" />

                  <div className="font-semibold flex items-center ">
                    <div className="w-1/2 flex gap-3">
                      <img
                        src={bulb}
                        alt="product"
                        className="w-12 border p-1 rounded-2xl hover:border-black transition-all"
                      />
                      <div className="text-xs font-semibold">
                        <p className="mb-2">
                          5GB Uncompressed/15GB Compressed 3570 MAG STAR MP 8MM
                        </p>
                        <button className="text-red-500">Remove</button>
                      </div>
                    </div>
                    <div className="w-1/2  flex items-center justify-between text-sm text-gray-500">
                      <h3>$1527.00</h3>
                      <div className="flex items-center gap-3">
                        <button>
                          <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <p className="border rounded-lg px-4 py-1">12</p>
                        <button>
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                      </div>
                      <h3>$1527.00</h3>
                    </div>
                  </div>

                  <hr className="border-t-0 border-b border-gray-300 my-5" />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setDisplayCart(false)}
                className="bg-black hover:bg-gray-700 transition-all w-1/2 py-3 rounded-full text-white font-semibold border-none"
              >
                Continue Shopping
              </button>
              <Link
                to={"/cart"}
                className="bg-blue-600 text-center hover:bg-blue-700 transition-all w-1/2 py-3 rounded-full text-white font-semibold border-none"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      )}

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
                  onClick={() => setDisplayCart(true)}
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