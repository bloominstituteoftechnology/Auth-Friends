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
`;
export const Div = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border: ${(props) => (props.main ? '2px solid black' : 'none')};
	background: #1b998b;
	border-radius: 10px;
	margin: 2.5%;
`;

export const Main = styled.main`
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	align-items: center;
	width: 650px;
	padding: 0 5% 5%;
	margin-bottom: 10%;
`;
export const Section = styled.section`
	display: flex;
	flex-flow: column nowrap;
	justify-content: space-between;
	align-items: center;
	border: 2px dashed black;
	background: #fffae8;
	width: 275px;
	margin: 2.5%;
	border-radius: 5px;
	:hover {
		opacity: 0.5;
		cursor: pointer;
	}
`;

export const H1 = styled.h1`
	font-size: 4rem;
	color: #bb342f;
	text-align: center;
	margin: 5% 0 1%;
	font-family: 'Charmonman', cursive;
	font-weight: bold;
`;
export const H2 = styled.h2`
	font-size: 2rem;
	color: black;
	font-weight: bold;
	font-family: 'Montserrat', sans-serif;
	margin: 5%;
`;
export const H3 = styled.h3`
	font-size: 1.4rem;
	color: black;
	font-family: 'Montserrat', sans-serif;
	margin: 1% 0 2.5%;
	font-weight: bold;
	display: ${(props) => (props.mode === 'Add Friend' ? 'none' : null)};
	:hover {
		cursor: ${(props) => (props.mode === 'Update' ? 'pointer' : null)};
		font-size: ${(props) => (props.mode === 'Update' ? '1.6rem' : null)};
	}
`;

export const P = styled.p`
	color: black;
	font-family: 'Charmonman', cursive;
	font-size: 2.4rem;
	color: #fffae8;
	padding: 5%;
`;
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
`;
export const Button = styled.button`
	background: #bb342f;
	color: white;
	border: 2px solid black;
	width: 40%;
	padding: 2.5% 0;
	border-radius: 5px;
	margin: 5% 0;
	:hover {
		animation: ${wiggle} 0.5s infinite;
		cursor: pointer;
	}
`;
export const Form = styled.form`
	width: ${(props) => (props.mode === 'Add Friend' ? '200px' : '37%')};
	display: flex;
	flex-flow: column nowrap;
	background: ${(props) => (props.mode === 'Update' ? '#DDA448' : '#1B998B')};
	padding: 2.5%;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	margin: 2.5%;
	border: ${(props) =>
		props.mode === 'Add Friend' ? '2px solid black' : '2px dashed black'};
`;

export const Input = styled.input`
	border: 1px solid black;
	border-radius: 5px;
	padding: 5%;
	margin: 5% 0;
	width: 80%;
	text-align: center;
	:focus {
		outline: none;
	}
`;
