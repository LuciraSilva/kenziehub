import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     outline: 0;
     border: 0;
     list-style: none;
     font-family: monospace;
 }
 :root {
     --blue: #1A74DD;
 }
 h2 {
     font-size: 2rem;
 }
 label {
     display: none;
 }
 input {
     padding: 0.5rem;
 }`;
