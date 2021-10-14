import css from "styled-jsx/css";
import theme from "./theme";

export default css.global`
  html {
    overflow-y: scroll;
  }
  body {
    font-family: "Poppins", sans-serif;
    color: ${theme.colors.text};
    font-size: 14px;
  }
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  input,
  ul {
    margin: 4;
    padding: 0;
    line-height: 2;
  }
  a {
    text-decoration: underline;
    color: blue;
    cursor: pointer;
  }
  ul,
  li {
    list-style: none;
  }
`;
