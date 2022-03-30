import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
margin: 0;
padding: 0;
outline: 0;
border: none;
box-sizing: border-box;
text-decoration: none;
font-family: 'Montserrat', sans-serif;
}
html {
  scroll-behavior: smooth;
}
body {
    background-color: #D7D7D7;
}
button {
    cursor: pointer;
}
svg:hover {
    opacity: 0.5;
    transform: scale(1.1);
}
`;
