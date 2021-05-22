import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     outline: 0;
     border: 0;
     list-style: none;

 }
 :root {
     --blue: #1A74DD;
 }
 label {
     display: none;
 }
 input {
     padding: 0.5rem;
 }`;
