import { Link } from "react-router-dom";
import networkSupplierLogo from "../assets/NetworkSupplierLogo.png";

const ForgotPassword = () => {
  return (
    <div className="px-3 py-6">
      <section className="max-w-6xl mx-auto">
        <div>
          <h3 className="w-fit">
            <Link to={"/"}>
              <img src={networkSupplierLogo} alt="networkSupplierLogo" />
            </Link>
          </h3>
          <div className="flex items-center justify-center min-h-screen">
            <div className="flex flex-col gap-5  max-w-xl mx-auto">
              <h3 className="text-4xl font-semibold text-center">
                Forgot Password?
              </h3>
              <p className="font-semibold text-gray-500 text-center">
                Don’t worry! Fill in your email address and we’ll send you a
                link to reset your password.
              </p>

              <form className="flex flex-col">
                <div className="flex flex-col gap-3 mb-8">
                  <label htmlFor="email" className="text-lg font-semibold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="e.g abc@gmail.com"
                    className="border px-3 py-2 rounded-full border-gray-400 focus:outline-none"
                  />
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 transition-all py-3 rounded-full text-white font-semibold border-none">
                  Send Email
                </button>
              </form>
              <Link
                to={"/login"}
                className="text-center hover:bg-blue-600 hover:text-white bg-white transition-all py-3 rounded-full text-blue-600 font-semibold border-none"
              >
                Back to login
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForgotPassword;
