import React from "react";
import { PageSectionNumberWrapper } from "./PageSectionNumberStyles";

interface PageSectionNumberProps {
  fullPageNumber: number;
  currentPageNumber: string;
}

const PageSectionNumber: React.FC<PageSectionNumberProps> = ({
  fullPageNumber,
  currentPageNumber,
}) => {
  return (
    <PageSectionNumberWrapper>
      <span></span>
      <p>{currentPageNumber}</p>
      <h4>/</h4>
      <p>{fullPageNumber}</p>
    </PageSectionNumberWrapper>
  );
};

export default PageSectionNumber;
