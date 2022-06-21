import React, {useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import LoginForm from './components/LoginForm/LoginForm';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";  
//import NavigationToAllPages from './components/NavigationToAllPages/NavigationToAllPages';
import EmployeeDashboard from './components/EmployeeDashboard/EmployeeDashboard';
import ReimbursementForm from './components/ReimbursementForm/ReimbursementForm';
import ManagerDashboard from './components/ManagerDashboard/ManagerDashboard';
import AcceptAndRejectRequests from './components/AcceptAndRejectRequests/AcceptAndRejectRequests';
class App extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="navbar-nav mr-auto">
            <li className="nav-item dark">
            <Link to={"/Home"} className="nav-link dark">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/register"} className="nav-link ">
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/Employee Dashboard"} className="nav-link ">
                Employee Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/Reimbursement Form"} className="nav-link ">
              Reimbursement Form
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/Manager Dashboard"} className="nav-link ">
              Manager Dashboard
              </Link>
            </li>
          </div>
        </nav>
        <Header/>
        <div className="container mt-3">
          <Switch>
          <Route exact path={"/home"} component={Home} />
            <Route exact path={"/login"} component={LoginForm} />
            <Route exact path={"/register"} component={RegistrationForm} />
            <Route exact path={"/Employee Dashboard"} component={EmployeeDashboard} />
            <Route exact path={"/Reimbursement Form"} component={ReimbursementForm} />
            <Route exact path={"/Manager Dashboard"} component={ManagerDashboard} />
            <Route exact path={"/Accept And Reject Requests"} component={AcceptAndRejectRequests} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;