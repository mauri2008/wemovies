import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: #2f2e40;
        font-family: 'Open Sans', sans-serif;
    }

    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
    }
    
`;
