import { Link } from 'react-router-dom'
import NetworkSupplierLogoFooter from '../assets/NetworkSupplierLogoFooter.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCcApplePay, faCcDiscover, faCcMastercard, faFacebook, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faCcPaypal } from '@fortawesome/free-brands-svg-icons/faCcPaypal'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div>
      <section className=" max-w-6xl mx-auto">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-20">
          <div className="flex flex-col gap-3 sm:items-center lg:items-start lg:w-5/12">
            <Link to={"/"} className="w-14">
              <img src={NetworkSupplierLogoFooter} alt="" className="w-full" />
            </Link>
            <p className="text-gray-300 sm:w-2/3 sm:text-center lg:w-full lg:text-start">
              With full-stack expertise, A5 IT helps you design, orchestrate and
              manage technologies that drive business success.
            </p>
            <div>
              <h3 className=" text-lg font-semibold text-white mb-2 sm:text-center lg:text-start">
                We Accept
              </h3>
              <div className="flex text-blue-300 gap-4 text-4xl">
                <FontAwesomeIcon
                  icon={faCcPaypal}
                  className="hover:text-white transition-all cursor-pointer"
                />
                <FontAwesomeIcon
                  icon={faCcDiscover}
                  className="hover:text-white transition-all cursor-pointer"
                />
                <FontAwesomeIcon
                  icon={faCcApplePay}
                  className="hover:text-white transition-all cursor-pointer"
                />
                <FontAwesomeIcon
                  icon={faCcMastercard}
                  className="hover:text-white transition-all cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:w-7/12">
            <div className="flex flex-col gap-2 lg:gap-5">
              <h3 className=" text-lg font-semibold text-white">About</h3>
              <ul className="text-gray-300 text-sm font-semibold flex flex-col gap-1 lg:gap-4">
                <li>
                  <Link
                    to={"/why-us"}
                    className="hover:text-white transition-all hover:underline"
                  >
                    Why Us?
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/about"}
                    className="hover:text-white transition-all hover:underline"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/insights"}
                    className="hover:text-white transition-all hover:underline"
                  >
                    Insights
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/brands"}
                    className="hover:text-white transition-all hover:underline"
                  >
                    Brands
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2  lg:gap-5">
              <h3 className=" text-lg font-semibold text-white ">Help</h3>
              <ul className="text-gray-300 text-sm font-semibold flex flex-col gap-1 lg:gap-4">
                <li>
                  <Link
                    to={"/contact"}
                    className="hover:text-white transition-all hover:underline"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/faq"}
                    className="hover:text-white transition-all hover:underline"
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/finder"}
                    className="hover:text-white transition-all hover:underline"
                  >
                    Product Finder
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/quote"}
                    className="hover:text-white transition-all hover:underline"
                  >
                    Get a Quote
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2  lg:gap-5">
              <h3 className=" text-lg font-semibold text-white">
                Important Links
              </h3>
              <ul className="text-gray-300 text-sm font-semibold flex flex-col gap-1 lg:gap-4">
                <li>
                  <Link
                    to={"/account/profile"}
                    className="hover:text-white transition-all hover:underline"
                  >
                    Account
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/blog"}
                    className="hover:text-white transition-all hover:underline"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/products"}
                    className="hover:text-white transition-all hover:underline"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/team"}
                    className="hover:text-white transition-all hover:underline"
                  >
                    Our Team
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-14">
          <hr className="mb-3" />
          <div className="flex flex-col gap-4 items-center lg:flex-row lg:justify-between">
            <div className="flex gap-6 justify-center text-2xl text-blue-300">
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-all"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-all"
              >
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-all"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
            <p className="text-xs font-semibold text-gray-300 text-center">
              {year} A5 IT All Rights Reserved 8231 Bay Colony Dr, #1401,
              Naples, Florida, 34108 United States
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer