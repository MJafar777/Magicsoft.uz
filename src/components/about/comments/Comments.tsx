import Slider from "react-slick";
import CommentCard from "./CommentCard";
import {
  CommentContainer,
  CommentsWrapper,
  LeadingBrandsBoxComment,
  SubTitle,
  Title,
} from "./CommentStyles";

const Comments = () => {
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
    <CommentsWrapper>
      <Title>What our clients say</Title>
      <SubTitle>What our clients say</SubTitle>
      <CommentContainer>
        <LeadingBrandsBoxComment>
          <Slider {...settings}>
            <CommentCard />
            <CommentCard />
            <CommentCard />
            <CommentCard />
            <CommentCard />
          </Slider>
        </LeadingBrandsBoxComment>
      </CommentContainer>
    </CommentsWrapper>
  );
};

export default Comments;
