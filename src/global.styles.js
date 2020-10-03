import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    html {
        box-sizing: border-box;
        font-size: 62.5%; // 1rem = 10px, 10px/16px = 62.5%

        @media only screen and (max-width: 68.75em) {
            font-size: 50%;
        }
    }

    body {
        font-family: 'Titillium Web', sans-serif;
        font-weight: 400;
        line-height: 1.6;
        min-height: 100vh;
    }
    a{
        text-decoration: none;
    }
    
    ul,li{
        border: 0 none;
        margin: 0;
        padding: 0;
        outline:none;
	    
    }
    ul li{
        list-style-type:none;
    }
`;
