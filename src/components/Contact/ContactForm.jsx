import contact from "../../assets/contact.png";

const ContactForm = () => {
  return (
    <div className="pt-24 pb-32 px-3">
      <section className="max-w-6xl mx-auto text-center">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 text-left">
          <img
            src={contact}
            alt="contact photo"
            className="rounded-xl w-full h-full object-cover"
          />
          <div>
            <form className="flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <label htmlFor="fname" className="font-semibold">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  className="border px-3 py-2 rounded-md border-gray-400 focus:outline-none"
                  placeholder="Enter your name"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="border px-3 py-2 rounded-md border-gray-400 focus:outline-none"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="message" className="font-semibold">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Enter your message"
                  className="border px-3 py-2 rounded-md border-gray-400 focus:outline-none"
                  rows={"5"}
                ></textarea>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" name="opt-in" id="opt-in" />
                <label htmlFor="opt-in" className="font-semibold">
                  I opt-in to receive marketing and promotional materials.
                </label>
              </div>
              <button className="text-center w-full bg-blue-600 hover:bg-blue-700 text-white transition-all py-3 rounded-full font-semibold border-none">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
