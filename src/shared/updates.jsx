import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";
import NetworkSupplierLogo from "../assets/NetworkSupplierLogo.png";
import {
  faBars,
  faTimes,
  faCartShopping,
  faMinus,
  faPlus,
  faSearch,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import bulb from "../assets/bulb.png";

const Navbar = () => {
  const [displayCart, setDisplayCart] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    if (isSearchOpen) {
      setShowSearch(true); // Mount the input to allow animation
    } else {
      const timeout = setTimeout(() => setShowSearch(false), 300); // Unmount after animation
      return () => clearTimeout(timeout);
    }
  }, [isSearchOpen]);

  return (
    <div className="relative">
      {/* Cart Container with Smooth Slide-In Animation */}
      <div
        className={`fixed z-50 w-screen inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          displayCart ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`fixed z-30 w-full md:w-2/3 lg:w-1/2 bg-white min-h-screen top-0 right-0 p-5 md:p-10 flex flex-col justify-between transform transition-transform duration-300 ${
            displayCart ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div>
            <div>
              <div className="flex items-start justify-between gap-3 mb-8">
                <div>
                  <h1 className="text-black text-3xl font-semibold mb-2">
                    Your Cart
                  </h1>
                  <p className=" font-light text-sm">
                    These are items in your shopping cart. You can add or remove
                    items from your cart.
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
                    <div className="flex flex-col sm:flex-row items-center gap-3">
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
          <div className="flex items-center gap-2 sm:gap-4">
            <Link
              to={"/shop"}
              onClick={() => setDisplayCart(false)}
              className="bg-black hover:bg-gray-700 text-center transition-all w-1/2 px-3 py-3 rounded-full text-white font-semibold border-none"
            >
              Continue Shopping
            </Link>
            <Link
              to={"/checkout"}
              onClick={() => setDisplayCart(false)}
              className="bg-blue-600 text-center hover:bg-blue-700 px-3 transition-all w-1/2 py-3 rounded-full text-white font-semibold border-none"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>

      <section className="fixed top-0 left-0 w-full z-20">
        <div className="hidden lg:block bg-indigo-950 px-3 py-4">
          <div className="hidden lg:flex gap-1 max-w-4xl text-gray-300 justify-between mx-auto">
            <p className="text-sm font-semibold ">
              Connect with A5 IT for comprehensive IT solutions tailored to your
              business needs.
            </p>
            <a
              href="tel:+1 (773) 766 - 5694"
              className="hover:text-white transition-all text-sm font-semibold"
            >
              <FontAwesomeIcon icon={faPhone} /> +1 (773) 766 - 5694
            </a>
            <a
              href="mailto:info@a5it.com"
              className="hover:text-white transition-all text-sm font-semibold"
            >
              <FontAwesomeIcon icon={faEnvelope} /> info@a5it.com
            </a>
          </div>
        </div>

        <div className="bg-white px-3 py-4 shadow-sm shadow-blue-300 relative">
          {/* Search Input Field Overlay */}
          {showSearch && (
            <>
              {/* Search Input Field with Smooth Slide-Down/Up Animation */}
              <div
                className={`fixed inset-x-0 top-0 z-50 px-4 py-6 bg-white shadow-md transition-transform duration-300 ease-in-out transform ${
                  isSearchOpen
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-full opacity-0"
                }`}
              >
                <div className="flex items-center gap-4">
                  <input
                    type="text"
                    placeholder="Search for products"
                    className="w-full px-4 py-2 rounded-full bg-gray-100 focus:outline-none"
                  />
                  <button onClick={() => setIsSearchOpen(false)}>
                    <FontAwesomeIcon
                      icon={faTimes}
                      className="text-2xl text-blue-600"
                    />
                  </button>
                </div>
              </div>

              {/* Overlay Background */}
              {isSearchOpen && (
                <div
                  className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ease-in-out ${
                    isSearchOpen
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  }`}
                  onClick={() => setIsSearchOpen(false)}
                />
              )}
            </>
          )}

          <div className="max-w-6xl mx-auto">
            <nav className="flex items-center justify-between text-sm font-semibold">
              <Link to={"/"}>
                <img src={NetworkSupplierLogo} alt="Logo" className="block" />
              </Link>

              {/* Desktop Navbar */}
              <ul className="hidden lg:flex items-center gap-3">
                {["shop", "brands", "resources"].map((item) => (
                  <li key={item}>
                    <NavLink
                      to={item}
                      className={({ isActive }) =>
                        isActive
                          ? "px-6 py-3 rounded-full bg-blue-400 text-white"
                          : "px-6 py-3 rounded-full hover:bg-blue-400 transition-all hover:text-white"
                      }
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </NavLink>
                  </li>
                ))}
              </ul>

              {/* Desktop Actions */}
              <div className="hidden lg:flex items-center gap-6">
                <div
                  className="relative cursor-pointer"
                  onClick={() => setDisplayCart(true)}
                >
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    className="text-3xl text-blue-500"
                  />
                  <p className="absolute bg-blue-500 py-1 px-2 text-white font-bold rounded-full -bottom-2 -right-3">
                    4
                  </p>
                </div>
                <input
                  type="text"
                  placeholder="Search for products"
                  className="px-6 py-3 rounded-full border-2 border-gray-200 focus:outline-none"
                  onFocus={() => {
                    setIsSearchOpen(true);
                  }}
                />
              </div>

              {/* Mobile Navbar */}
              <div
                className="block lg:hidden cursor-pointer"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <FontAwesomeIcon
                  icon={isMobileMenuOpen ? faTimes : faBars}
                  className="text-3xl text-blue-600"
                />
              </div>
            </nav>

            {/* Mobile Menu */}
            <div
              className={`absolute top-full left-0 w-full bg-white shadow-md transition-transform duration-300 ease-in-out ${
                isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
              }`}
            >
              <ul className="flex flex-col items-center">
                {["shop", "brands", "resources"].map((item) => (
                  <li key={item}>
                    <NavLink
                      to={item}
                      className={({ isActive }) =>
                        isActive
                          ? "px-6 py-3 rounded-full bg-blue-400 text-white"
                          : "px-6 py-3 rounded-full hover:bg-blue-400 transition-all hover:text-white"
                      }
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </NavLink>
                  </li>
                ))}
                <li className="mt-4">
                  <input
                    type="text"
                    placeholder="Search for products"
                    className="px-6 py-3 rounded-full border-2 border-gray-200 focus:outline-none"
                  />
                </li>
                <li className="mt-4">
                  <div
                    className="relative cursor-pointer"
                    onClick={() => setDisplayCart(true)}
                  >
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      className="text-3xl text-blue-500"
                    />
                    <p className="absolute bg-blue-500 py-1 px-2 text-white font-bold rounded-full -bottom-2 -right-3">
                      4
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
