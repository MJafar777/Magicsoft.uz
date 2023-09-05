import { FC, useEffect, useState } from "react";
import { ScrollTopWrapper, Img, BtnName } from "./scrollTop";
import { btnTop } from "../../../../assets";

const ScrollTop: FC = () => {
  const [, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ScrollTopWrapper onClick={goToTop}>
      <Img src={btnTop} alt={`this image not found ${btnTop}`} />
      <BtnName>BACK TO TOP</BtnName>
    </ScrollTopWrapper>
  );
};

export default ScrollTop;
