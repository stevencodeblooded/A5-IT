import { Link } from 'react-router-dom'
import loginBg from '../assets/login-bg.jpg'
import NetworkSupplierLogo from "../assets/NetworkSupplierLogo.png";
import { FcGoogle } from "react-icons/fc";

const LoginScreen = () => {
  return (
    <div className="px-3 lg:px-0 py-8 lg:py-0">
      <div className="flex min-h-screen max-h-screen">
        <div className="hidden lg:w-2/5 lg:block relative ">
          <img src={loginBg} alt="login" />
          <div className='absolute top-0 left-0 text-white flex h-full items-center'>
            <div className='flex flex-col gap-6 px-10'>
                <h1 className="text-4xl lg:text-5xl font-semibold">
                All your hardware needs at one place.
                </h1>
                <p className='font-semibold'>
                More than 5,825,610 products available at A5 IT. Browse. Find.
                Shop.
                </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-3/5">
          <Link to={"/"}>
            <img
              src={NetworkSupplierLogo}
              alt=""
              className="block mx-auto pt-4 pb-12"
            />
          </Link>
          <h2 className="text-4xl font-semibold mb-3 text-center">
            Welcome Back
          </h2>
          <p className="text-gray-600  font-semibold text-center">
            Don't have an account?{" "}
            <Link to={'/signup'} className="text-blue-600">Sign up</Link>
          </p>
          <form className="flex flex-col gap-5 mt-12 md:w-3/4 mx-auto">
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="font-semibold">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter email address"
                className="p-2 border border-blue-200 rounded-md focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="font-semibold">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter password"
                className="p-2 border border-blue-200 rounded-md focus:outline-none"
              />
            </div>

            <button className=" text-right text-sm font-semibold mb-4">
              Forgot Password
            </button>

            <button className="bg-blue-600 mb-5 hover:bg-blue-700 transition-all py-3 rounded-full text-white font-semibold border-none">
              Login
            </button>

            <button className="hover:bg- transition-all flex items-center justify-center gap-2 py-3 rounded-full text-black font-semibold border-none">
              <FcGoogle className="text-2xl" />
              Log in with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen