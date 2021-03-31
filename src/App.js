import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './NoMatch/NoMatch';

import Destination from './components/Destination/Destination';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import NavbarMenu from './components/NavbarMenu/NavbarMenu';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

      <Router >
        <NavbarMenu></NavbarMenu>
        <Switch>
          <Route path="/home"><Home></Home></Route>
          <Route exact path="/"><Home></Home></Route>
          <Route path="/login"><Login></Login></Route>
          <PrivateRoute path="/destination/:id"> <Destination></Destination> </PrivateRoute>
          <Route path="*"><NoMatch></NoMatch></Route>

        </Switch>

      </Router>
    </UserContext.Provider>
  );
}

export default App;
