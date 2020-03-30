import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import './App.scss';

// Redux
import { Provider } from 'react-redux';
import store from './redux/store';
import { SET_AUTHENTICATED } from './redux/types';
import { logoutUser, getUserData } from './redux/actions/userAction';

// Pages
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';

// Componetns
import Navbar from './components/Navbar';
import AuthRoute from './components/AuthRoute';

const token = localStorage.FBIdToken;

if (token) {
  const decodeToken = jwtDecode(token);
  console.log(decodeToken);
  if (decodeToken.exp * 1000 < Date.now()) {
    window.location.href = '/login';
    store.dispatch(logoutUser())
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common['Authorization'] = token; 
    store.dispatch(getUserData());
  }
}

class App extends React.Component {
  
  render() {
    return (
      <Provider store={store} >
        <Router>
          <div className="container">
            <Navbar />
            <Switch>
              <Route exact path="/" component={MainPage} />
              <AuthRoute exact path="/login" component={LoginPage} />
              <AuthRoute exact path="/signup" component={RegistrationPage} />
            </Switch> 
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
