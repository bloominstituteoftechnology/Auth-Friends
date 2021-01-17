import './App.css';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

//components
import LoginForm from './components/LoginForm';
import Navbar from './components/Navbar';
import Home from './components/Home';
import FriendsList from './components/FriendsList';

function App() {
	return (
		<div className="App">
			<Navbar />

			<Switch>
				<PrivateRoute exact path="/friends" component={FriendsList} />
				<Route exact path="/login" component={LoginForm} />

				<Route path="/" component={Home} />
			</Switch>
		</div>
	);
}

export default App;
