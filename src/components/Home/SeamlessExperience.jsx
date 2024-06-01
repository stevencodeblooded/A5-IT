import { faBuildingShield, faHeadset, faRibbon, faTruckArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SeamlessExperience = () => {
  return (
    <div  className="max-w-6xl mx-auto">
      <section className="py-20 px-3">
        <div>
          <h2 className="text-3xl max-w-xl mx-auto text-center mb-20 font-semibold">Seamless Experience Package: Shipping, Support, Returns, and Rewards</h2>
          <div className="grid grid-cols-1 gap-10 sm:gap-6 justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="flex flex-col gap-2 items-center sm:items-start">
              <div className="p-3 bg-blue-600 rounded-md text-5xl text-white w-fit">
                <FontAwesomeIcon icon={faTruckArrowRight} />
              </div>
              <h3 className="text-lg font-semibold">Free Shipping</h3>
              <p className="text-sm font-semibold text-gray-600 text-center sm:text-start">Nationwide delivery at no extra cost.</p>
            </div>
            <div className="flex flex-col gap-2 items-center sm:items-start">
              <div className="p-3 bg-blue-600 rounded-md text-5xl text-white w-fit">
                <FontAwesomeIcon icon={faHeadset} />
              </div>
              <h3 className="text-lg font-semibold">End-to-End Support</h3>
              <p className="text-sm font-semibold text-gray-600 text-center sm:text-start">Quick one-to-one assistance with our experts</p>
            </div>
            <div className="flex flex-col gap-2 items-center sm:items-start">
              <div className="p-3 bg-blue-600 rounded-md text-5xl text-white w-fit">
                <FontAwesomeIcon icon={faBuildingShield} />
              </div>
              <h3 className="text-lg font-semibold">Easy Refund Policy</h3>
              <p className="text-sm font-semibold text-gray-600 text-center sm:text-start">Hassle-free 30-day return policy</p>
            </div>
            <div className="flex flex-col gap-2 items-center sm:items-start">
              <div className="p-3 bg-blue-600 rounded-md text-5xl text-white w-fit">
                <FontAwesomeIcon icon={faRibbon} />
              </div>
              <h3 className="text-lg font-semibold">Exclusive Offers</h3>
              <p className="text-sm font-semibold text-gray-600 text-center sm:text-start">Enjoy exciting offers and hampers as our valued client</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SeamlessExperience