import { Link } from "react-router-dom";
import networkSupplierLogo from "../assets/NetworkSupplierLogo.png";
import notFound from '../assets/notFound.jpg'

const NotFound = () => {
  return (
    <div className="px-3 py-8">
      <section className="max-w-6xl mx-auto">
        <div>
          <h3 className="w-fit">
            <Link to={"/"}>
              <img src={networkSupplierLogo} alt="networkSupplierLogo" />
            </Link>
          </h3>
          <div className=" max-w-md mx-auto">
            <img src={notFound} alt="404" className="w-72 mx-auto" />
            <div className="flex flex-col gap-5 mt-5">
              <h3 className="text-4xl font-semibold text-center uppercase text-gray-500">
                This page does not exist!
              </h3>
              <Link
                to={"/"}
                className="bg-blue-600 hover:bg-blue-700 text-center transition-all py-3 rounded-full text-white font-semibold border-none"
              >
                Go Back Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NotFound