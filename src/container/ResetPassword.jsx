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
          <div className=" my-24">
            <div className=" max-w-2xl mx-auto">
              <div className="flex flex-col gap-5">
                <h3 className="text-4xl mb-10 font-semibold text-center">
                  Reset Password?
                </h3>
                <form className="flex flex-col">
                  <div className="flex flex-col gap-3 mb-8">
                    <label htmlFor="password" className="text-lg font-semibold">
                      New Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="e.g abc@gmail.com"
                      className="border px-3 py-2 rounded-full border-gray-400 focus:outline-none"
                    />
                    <p className="text-sm font-semibold text-gray-500">
                      Your new password must be at least 8 characters, 1 number
                      and 1 special character{" "}
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 mb-8">
                    <label htmlFor="password" className="text-lg font-semibold">
                      Re-enter Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="e.g abc@gmail.com"
                      className="border px-3 py-2 rounded-full border-gray-400 focus:outline-none"
                    />
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 transition-all py-3 rounded-full text-white font-semibold border-none">
                    Save
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForgotPassword;
