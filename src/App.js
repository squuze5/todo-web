import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

// Pages
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';

// Componetns
import Navbar from './components/Navbar';

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <Router>
          <div className="container">
            <Navbar />
            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/signup" component={RegistrationPage} />
            </Switch> 
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
