import { FC, useState, useEffect } from "react";
import {
  Span,
  Contain,
  Loading,
  Paragraph,
  ChildLoader,
  ImgParagraph,
  LoaderWrapper,
  ImgParagraphTwo,
} from "./loader";
import { bgImgLoader, loader, rectangle } from "../../../assets";

const MyLoader: FC = () => {
  const [loading, setLoading] = useState(true);
  const arr = [""];
  // const arr2 = new Array(100).fill("");

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (arr.length < 100) {
  //       arr.push(arr2.map((item)=));
  //     } else {
  //       clearInterval(interval);
  //       setLoading(false);
  //     }
  //   }, 1);
  // }, []);

  return loading ? (
    <LoaderWrapper>
      <ChildLoader bgImgLoader={bgImgLoader}>
        <Paragraph>
          Welcome to the Magicsoft Era
          <ImgParagraph src={rectangle} alt="rectangle" />
          {""}
          <ImgParagraphTwo src={loader} alt="loader" />
          <Contain>
            <Loading>
              {arr.map((item, index) => (
                <Span key={index}>{item}</Span>
              ))}
            </Loading>{" "}
            % {arr.length}/100
          </Contain>
        </Paragraph>
      </ChildLoader>
    </LoaderWrapper>
  ) : null;
};

export default MyLoader;
