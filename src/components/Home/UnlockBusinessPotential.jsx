import { faCircleCheck } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import womanOnHeadphone from '../../assets/close-up-portrait-beautiful-teenager.jpg'
import photoMaking from '../../assets/photo-making.jpg'

const UnlockBusinessPotential = () => {
  return (
    <div className="py-16 px-3">
      <section className="max-w-6xl mx-auto">
        <div>
          <h2 className="text-3xl text-center mb-6 font-semibold">Unlock Your Business Potential with A5 IT</h2>
          <p className="text-center font-semibold max-w-3xl mx-auto text-gray-600">
            In today's dynamic market, finding a reliable IT partner is key to overcoming challenges and maximizing
            your business potential. At A5 IT, we are your go-to full-service technology solutions provider, offering
            deep industry expertise across various technology domains.
          </p>
        </div>
        <div className="py-20 px-3">
            <div className="flex flex-col gap-28">
              <div className="grid grid-cols-1 gap-12 lg:gap-20 md:grid-cols-2 items-center">
                <div className="flex flex-col gap-5">
                  <h2 className="text-3xl text-blue-600 mb-6 font-semibold">What Sets Us Apart?</h2>
                  <div className="flex gap-3 items-start">
                    <FontAwesomeIcon icon={faCircleCheck} className="text-blue-600"/>
                    <div>
                      <h2 className="text-lg font-semibold">Comprehensive Services:</h2>
                      <p className="text-sm font-light">From security to networking and storage, we cover it all.</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <FontAwesomeIcon icon={faCircleCheck} className="text-blue-600"/>
                    <div>
                      <h2 className="text-lg font-semibold">Expert Guidance:</h2>
                      <p className="text-sm font-light">Let our team assist you in choosing, deploying, and managing the right solutions tailored to your needs.</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <FontAwesomeIcon icon={faCircleCheck} className="text-blue-600"/>
                    <div>
                      <h2 className="text-lg font-semibold">Digital Transformation:</h2>
                      <p className="text-sm font-light">A5 IT specializes in elevating your business to a digital enterprise, exceeding traditional IT boundaries.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <img src={womanOnHeadphone} alt="woman listening to music" className="rounded-full" />
                </div>
              </div>
              <div>
                <div className="grid grid-cols-1 gap-12 lg:gap-20 md:grid-cols-2 items-center">
                  <div className="flex flex-col gap-5 md:order-2">
                    <h2 className="text-3xl text-blue-600 mb-6 font-semibold">Why choose A5IT?</h2>
                    <div className="flex gap-3 items-start">
                      <FontAwesomeIcon icon={faCircleCheck} className="text-blue-600"/>
                      <div>
                        <h2 className="text-lg font-semibold">End-to-End Solutions:</h2>
                        <p className="text-sm font-light">Seamlessly integrated solutions for optimized performance.</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <FontAwesomeIcon icon={faCircleCheck} className="text-blue-600"/>
                      <div>
                        <h2 className="text-lg font-semibold">Value Driven:</h2>
                        <p className="text-sm font-light">Get the most value from your technology investments.</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <FontAwesomeIcon icon={faCircleCheck} className="text-blue-600"/>
                      <div>
                        <h2 className="text-lg font-semibold">Mission-focused:</h2>
                        <p className="text-sm font-light">Our mission is your success.</p>
                      </div>
                    </div>
                  </div>
                  <div className=" md:order-1">
                    <img src={photoMaking} alt="woman listening to music" className="rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
    </div>
  )
}

export default UnlockBusinessPotential