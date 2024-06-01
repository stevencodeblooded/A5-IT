import newsletterImg from '../../assets/newsletter.png'

const Intro = () => {
  return (
    <div className="px-3 pt-52">
      <section className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-16 md:flex-row">
          <div className="bg-purple-400 md:w-2/5">
            <img src={newsletterImg} alt="" className="pt-10 pl-8" />
          </div>
          <div className="md:w-3/5">
            <p className="font-semibold text-xs">Newsletter</p>
            <h2 className=" text-3xl font-semibold leading-snug">
              Sign up for A5 IT’s Newsletter! Insights, inspiration, and
              exclusive offers.
            </h2>
            <p className="text-sm text-gray-500">
              Sign up for letters from A5 IT, a monthly newsletter + insights
              and conversation where we work on bringing you offers and insights
            </p>
            <div className="flex flex-col gap-3 mt-6">
              <input
                type="email"
                name="email"
                className="px-5 py-3 rounded-full border border-gray-300 outline-none"
              />
              <button className="md:w-fit bg-blue-600 hover:bg-blue-700 transition-all px-8 py-3 rounded-full text-white font-semibold border-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Intro