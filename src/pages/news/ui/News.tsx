import { FC } from "react";
import { NewsWrapper } from "./news";
import Navbar from "../../../layouts/navbar/Navbar";

interface Props {}

const News: FC<Props> = () => {
  return (
    <NewsWrapper>
      <Navbar />
    </NewsWrapper>
  );
};

export default News;
