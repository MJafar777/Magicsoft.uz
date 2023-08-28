import React from "react";
import {
  OverViewTitle,
  OverViewWraper,
  TextOfOverView,
} from "./OverViewStyles";

const OverView = () => {
  return (
    <OverViewWraper>
      <div>
        <OverViewTitle>Overview</OverViewTitle>
        <TextOfOverView>
          Our end-to-end travel software solutions, built around the industry’s
          technology needs, help drive business innovation. We specialize in
          providing end-to-end travel management software development services
          to spur Digital Transformation for our clients and help them deliver
          seamless, personalized, and differentiated customer experiences. We
          assist travel businesses in creating new engagement models to keep up
          with the customers’ growing expectations in a digitally connected
          world while balancing costs. Our solutions aid travel companies in
          scaling limitlessly, reinventing services, and achieving a customer
          experience vision, from touchpoints to journeys.
        </TextOfOverView>
      </div>
    </OverViewWraper>
  );
};

export default OverView;
