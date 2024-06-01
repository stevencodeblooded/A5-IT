import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import hilton from "../../assets/hilton.png";
import nbci from "../../assets/nbci.png";
import trump from "../../assets/Trump.png";
import spacex from "../../assets/spacex.png";
import pbs from "../../assets/pbs.png";
import paypal from "../../assets/paypal.png";
import xbox from "../../assets/xbox.png";
import playstation from "../../assets/playstation.png";
import amazon from '../../assets/amazon.png'
import hp from '../../assets/hp.png'
import intel from '../../assets/intel.png'
import tesla from '../../assets/tesla.png'

const FeaturedBrands = () => {
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };
  return (
    <div className="px-3 py-28">
      <section className="max-w-6xl mx-auto">
        <h2 className="text-black text-3xl font-semibold mb-10">
          Featured Brands
        </h2>
        <Slider {...settings}>
          <div>
            <img src={hilton} alt="" className="w-20 h-20" />
          </div>
          <div>
            <img src={nbci} alt="" className="w-20 h-20" />
          </div>
          <div>
            <img src={trump} alt="" className="w-20 h-20" />
          </div>
          <div>
            <img src={spacex} alt="" className="w-20 h-20" />
          </div>
          <div>
            <img src={pbs} alt="" className="w-20 h-20" />
          </div>
          <div>
            <img src={paypal} alt="" className="w-20 h-20" />
          </div>
          <div>
            <img src={xbox} alt="" className="w-20 h-20" />
          </div>
          <div>
            <img src={playstation} alt="" className="w-20 h-20" />
          </div>
          <div>
            <img src={amazon} alt="" className="w-20 h-20" />
          </div>
          <div>
            <img src={hp} alt="" className="w-20 h-20" />
          </div>
          <div>
            <img src={intel} alt="" className="w-20 h-20" />
          </div>
          <div>
            <img src={tesla} alt="" className="w-20 h-20" />
          </div>
        </Slider>
      </section>
    </div>
  );
};

export default FeaturedBrands;
