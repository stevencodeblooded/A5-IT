import { Link } from "react-router-dom";

const Order = () => {
  return (
    <div>
      <section>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="border-2 rounded-lg p-5 hover:border-blue-800 transition-all flex justify-between gap-8">
            <div className="flex flex-col gap-1">
              <h4 className="text-sm font-semibold text-gray-400">Quantity:5</h4>
              <h2 className="font-semibold text-gray-500">#O-ID-123456</h2>
              <h1 className="font-semibold">Subtotal: $1527.00</h1>
              <Link to={"details/1"} className="text-blue-400 font-semibold hover:text-blue-700 transition-all">View Details</Link>
            </div>
            <h1 className="text-2xl font-semibold text-blue-700">$1527.00</h1>
          </div>
          <div className="border-2 rounded-lg p-5 hover:border-blue-800 transition-all flex justify-between gap-8">
            <div className="flex flex-col gap-1">
              <h4 className="text-sm font-semibold text-gray-400">Quantity:5</h4>
              <h2 className="font-semibold text-gray-500">#O-ID-123456</h2>
              <h1 className="font-semibold">Subtotal: $1527.00</h1>
              <Link to={"details/2"} className="text-blue-400 font-semibold hover:text-blue-700 transition-all">View Details</Link>
            </div>
            <h1 className="text-2xl font-semibold text-blue-700">$999.99</h1>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Order