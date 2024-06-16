import { Link } from "react-router-dom";

const Address = () => {
  return (
    <div>
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Addresses</h2>
          <Link
            to={"/account/new-address"}
            className="bg-blue-600 hover:bg-blue-700 text-sm transition-all px-6 py-3 rounded-full text-white font-semibold border-none"
          >
            Add new address
          </Link>
        </div>
        <div className="md:w-3/4 flex flex-col sm:flex-row gap-3">
          <div className="border-2 rounded-lg p-5 hover:border-blue-800 transition-all">
            <div className="flex justify-between mb-3">
              <h3 className="font-semibold">Work</h3>
              <p className="px-3 py-1 bg-blue-600 text-white text-xs rounded-full w-fit">
                Default
              </p>
            </div>
            <p className="text-xs mb-2">
              123 Main Street, Anytown, California, 12345, United States
            </p>
            <button className="text-blue-600 capitalize text-sm font-semibold">
              edit address
            </button>
          </div>

          <div className="border-2 rounded-lg p-5 hover:border-blue-800 transition-all">
            <div className="flex justify-between mb-3">
              <h3 className="font-semibold">Work</h3>
            </div>
            <p className="text-xs mb-2">
              123 Main Street, Anytown, California, 12345, United States
            </p>
            <button className="text-blue-600 capitalize text-sm font-semibold">
              edit address
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Address