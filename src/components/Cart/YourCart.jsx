import { faCircleExclamation, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import bulb from "../../assets/bulb.png";
import paymentSuccess from '../../assets/paymentSuccess.jpg'
import { useState } from "react";

const YourCart = () => {
  const [successPayment, setSuccessPayment] = useState(false);
  
  return (
    <div className="">
      {successPayment && (
        <div
          onClick={() => setSuccessPayment(false)}
          className="fixed z-50 w-screen inset-0 bg-black bg-opacity-50 min-h-screen flex items-center"
        >
          <div className=" flex items-center justify-center bg-white px-12 py-20 max-w-3xl mx-auto">
            <div className="grid grid-cols-3 gap-12">
              <div className="col-span-3 md:col-span-2">
                <div className="flex flex-col justify-between gap-6 text-center">
                  <h2 className="text-4xl font-semibold">Congratulations</h2>
                  <h4 className="text-lg font-semibold">
                    Your purchase was a success
                  </h4>
                  <p className="text-sm">
                    Thank you for entrusting your care to us. please be patient
                    as we process your items as quickly as possible
                  </p>
                  <div className="flex flex-col gap-4">
                    <Link
                      to={"/"}
                      className="bg-blue-600 text-center hover:bg-blue-700 transition-all px-6 py-3 rounded-full text-white font-semibold border-none"
                    >
                      Back to homepage
                    </Link>
                    <button onClick={() => setSuccessPayment(false)} className=" bg-gray-900 hover:bg-gray-950 transition-all px-6 py-3 rounded-full text-white font-semibold border-none">
                      Exit
                    </button>
                  </div>
                </div>
              </div>
              <div className="hidden md:block md:col-span-1">
                <img
                  src={paymentSuccess}
                  alt="payment success"
                  className="rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="px-3 pt-48">
        <section className="max-w-6xl mx-auto">
          <div className="flex gap-10 items-center mb-12">
            <div>
              <h1 className="text-black text-3xl font-semibold mb-2">
                Your Cart
              </h1>
              <p className=" font-light text-sm">
                These are items in your shopping cart. You can add or remove
                items from your cart.
              </p>
            </div>
            <Link
              to={"/shop"}
              className="px-6 py-2 rounded-full text-center font-semibold border border-blue-600 text-blue-600 hover:text-white hover:bg-blue-600 transition-all"
            >
              Continue Shopping
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row justify-between gap-5">
            <div className="lg:w-3/5">
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
                <div className="lg:w-2/3 flex gap-3">
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

            <div className="lg:w-1/3 bg-gray-100 rounded-lg p-4 flex flex-col gap-4">
              <h2 className="text-xl font-semibold">Promotional Code</h2>
              <div className="flex gap-2">
                <input
                  type="number"
                  name="code"
                  placeholder="Enter your code"
                  className="w-2/3 px-5 py-1 rounded-full outline-none bg-gray-300"
                />
                <button className="px-6 py-2 w-1/3 rounded-full font-semibold border bg-blue-600 text-white hover:bg-blue-700 transition-all">
                  Apply
                </button>
              </div>
              <div className="flex justify-between font-semibold text-sm">
                <h4>Overview</h4>
                <p>4 items</p>
              </div>

              <hr className="border-t-0 border-b border-gray-300" />

              <div className="text-sm text-gray-500 font-semibold flex flex-col gap-2">
                <div className="flex justify-between">
                  <h4>Subtotal</h4>
                  <p>$1527.00</p>
                </div>
                <div className="flex justify-between">
                  <h4>Tax</h4>
                  <p className="flex items-center gap-2">
                    Calculated at checkout{" "}
                    <FontAwesomeIcon icon={faCircleExclamation} />
                  </p>
                </div>
                <div className="flex justify-between">
                  <h4>Delivery Cost</h4>
                  <p>Free</p>
                </div>
              </div>

              <hr className="border-t-0 border-b border-gray-300" />

              <div className="flex items-center justify-between font-semibold">
                <h2>Order Total</h2>
                <p>$1527.00</p>
              </div>

              <hr className="border-t-0 border-b border-gray-300" />

              <button
                onClick={() => setSuccessPayment(true)}
                className="bg-blue-600 hover:bg-blue-700 transition-all px-6 py-3 rounded-full text-white font-semibold border-none"
              >
                Pay with Mpesa
              </button>
            </div>
          </div>

          <div className="text-center my-5">
            <button className="text-red-500 font-semibold text-sm">
              Remove All
            </button>
          </div>

          <hr className="border-t-0 border-b border-gray-300 my-10" />
        </section>
      </div>
    </div>
  );
}

export default YourCart