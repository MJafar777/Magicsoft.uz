import Slider from "react-slick";

import {
  Title,
  SubTitle,
  FeedbackNumber,
  FeedbackWrapper,
  FeedbackContainer,
  LeadingBrandsBoxFeedback,
  FeedbackContainerWrapper,
} from "./FeedbackStyles";
import preIcon from "../../../../assets/about/pre.svg";
import FeedbackCard from "./FeedbackCard";
import PageSectionNumber from "../../../../components/pageSectionNumber/PageSectionNumber";
import { useRef } from "react";
import useLocales from "../../../../locales/useLocales";
import { ButtonsWrapper } from "../../../../components/about/sliderForAbout/LeadingBrandsSectionStyles";

import nextIcon from "../../../../assets/about/next.svg";

const Feedback = () => {
  const { translate } = useLocales();

  const sliderRef = useRef<Slider | null>(null);

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    className: "center",
    centerMode: false,
    speed: 1000,
    dots: true,
    infinite: true,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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

  return (
    <FeedbackContainerWrapper>
      <FeedbackWrapper>
        <FeedbackNumber>
          <PageSectionNumber fullPageNumber={12} currentPageNumber={"09"} />
        </FeedbackNumber>
        <Title>What our clients say</Title>
        <SubTitle>What our clients say</SubTitle>
        <FeedbackContainer>
          <LeadingBrandsBoxFeedback>
            <Slider ref={(c) => (sliderRef.current = c)} {...settings}>
              <FeedbackCard />
              <FeedbackCard />
              <FeedbackCard />
              <FeedbackCard />
              <FeedbackCard />
            </Slider>
            <ButtonsWrapper style={{ textAlign: "center", marginTop: "50px" }}>
              <button className="button" onClick={previous}>
                <img src={preIcon} alt="" />
              </button>
              <button className="button" onClick={next}>
                <img src={nextIcon} alt="" />
              </button>
            </ButtonsWrapper>
          </LeadingBrandsBoxFeedback>
        </FeedbackContainer>
      </FeedbackWrapper>
    </FeedbackContainerWrapper>
  );
};

export default Feedback;
