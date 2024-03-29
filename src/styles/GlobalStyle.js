// css 초기화
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 ${reset}
  body {
    font-family: "Noto Sans KR", sans-serif;
    background-color:#F5F5F5;
    height:100vh;
  }
  a{text-decoration:none;}
  a:visited { color:black; }
`;

export default GlobalStyle;
