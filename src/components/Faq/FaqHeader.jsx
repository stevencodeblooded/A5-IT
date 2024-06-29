import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FaqHeader = () => {
  return (
    <div className="px-3 pt-52 pb-24 bg-gray-100">
      <section className="max-w-3xl mx-auto">
        <div>
          <div className="text-center flex flex-col gap-3">
            <p className="font-semibold text-gray-600">FAQ</p>
            <h2 className="text-4xl font-semibold text-gray-600">
              Looking for help?
            </h2>
            <p className="text-gray-500">
              Everything you need to know about{" "}
              <span className="font-semibold">A5 IT</span> and our billing.
              Can’t find the answer to a question you have?
            </p>
            <div className="relative md:w-2/3 md:mx-auto ">
              <input
                type="text"
                name="search"
                placeholder="Search for products"
                className="rounded-full border border-blue-700 px-10 py-4 focus:outline-none w-full mt-4 font-semibold text-gray-600"
              />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="absolute left-6 top-10 text-gray-600 mr-9"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FaqHeader