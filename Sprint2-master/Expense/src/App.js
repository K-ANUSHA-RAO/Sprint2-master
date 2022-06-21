import React, {useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import LoginForm from './components/LoginForm/LoginForm';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import Home from './components/AboutUs/AboutUs';
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
import ViewAllList from './components/ViewAllList/ViewAllList';
import AboutUs from './components/AboutUs/AboutUs';
import ViewList1 from './components/ViewList/ViewList1';
class App extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="navbar-nav mr-auto">
          <a class="navbar-brand" href="#">Expense Reimbursement System</a>
            <li className="nav-item dark">
            <Link to={"/About Us"} className="nav-link dark">
                About Us
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
              <Link to={"/Manager Dashboard"} className="nav-link ">
              Manager Dashboard
              </Link>
            </li>
          </div>
        </nav>
        <Header/>
        <div className="container mt-3">
          <Switch>
          <Route exact path={"/About Us"} component={AboutUs} />
            <Route exact path={"/login"} component={LoginForm} />
            <Route exact path={"/register"} component={RegistrationForm} />
            <Route exact path={"/Employee Dashboard"} component={EmployeeDashboard} />
            <Route exact path={"/Reimbursement Form"} component={ReimbursementForm} />
            <Route exact path={"/Manager Dashboard"} component={ManagerDashboard} />
            <Route exact path={"/Accept And Reject Requests"} component={AcceptAndRejectRequests} />
            <Route exact path={"/View All List"} component={ViewAllList} />
            <Route exact path={"/View List"} component={ViewList1} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;