const NewAddress = () => {
  return (
    <div>
      <section>
        <h2 className="text-xl font-semibold mb-4">Addresses</h2>
        <div className="md:w-3/4">
          <form className="font-semibold text-sm flex flex-col gap-5">
            <div>
              <label htmlFor="location">Location Title</label>
              <input
                type="text"
                name="location"
                id="location"
                className="p-2 border w-full border-blue-200 rounded-md focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="country">Country/Region</label>
              <select
                name="country"
                id="country"
                className="p-2 border w-full border-blue-200 rounded-md focus:outline-none"
              >
                <option value="kenya">Kenya</option>
                <option value="ethiopia">Ethiopia</option>
                <option value="uganda">Uganda</option>
                <option value="tanzania">Tanzania</option>
              </select>
            </div>
            <div>
              <h3>Street Address</h3>
              <div className="flex gap-3">
                <input
                  type="text"
                  name="houseAddress"
                  id="houseAddress"
                  className="p-2 border w-full border-blue-200 rounded-md focus:outline-none"
                />
                <input
                  type="text"
                  name="apartment"
                  id="apartment"
                  className="p-2 border w-full border-blue-200 rounded-md focus:outline-none"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex flex-col w-1/2">
                <label htmlFor="town">Town/City</label>
                <input
                  type="text"
                  name="town"
                  id="town"
                  className="p-2 border w-full border-blue-200 rounded-md focus:outline-none"
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label htmlFor="state">State</label>
                <input
                  type="text"
                  name="state"
                  id="state"
                  className="p-2 border w-full border-blue-200 rounded-md focus:outline-none"
                />
              </div>
            </div>
            <div className="w-1/2">
              <label htmlFor="zipcode">Zip Code</label>
              <input
                type="number"
                name="state"
                id="state"
                className="p-2 border w-full border-blue-200 rounded-md focus:outline-none"
              />
            </div>

            <hr className="border-t-0 border-b border-gray-300 mt-7 w-full" />

            <button className="bg-blue-600 hover:bg-blue-700 transition-all px-6 py-3 rounded-full text-white font-semibold border-none">
              Save Address
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default NewAddress