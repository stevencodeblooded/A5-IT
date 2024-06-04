import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const sliderRef = useRef(null);

  const images = [
    "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    "https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (oldIndex, newIndex) => setCurrentImage(newIndex),
  };

  const handleImageClick = (index) => {
    setCurrentImage(index);
    sliderRef.current.slickGoTo(index);
  };

  const handlePrevClick = () => {
    const newIndex = currentImage === 0 ? images.length - 1 : currentImage - 1;
    setCurrentImage(newIndex);
    sliderRef.current.slickGoTo(newIndex);
  };

  const handleNextClick = () => {
    const newIndex = (currentImage + 1) % images.length;
    setCurrentImage(newIndex);
    sliderRef.current.slickGoTo(newIndex);
  };

  return (
    <div className="flex flex-col gap-20">
      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} className="w-full" />
          </div>
        ))}
      </Slider>
      <div className="flex justify-center items-center ">
        <button
          onClick={handlePrevClick}
          className="bg-gray-400 hover:bg-gray-700 transition-all text-white p-2 rounded-full font-bold h-10 w-10 cursor-pointer z-10"
        >
          &lt;
        </button>
        <div className="flex justify-center mx-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index}`}
              className={`w-16 h-16 m-1 cursor-pointer border-2 ${
                index === currentImage
                  ? "border-blue-500 p-2 rounded-md"
                  : "border-transparent"
              }`}
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
        <button
          onClick={handleNextClick}
          className="bg-gray-400 hover:bg-gray-700 transition-all text-white p-2 rounded-full font-bold h-10 w-10 cursor-pointer z-10"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;
