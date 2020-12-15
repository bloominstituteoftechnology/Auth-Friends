import NavBar from './Components/NavBar';
import Login from './Components/Login';
import { BrowserRouter as Router} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Login/>
      </div>
    </Router>
  );
}

export default App;
