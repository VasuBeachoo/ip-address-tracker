import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

const GlobalStyle = styled.createGlobalStyle`
  :root {
    --Very-Dark-Gray: hsl(0, 0%, 17%);
    --Dark-Gray: hsl(0, 0%, 59%);
    --White: hsl(0, 0%, 100%);
  }

  * {
    box-sizing: border-box;
    font-family: "Rubik", sans-serif;
  }

  body {
    margin: 0;
  }
`;

export default GlobalStyle;
