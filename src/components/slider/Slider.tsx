import React, { ReactNode } from "react";
import Slider from "react-slick";

interface SliderProps {
  children: ReactNode;
}

const SliderAutoPlay: React.FC<SliderProps> = ({ children }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };

  return (
    <div>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default SliderAutoPlay;
