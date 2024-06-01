import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import product from "../../assets/cable.png";

const SavedItems = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
      <div>
        <div className="bg-gray-100 hover:bg-gray-200 px-6 pt-4 pb-7 mb-1 rounded-xl flex flex-col gap-3 ">
          <div className="flex items-center justify-between">
            <p className="bg-red-500 text-xs text-white font-semibold px-3 py-1 rounded-full">
              Sale
            </p>
            <FontAwesomeIcon icon={faHeart} className="text-blue-600 cursor-pointer" />
          </div>
          <img
            src={product}
            alt="product display"
            className="justify-center w-48 mx-auto cursor-pointer"
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-semibold text-sm">
            5GB Uncompressed/15GB Compressed 3570 MAG STAR MP 8MM{" "}
          </p>
          <h3 className="text-blue-600 text-xl font-semibold">
            $123.21{" "}
            <span className="text-sm text-gray-400 line-through">$155.21</span>
          </h3>
        </div>
      </div>
      <div>
        <div className="bg-gray-100 hover:bg-gray-200 px-6 pt-4 pb-7 mb-1 rounded-xl flex flex-col gap-3 ">
          <div className="flex items-center justify-between">
            <p className="bg-red-500 text-xs text-white font-semibold px-3 py-1 rounded-full">
              Sale
            </p>
            <FontAwesomeIcon icon={faHeart} className="text-blue-600" />
          </div>
          <img
            src={product}
            alt="product display"
            className="justify-center w-48 mx-auto cursor-pointer"
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-semibold text-sm">
            5GB Uncompressed/15GB Compressed 3570 MAG STAR MP 8MM{" "}
          </p>
          <h3 className="text-blue-600 text-xl font-semibold">
            $123.21{" "}
            <span className="text-sm text-gray-400 line-through">$155.21</span>
          </h3>
        </div>
      </div>
      <div>
        <div className="bg-gray-100 hover:bg-gray-200 px-6 pt-4 pb-7 mb-1 rounded-xl flex flex-col gap-3 ">
          <div className="flex items-center justify-between">
            <p className="bg-red-500 text-xs text-white font-semibold px-3 py-1 rounded-full">
              Sale
            </p>
            <FontAwesomeIcon icon={faHeart} className="text-blue-600" />
          </div>
          <img
            src={product}
            alt="product display"
            className="justify-center w-48 mx-auto cursor-pointer"
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-semibold text-sm">
            5GB Uncompressed/15GB Compressed 3570 MAG STAR MP 8MM{" "}
          </p>
          <h3 className="text-blue-600 text-xl font-semibold">
            $123.21{" "}
            <span className="text-sm text-gray-400 line-through">$155.21</span>
          </h3>
        </div>
      </div>
      <div>
        <div className="bg-gray-100 hover:bg-gray-200 px-6 pt-4 pb-7 mb-1 rounded-xl flex flex-col gap-3 ">
          <div className="flex items-center justify-between">
            <p className="bg-red-500 text-xs text-white font-semibold px-3 py-1 rounded-full">
              Sale
            </p>
            <FontAwesomeIcon icon={faHeart} className="text-blue-600" />
          </div>
          <img
            src={product}
            alt="product display"
            className="justify-center w-48 mx-auto cursor-pointer"
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-semibold text-sm">
            5GB Uncompressed/15GB Compressed 3570 MAG STAR MP 8MM{" "}
          </p>
          <h3 className="text-blue-600 text-xl font-semibold">
            $123.21{" "}
            <span className="text-sm text-gray-400 line-through">$155.21</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SavedItems;
