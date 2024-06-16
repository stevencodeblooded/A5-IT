import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";

const PaymentMethod = () => {
  return (
    <div>
      <section>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-5">
            <h2 className="text-xl font-semibold">Payment Methods</h2>
            <button className="bg-blue-600 hover:bg-blue-700 text-sm transition-all px-6 py-3 rounded-full text-white font-semibold border-none">
              Add new payment
            </button>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="border-2 rounded-lg p-5 hover:border-blue-800 transition-all">
              <div>
                <h2 className="font-semibold mb-3">Payment Method</h2>
                <div className="flex items-center justify-between gap-4">
                  <RiVisaLine className="text-5xl text-blue-700" />
                  <div className="font-semibold text-gray-500">
                    <p>1234 **** **** **96</p>
                    <p className="text-xs text-gray-500">Exp Date: 06/2028</p>
                    <p className="flex items-center gap-2 mt-2 text-sm">
                      <FontAwesomeIcon icon={faMailBulk} className="text-lg" />
                      example@email.com
                    </p>
                  </div>
                  <button className="font-semibold text-gray-600 hover:underline">
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>

          <hr className="border my-5" />

          <div>
            <h2 className="text-xl font-semibold mb-5">Billing History</h2>

            <table className="flex flex-wrap gap-5 items-center justify-between border-2 rounded-xl p-4">
              <td className="flex flex-col gap-5 items-center">
                <th className="text-lg font-semibold">Invoice</th>
                <tr className="text-sm">INV-120138</tr>
                <tr className="text-sm">INV-120138</tr>
              </td>
              <td className="flex flex-col gap-5 items-center">
                <th className="text-lg font-semibold">Amount</th>
                <tr className="text-sm">$250.00</tr>
                <tr className="text-sm">$250.00</tr>
              </td>
              <td className="flex flex-col gap-5 items-center">
                <th className="text-lg font-semibold">Date</th>
                <tr className="text-sm">Aug 27, 2023</tr>
                <tr className="text-sm">Aug 27, 2023</tr>
              </td>
              <td className="flex flex-col gap-5 items-center">
                <th className="text-lg font-semibold">Status</th>
                <tr className="text-sm px-3 py-1 bg-green-200 rounded-full text-green-800 font-semibold">
                  Paid
                </tr>
                <tr className="text-sm px-3 py-1 bg-orange-200 rounded-full text-orange-800 font-semibold">
                  Processing
                </tr>
              </td>
              <td className="flex flex-col gap-5 items-center">
                <th className="text-lg font-semibold">Actions</th>
                <tr className="text-4xl text-green-600 cursor-pointer">
                  <FaCloudDownloadAlt />
                </tr>
                <tr className="text-4xl text-green-600 cursor-pointer">
                  <FaCloudDownloadAlt />
                </tr>
              </td>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaymentMethod;
