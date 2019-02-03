import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import './i18n';

import App from './App';
import * as serviceWorker from './serviceWorker';

const GlobalStyle = createGlobalStyle`

:root {
        --color-pink: #C44A7B;
        --color-yellow: #F3ED6A;
        --color-white: #fff;

        --color-grey-light: #faf9f9;
        --color-grey-dark: #333;
    }
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

        @media only screen and (max-width: 35em) {
            font-size: 50%;
        }
    }

    body {
        font-family: 'Franklin Gothic', sans-serif;
        font-weight: 400;
        line-height: 1.6;
        color: var(--color-grey-light-1);
    }

`;

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root')
);
serviceWorker.unregister();
