import Marquee from "react-fast-marquee"
import hilton from '../../assets/hilton.png'
import nbci from '../../assets/nbci.png'
import trump from '../../assets/Trump.png'
import spacex from '../../assets/spacex.png'
import pbs from '../../assets/pbs.png'
import paypal from '../../assets/paypal.png'
import xbox from '../../assets/xbox.png'
import playstation from '../../assets/playstation.png'

const TrustedClients = () => {
  return (
    <div>
      <section className="bg-gray-200">
        <div className="py-20">
          <h2 className="text-3xl text-center mb-20 font-semibold">Our Trusted Clients</h2>
          <div className=" space-y-12">
            <div>
              <Marquee pauseOnHover autoFill>
                <img src={hilton} alt="" className="px-8 py-3 bg-white shadow-lg w-64 h-32 mx-4 rounded-md" />
                <img src={nbci} alt="" className="px-8 py-3 bg-white shadow-lg  w-64 h-28 mx-4 rounded-md" />
                <img src={trump} alt="" className="px-8 py-3 bg-white shadow-lg  w-64 h-28 mx-4 rounded-md" />
                <img src={spacex} alt="" className="px-8 py-3 bg-white shadow-lg  w-64 h-28 mx-4 rounded-md" />
              </Marquee>
            </div>
            <div>
              <Marquee pauseOnHover autoFill direction="right">
                <img src={pbs} alt="" className="px-8 py-3 bg-white shadow-lg w-64 h-32 mx-4 rounded-md" />
                <img src={paypal} alt="" className="px-8 py-3 bg-white shadow-lg  w-64 h-28 mx-4 rounded-md" />
                <img src={xbox} alt="" className="px-8 py-3 bg-white shadow-lg  w-64 h-28 mx-4 rounded-md" />
                <img src={playstation} alt="" className="px-8 py-3 bg-white shadow-lg  w-64 h-28 mx-4 rounded-md" />
              </Marquee>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TrustedClients