import React, {useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import LoginForm from './components/LoginForm/LoginForm';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";  
import NavigationToAllPages from './components/NavigationToAllPages/NavigationToAllPages';
import EmployeeDashboard from './components/EmployeeDashboard/EmployeeDashboard';
import ReimbursementForm from './components/ReimbursementForm/ReimbursementForm';
import ManagerDashboard from './components/ManagerDashboard/ManagerDashboard';
function App() {
  const [title, updateTitle] = useState(null);
  const [updateErrorMessage] = useState(null);
  return (
    <Router>
    <div className="App">
      <Header title={title}/>
        <div className="container d-flex align-items-center flex-column">
          <Switch>
            <Route path="/" exact={true}>
              <NavigationToAllPages showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <Route path="/register">
              <RegistrationForm showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <Route path="/login">
              <LoginForm showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <Route path="/home">
              <Home showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <Route path="/employee dashboard">
              <EmployeeDashboard showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <Route path="/reimbursement form">
              <ReimbursementForm showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <Route path="/manager dashboard">
              <ManagerDashboard showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
          </Switch>
        </div>
    </div>
    </Router>
  );
}

export default App;
