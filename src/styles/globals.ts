import { createGlobalStyle } from "styled-components";

import Concretica from "../assets/fonts/font/Concretica.ttf";
import ArchivoRegular from "../assets/fonts/Archivo/static/Archivo-Regular.ttf";
import MazzardHMedium from "../assets/fonts/Mazzard/MazzardH-Medium.ttf";
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
@font-face {
  font-family: "Archivo-Regular";
  src: url(${ArchivoRegular}) format("truetype");
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    /* font-family: "Arial", "Times-new-roman"; */

  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: #0B0B0E ;
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
