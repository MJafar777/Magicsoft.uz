import { createGlobalStyle } from "styled-components";

import MazzardHMedium from "../assets/fonts/Mazzard/MazzardH-Medium.ttf";
import Concretica from "../assets/fonts/font/Concretica.ttf";
import MazzardHRegular from "../assets/fonts/Mazzard/MazzardH-Regular.ttf";
import MazzardMRegular from "../assets/fonts/Mazzard/MazzardM-Regular.ttf";
import MazzardMSemiBold from "../assets/fonts/Mazzard/MazzardM-SemiBold.ttf";
import MazzardMMedium from "../assets/fonts/Mazzard/MazzardM-Medium.ttf";
const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: "MazzardH-Regular";
  src: url(${MazzardHRegular}) format("truetype");
}

@font-face {
  font-family: "MazzardM-Regular";
  src: url(${MazzardMRegular}) format("truetype");
}

@font-face {
  font-family: "MazzardM-SemiBold";
  src: url(${MazzardMSemiBold}) format("truetype");
}

@font-face {
  font-family: "MazzardM-Medium";
  src: url(${MazzardMMedium}) format("truetype");
}

@font-face {
  font-family: "MazzardH-Medium";
  src: url(${MazzardHMedium}) format("truetype");
        
}

@font-face {
  font-family: "Concretica";
  src: url(${Concretica}) format("truetype");
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Arial", "Times-new-roman";
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: #000;
    font-size: 1.6rem;
    cursor: default;
  }

  a {
    text-decoration: none;
  }
  
  li{
    list-style: none;
  }
`;

export default GlobalStyles;
