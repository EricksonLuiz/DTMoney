import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :focus{
      outline: 0;
    }

    body{
      background-image: linear-gradient(to top, #202024, #242429);
      color: ${(props) => props.theme["gray-100"]};
      -webkit-font-smothing: antialiased;
    }

    body, input, textarea, button{
      font: 400 1rem Vazirmatn, sans-serif;
    }

    
  `;
