import { FC, useContext, useEffect, useState } from "react";
import { ScrollTopWrapper, Img, BtnName } from "./scrollTop";
import { btnTop } from "../../../../assets";
import { ButtonContext } from "../../../../context/ButtonContext";

const ScrollTop: FC = () => {
  const [, setIsVisible] = useState(false);
  const { goToTop } = useContext(ButtonContext);

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

  return (
    <ScrollTopWrapper onClick={goToTop}>
      <Img src={btnTop} alt={`this image not found ${btnTop}`} />
      <BtnName>BACK TO TOP</BtnName>
    </ScrollTopWrapper>
  );
};

export default ScrollTop;
