import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

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
    <div className="max-w-6xl mx-auto rounded-full">
      <Slider {...settings}>
        <div className="min-h-screen px-3 py-72 flex items-center">
          <div className="flex flex-col gap-12">
            <h1 className="w-full sm:w-2/3 lg:w-1/2 text-4xl leading-snug font-semibold">
              Fulfilling all your Hardware, Software and Service Needs at your
              finger tips
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
        <div>
          <div className="min-h-screen px-3 py-72 flex items-center">
            <div className="flex flex-col gap-12">
              <h1 className="w-full sm:w-2/3 lg:w-1/2 text-4xl leading-snug font-semibold">
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
        <div className="min-h-screen px-3 py-72 flex items-center">
          <div className="flex flex-col gap-12">
            <h1 className="w-full sm:w-2/3 lg:w-1/2 text-4xl leading-snug font-semibold">
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
        <div className="min-h-screen px-3 py-72 flex items-center">
          <div className="flex flex-col gap-12">
            <h1 className="w-full sm:w-2/3 lg:w-1/2 text-4xl leading-snug font-semibold">
              Delivering Cutting-Edge Technology with Unmatched Efficiency and
              Reliability.
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
      </Slider>
    </div>
  );
}

export default Hero