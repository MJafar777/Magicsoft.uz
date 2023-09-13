import Slider from "react-slick";

import {
  FeedbackContainer,
  FeedbackNumber,
  FeedbackWrapper,
  LeadingBrandsBoxFeedback,
  SubTitle,
  Title,
} from "./FeedbackStyles";
import FeedbackCard from "./FeedbackCard";
import PageSectionNumber from "../../../../components/pageSectionNumber/PageSectionNumber";

const Feedback = () => {
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
    <FeedbackWrapper>
      <FeedbackNumber>
        <PageSectionNumber fullPageNumber={12} currentPageNumber={"09"} />
      </FeedbackNumber>
      <Title>What our clients say</Title>
      <SubTitle>What our clients say</SubTitle>
      <FeedbackContainer>
        <LeadingBrandsBoxFeedback>
          <Slider {...settings}>
            <FeedbackCard />
            <FeedbackCard />
            <FeedbackCard />
            <FeedbackCard />
            <FeedbackCard />
          </Slider>
        </LeadingBrandsBoxFeedback>
      </FeedbackContainer>
    </FeedbackWrapper>
  );
};

export default Feedback;
