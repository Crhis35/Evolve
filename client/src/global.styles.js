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

        /*
        0 - 600px:      Phone
        600 - 900px:    Tablet portrait
        900 - 1200px:   Tablet landscape
        [1200 - 1800] is where our normal styles apply
        1800px + :      Big desktop

        @mixin respond($breakpoint) {
            @if $breakpoint == phone {
              @media only screen and (max-width: 37.5em) {
                @content;
              } //600px
            }
            @if $breakpoint == tab-port {
              @media only screen and (max-width: 56.25em) {
                @content;
              } //900px
            }
            @if $breakpoint == tab-land {
              @media only screen and (max-width: 75em) {
                @content;
              } //1200px
            }
            @if $breakpoint == big-desktop {
              @media only screen and (min-width: 112.5em) {
                @content;
              } //1800
            }
          }

        */


        @media only screen and (max-width: 75em) { 
            font-size: 56.25%; //1 rem = 9px, 9/16 = 50%
        }
    
        @media only screen and (max-width: 56.25em) {
            font-size: 50%; //1 rem = 8px, 8/16 = 50%
        }
        
        @media only screen and (min-width: 112.5em) {
            font-size: 75%; //1rem = 12, 12/16
        }
    }

    body {
        font-family: 'Titillium Web', sans-serif;
        font-weight: 400;
        line-height: 1.6;
        box-sizing: border-box;
        padding: 0;
    
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
