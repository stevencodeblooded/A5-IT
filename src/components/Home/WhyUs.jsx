import { faHeadphonesSimple, faIndustry, faStarAndCrescent } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const WhyUs = () => {
  return (
    <div>
      <section className="max-w-6xl mx-auto">
        <div className="px-3">
          <div>
            <h2 className="text-3xl text-center mb-6 font-semibold">Why work with A5 IT?</h2>
            <p className="text-center font-semibold max-w-3xl mx-auto text-gray-600">
              A5 IT, a world-renowned network hardware supplier, is committed to catering to clients of various scales,
              encompassing resellers, system integrators, and end-users.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 py-20">
            <div className="flex flex-col items-center gap-5">
              <FontAwesomeIcon icon={faStarAndCrescent} className="mb-6 text-6xl text-blue-600 " />
              <h3 className="text-lg font-semibold">Expertise and Experience</h3>
              <p className="text-center text-sm font-semibold max-w-3xl mx-auto text-gray-600">
                Partner with A5 IT, a global network hardware
                supplier, for tailored solutions backed by
                unmatched industry expertise. Elevate your
                network infrastructure with confidence.
              </p>
            </div>
            <div className="flex flex-col items-center gap-5">
              <FontAwesomeIcon icon={faIndustry} className="mb-6 text-6xl text-blue-600 "  />
              <h3 className="text-lg font-semibold">Industry Leading Partnership</h3>
              <p className="text-center text-sm font-semibold max-w-3xl mx-auto text-gray-600">
                Choose A5 IT for more than products choose a
                dynamic partnership. Collaborate with industry
                leaders to stay ahead in an ever-evolving
                landscape. Success is our shared journey.
              </p>
            </div>
            <div className="flex flex-col items-center gap-5">
              <FontAwesomeIcon icon={faHeadphonesSimple} className="mb-6 text-6xl text-blue-600 "  />
              <h3 className="text-lg font-semibold">24/7 End to End Support</h3>
              <p className="text-center text-sm font-semibold max-w-3xl mx-auto text-gray-600">
                With A5 IT, support never sleeps. Enjoy peace of
                mind with 24/7 end-to-end support. Whether
                you're a reseller, integrator, or end-user, we've got
                your back, ensuring your network runs seamlessly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhyUs