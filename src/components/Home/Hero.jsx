import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import hero from "../../assets/hero4.png";
import hero2 from "../../assets/hero1.png";
import hero3 from "../../assets/hero2.png";

const Hero = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <div className="max-w-6xl px-3 xl:px-0 mx-auto rounded-full">
      <Slider {...settings}>
        <div className="min-h-screen relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={hero}
              alt="VR headset and headphones"
              className="object-cover w-full h-full opacity-50"
            />
          </div>
          <div className="relative z-10 min-h-screen flex items-center justify-center">
            <div className="max-w-6xl mx-auto w-full">
              <div className="flex flex-col items-start justify-center min-h-screen">
                <div className="flex flex-col gap-12 md:w-2/3 lg:w-1/2">
                  <h1 className="text-4xl lg:mt-48 leading-snug font-semibold text-gray-800">
                    Fulfilling all your Hardware, Software and Service Needs at
                    your finger tips
                  </h1>
                  <div className="flex flex-col gap-3 items-start sm:flex-row sm:items-center sm:gap-5">
                    <Link
                      to="/contact"
                      className="bg-blue-600 hover:bg-blue-700 transition-all w-full px-7 py-3 rounded-full text-center sm:text-start sm:w-fit text-white font-semibold border-none"
                    >
                      Request a quote
                    </Link>
                    <Link
                      to="/resources"
                      className="bg-gray-600 hover:bg-blue-700 transition-all px-7 py-3 rounded-full w-full text-white text-center sm:text-start sm:w-fit font-semibold border-none"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="min-h-screen relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={hero2}
              alt="VR headset and headphones"
              className="object-cover w-full h-full opacity-50"
            />
          </div>
          <div className="relative z-10 min-h-screen flex items-center justify-center">
            <div className="max-w-6xl mx-auto w-full">
              <div className="flex flex-col items-start justify-center min-h-screen">
                <div className="flex flex-col gap-12 md:w-2/3 lg:w-1/2">
                  <h1 className="text-4xl lg:mt-48 leading-snug font-semibold text-gray-800">
                    Expert Support and Solutions Tailored to Your Business
                    Requirements.
                  </h1>
                  <div className="flex flex-col gap-3 items-start sm:flex-row sm:items-center sm:gap-5">
                    <Link
                      to="/contact"
                      className="bg-blue-600 hover:bg-blue-700 transition-all w-full px-7 py-3 rounded-full text-center sm:text-start sm:w-fit text-white font-semibold border-none"
                    >
                      Request a quote
                    </Link>
                    <Link
                      to="/resources"
                      className="bg-gray-600 hover:bg-blue-700 transition-all px-7 py-3 rounded-full w-full text-white text-center sm:text-start sm:w-fit font-semibold border-none"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="min-h-screen relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={hero3}
              alt="VR headset and headphones"
              className="object-cover w-full h-full opacity-50"
            />
          </div>
          <div className="relative z-10 min-h-screen flex items-center justify-center">
            <div className="max-w-6xl mx-auto w-full">
              <div className="flex flex-col items-start justify-center min-h-screen">
                <div className="flex flex-col gap-12 md:w-2/3 lg:w-1/2">
                  <h1 className="text-4xl lg:mt-48 leading-snug font-semibold text-gray-800">
                    Seamless Integration and Maintenance for Your Entire Network
                    Infrastructure.
                  </h1>
                  <div className="flex flex-col gap-3 items-start sm:flex-row sm:items-center sm:gap-5">
                    <Link
                      to="/contact"
                      className="bg-blue-600 hover:bg-blue-700 transition-all w-full px-7 py-3 rounded-full text-center sm:text-start sm:w-fit text-white font-semibold border-none"
                    >
                      Request a quote
                    </Link>
                    <Link
                      to="/resources"
                      className="bg-gray-600 hover:bg-blue-700 transition-all px-7 py-3 rounded-full w-full text-white text-center sm:text-start sm:w-fit font-semibold border-none"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
