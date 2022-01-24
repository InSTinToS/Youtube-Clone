import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    font-family: 'Roboto', sans-serif;
  }
  
  html {
    font-size: 62.5%;
    

    body {
      font-size: 1.4rem;
      
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.secondary};
  }
  
  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      list-style-type: none;
    }
  }

  button {
    cursor: pointer;
    
    border: none;
    background-color: transparent;
  }

  input[type="checkbox"] {
    &, &:focus, &:hover {
      box-shadow: initial;
    }
  }
`
