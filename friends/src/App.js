import React from 'react';
import './App.css';
import Routes from './utils/Routes';
import Header from "./Header";
import { Container } from 'semantic-ui-react';
import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <>
      <Header />
      <Container>
        <div className="App">
          <Routes />
        </div>
      </Container>
    </>
  );
}

export default App;
