import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
${reset}
html{
    font-size: 62.5%
}
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background: black;
  display: flex;
  justify-content: center;
}
`;
export const Main = styled.main`
display: flex;
flex-flow: row wrap;
background: teal;
justify-content: space-around;
align-items: center;
`
export const Section = styled.section`
display: flex;
flex-flow: column nowrap;
justify-content: center;
align-items: center;
border: 1px solid black;
`

export const H1 = styled.h1`
font-size: 3rem;
color:black;
`
export const H2 = styled.h2`
font-size: 2rem;
color: black;
font-weight: bold;
font-family: cursive;
`
export const H3 = styled.h3`
font-size: 1.4rem;
color:black
`
