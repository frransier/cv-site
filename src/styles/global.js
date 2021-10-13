import css from "styled-jsx/css";
import theme from "./theme";

export default css.global`
  html {
    overflow-y: scroll;
  }
  body {
    font-family: "Poppins", sans-serif;
    color: ${theme.colors.text};
    font-size: 10px;
  }
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  input,
  ul {
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }
  ul,
  li {
    list-style: none;
  }
`;
