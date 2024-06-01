import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneVolume,
  faEnvelopeOpenText,
} from "@fortawesome/free-solid-svg-icons";

const LetsHelp = () => {
  return (
    <div className="px-3 pt-32 pb-10 bg-indigo-950 text-white">
      <section className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="w-full md:w-1/2">
            <div className="flex flex-col gap-4">
              <h3 className="text-3xl font-semibold">
                Let our specialists help you!
              </h3>
              <p className="text-gray-300 font-semibold">
                For general questions, contact us at{" "}
              </p>
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faPhoneVolume} className="text-xl" />
                <a
                  href="tel:+1 (773) 786 - 5694"
                  className="underline text-gray-400 hover:text-white transition-all"
                >
                  +1 (773) 786 - 5694
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faEnvelopeOpenText}
                  className="text-xl"
                />
                <a
                  href="mailto:info@15it.com"
                  className="underline text-gray-400 hover:text-white transition-all"
                >
                  info@15it.com
                </a>
              </div>
            </div>
            <p className="mt-14 text-gray-300 font-semibold md:w-3/4">
              or fill in the form and our team will quickly get in contact with
              you.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <form className="flex flex-col gap-3">
              <div className="flex gap-2 w-full">
                <div className="flex flex-col gap-1 w-1/2">
                  <label htmlFor="fname" className="font-semibold mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="fname"
                    id="fname"
                    className="border border-white bg-transparent px-3 py-2 rounded focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-1 w-1/2">
                  <label htmlFor="lname" className="font-semibold mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lname"
                    id="lname"
                    className="border border-white bg-transparent px-3 py-2 rounded focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="font-semibold mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={"4"}
                  className="border border-white bg-transparent px-3 py-2 rounded focus:outline-none"
                ></textarea>
              </div>
              <button className="bg-blue-600 mt-2 text-center hover:bg-blue-700 transition-all py-3 rounded-full text-white font-semibold border-none">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div>
          <hr className="border-t mt-20 border-t-white" />
        </div>
      </section>
    </div>
  );
};

export default LetsHelp;
