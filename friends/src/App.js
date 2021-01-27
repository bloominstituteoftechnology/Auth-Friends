import { Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute"
import FriendList from "./components/FriendList"
import { axiosAuth } from "./axios/axios"
function App() {

  const logout = () => {
    axiosAuth()
      .post('/logout')
      .then(res=>{
        localStorage.removeItem('token');
        window.location.href =  '/login';
      })
      .catch(err=>{
        console.log(err);
      })
  };









  return (
    
      <>


      
      <Link to="./login">Login</Link>
      <Link onClick={logout}>Logout</Link>
      <li>{
              (localStorage.getItem('token') && <Link to="/protected">Protected Page</Link>)
            }
          </li>
          <li>{
              (localStorage.getItem('token') && <Link to="/protected/user">Protected User Page</Link>)
            }
          </li>
          




      <Switch>
          <PrivateRoute exact path = "/protected" component={FriendList}/>
          {/* <PrivateRoute exact path ="protected/user" component={CreateUser}/> */}
          {/* <PrivateRoute exact path ="protected/user" component={UpdateUser}/> */}
          {/* <PrivateRoute exact path ="protected/user" component={DeleteUser}/> */}

          <Route path="/login" component={Login} />
          <Route component={Login} />
          <Route path="/protected/user" component={FriendList} />
        </Switch>
        
        
    </>
  );
}

export default App;
