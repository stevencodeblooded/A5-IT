import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, NavLink } from "react-router-dom"
import NetworkSupplierLogo from '../assets/NetworkSupplierLogo.png'
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
  return (
    <div>
      <section className="fixed top-0 left-0 w-full z-20">
        <div className="hidden lg:block bg-indigo-950 px-3 py-4">
          <div className="hidden lg:flex gap-1 max-w-4xl text-gray-300 justify-between mx-auto">
            <p className='text-sm font-semibold '>Connect with A5 IT for comprehensive IT solutions tailored to your business needs.</p>
            <a href="tel:+1 (773) 766 - 5694" className='hover:text-white transition-all text-sm font-semibold'>
              <FontAwesomeIcon icon={faPhone} /> +1 (773) 766 - 5694
            </a>
            <a href="mailto:info@a5it.com" className='hover:text-white transition-all text-sm font-semibold'>
              <FontAwesomeIcon icon={faEnvelope} /> info@a5it.com
            </a>
          </div>
        </div>
        <div className="bg-white px-3 py-4 shadow-sm shadow-blue-300">
          <div className=' max-w-6xl mx-auto'>
            <nav className="flex items-center justify-between text-sm font-semibold">
              <Link to={'/'}>
                <img src={NetworkSupplierLogo} alt="" className="block" />
              </Link>
              <ul className="hidden lg:flex items-center gap-3">
                <li><NavLink to={'shop'} className={({ isActive }) => isActive ? 'px-6 py-3 rounded-full bg-blue-400 text-white' : 'px-6 py-3 rounded-full hover:bg-blue-400 transition-all hover:text-white'}>Shop</NavLink></li>
                <li><NavLink to={'brands'} className={({ isActive }) => isActive ? 'px-6 py-3 rounded-full bg-blue-400 text-white' : 'px-6 py-3 rounded-full hover:bg-blue-400 transition-all hover:text-white'}>Brands</NavLink></li>
                <li><NavLink to={'resources'} className={({ isActive }) => isActive ? 'px-6 py-3 rounded-full bg-blue-400 text-white' : 'px-6 py-3 rounded-full hover:bg-blue-400 transition-all hover:text-white'}>Resources</NavLink></li>
              </ul>
              <div className="hidden lg:flex items-center gap-6">
                <input type="text" name="products" placeholder="Search for products" className=" px-6 py-3 rounded-full bg-gray-100 focus:outline-none" />
                <Link to={'login'} className="text-blue-600 px-6 py-3 rounded-full hover:bg-blue-400 transition-all hover:text-white">Log in</Link>
                <Link to={'signup'} className="bg-blue-600 hover:bg-blue-700 transition-all px-6 py-3 rounded-full text-white font-semibold border-none">Sign up</Link>
              </div>
              <div className="flex items-center gap-12 lg:hidden">
                <input type="text" name="products" placeholder="Search for products" className="hidden sm:block px-6 py-3 rounded-full bg-gray-100 focus:outline-none" />
                <div className="relative">
                  <button className="flex justify-center items-center sm:hidden w-12 h-12 rounded-full bg-gray-100">
                    <FontAwesomeIcon icon={faSearch} className="text-lg text-blue-600" />        
                  </button>
                </div>
                <button>
                  <FontAwesomeIcon icon={faBars} className="text-blue-600 text-3xl"/>
                </button>
              </div>
            </nav>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Navbar