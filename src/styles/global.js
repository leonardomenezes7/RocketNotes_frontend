import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    background: none;
    width: .8rem;
  }

  ::-webkit-scrollbar-thumb {
  background-color: ${({ theme }) => theme.colors.pink};
  border-radius: .8rem;
}

  :root {
    font-size: 62.5%;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background_900};
    font-family: "Roboto Slab", serif;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.white};
    -webkit-font-smoothing: antialiased;
  }

  button, input, textarea {
    font-family: "Roboto Slab", serif;
    font-size: 1.6rem;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.3s;
  }

  button:hover, a:hover {
    filter: brightness(0.8);
  }
`