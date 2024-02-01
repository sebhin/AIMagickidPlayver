import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import './fonts/font.css';

// 2024-02-08 업데이트 v1 | globalStyle 업데이트 (복붙)
export const GlobalStyles = createGlobalStyle`
    ${reset}

    *{ box-sizing:border-box; font-family: 'NEXONLv1Gothic';}
    *::-webkit-scrollbar {width: 8px; border-radius: 10px;}
    *::-webkit-scrollbar-thumb {height: 30%;background: #134388; border-radius: 10px;}
    *::-webkit-scrollbar-track {background: rgba(33, 122, 244, .1); border-radius: 10px;}
    a{ text-decoration: none; color:initial;}
    body{ font-family: 'NEXONLv1Gothic'; letter-spacing: -1px; word-break: keep-all; color: initial; cursor: url('../../images/wand.svg'), auto !important; }
    img{ display:block; width:100%; }
    .inner{max-width:1248px; margin:0 auto; padding:0 20px}
    .tit{color:#111111; font-size:40px; font-weight:600;}
    .blue-bold{font-weight:bold; color:#134388;}
    .flex{display:flex; align-items:center; justify-content:space-between;}
    .btn{padding:10px; border-radius:4px;}
    body::-webkit-scrollbar {width: 8px;}
    body::-webkit-scrollbar-thumb {height: 30%;background: #134388; border-radius: 10px;}
    body::-webkit-scrollbar-track {background: rgba(33, 122, 244, .1); }

    :root{
        --bs-white: #ffffff;
        --bs-blue-primary: #134388;
        --bs-blue-hovered: #0c3064;
        --bs-blue-secondary: #518AD7;
        --bs-font-color: #111111;
        --bs-text-sub: #929292;
        --is-border: 1px solid #dddddd;
        --bs-bg-blue: #EEF3FE;
        --bs-bg-blue-light: #F7F8FA;
        --bs-nav-on: #CDE1FF;
    }
    @media screen and (min-width: 1023px) and (max-width: 1366px) {
        .inner{width:90%;padding:initial;}
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) {
        .inner{width:90%;padding:initial;}
    }

`;
