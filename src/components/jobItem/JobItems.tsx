import React from "react";
import { JobItemWrapper } from "./JobItemStyles";
import { jobItemIcon } from "../../assets/images";

interface JobItemsProps {
  text: string;
  top: string;
  right: string;
  bottom: string;
  left: string;
}

const JobItems: React.FC<JobItemsProps> = ({
  text,
  top,
  right,
  bottom,
  left,
}) => {
  return (
    <JobItemWrapper top={top} left={left} right={right} bottom={bottom}>
      <img src={jobItemIcon} alt="icon" />
      <p>{text}</p>
    </JobItemWrapper>
  );
};

export default JobItems;
