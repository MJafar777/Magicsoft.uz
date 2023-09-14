import Slider from "react-slick";
import React, { ReactNode, useRef } from "react";
import preIcon from "../../../assets/about/pre.svg";
import nextIcon from "../../../assets/about/next.svg";
import { ButtonsWrapper } from "./LeadingBrandsSectionStyles";
interface SliderProps {
  children: ReactNode;
}

const SliderAutoPlay: React.FC<SliderProps> = ({ children }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderRef = useRef<Slider | null>(null);

  const next = () => {
    console.log("dfghjk");
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    console.log("dfghjk");

    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div>
      <Slider  ref={(c) => (sliderRef.current = c)}  {...settings}>{children}</Slider>
      <ButtonsWrapper style={{ textAlign: "center", marginTop: "50px" }}>
        <button className="button" onClick={previous}>
        <img src={preIcon} alt="" />
        </button>
        <button className="button" onClick={next}>
          <img src={nextIcon} alt="" />
        </button>
      </ButtonsWrapper>
    </div>
  );
};

export default SliderAutoPlay;
