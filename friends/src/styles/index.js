import styled, { createGlobalStyle, keyframes } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
${reset}
html{
    font-size: 62.5%
}
body {
  margin: 0;
  padding: 5% ;
  font-family: sans-serif;
  background: #DDA448;
  @import url('https://fonts.googleapis.com/css?family=Charmonman|Montserrat:300i');
}
`;
export const AppContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const Main = styled.main`
display: flex;
flex-flow: row wrap;
background: #1B998B;
justify-content: center;
align-items: center;
border-radius: 10px;
border: 2px solid black;
width: 650px;
padding: 5%;
`
export const Section = styled.section`
display: flex;
flex-flow: column nowrap;
justify-content: space-between;
align-items: center;
border: 2px dashed black;
background: #FFFAE8;
width: 275px;
margin: 2.5%;
border-radius: 5px;
opacity: ${props => props.selected ? '.5' : '1'};
`

export const H1 = styled.h1`
font-size: 3rem;
color: #BB342F;
text-align: center;
margin: 5% 0;
font-family: 'Charmonman', cursive;
font-weight: bold;
`
export const H2 = styled.h2`
font-size: 2rem;
color: black;
font-weight: bold;
font-family: 'Montserrat', sans-serif;
margin: 5%;
`
export const H3 = styled.h3`
font-size: 1.4rem;
color: black;
font-family: 'Montserrat', sans-serif;
margin: 1% 0 2.5%;
`
export const wiggle = keyframes`
0% { transform: rotate(2.5deg)
}

20% { transform: rotate(-2.5deg)
}
40% {
  transform: rotate(0deg)
}
60% { transform: rotate(2.5deg)
}

80% { transform: rotate(-2.5deg)
}
100% {
  transform: rotate(0deg)
}
`
export const Button = styled.button`
background: #BB342F;
color: white;
border: 2px solid black;
width: 40%;
padding: 2.5% 0;
border-radius: 5px;
margin: 5% 0;
:hover {
  animation: ${wiggle} .5s infinite;
}
`
