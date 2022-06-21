import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";  
import ReimbursementForm from '../ReimbursementForm/ReimbursementForm';
class EmployeeDashboard extends React.Component {
    render(){
    return(
       
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="navbar-nav mr-auto">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <li className="nav-item dark">
            <Link to={"/ReimbursementForm"} className="nav-link dark">
            Reimbursement Form
              </Link>
            </li>
            <li className="nav-item ">
              <Link to={"/ViewList"} className="nav-link">
              View Reimbursement Status 
              </Link>
            </li>
            
                </div>
                <div className="container mt-3">
          <Switch>
            <Route exact path={"/ReimbursementForm"} component={ReimbursementForm} />
            <Route exact path={"/Reimbursementstatus"} component={""} />
          </Switch>
        </div>
        </nav>
    );
}
}

export default EmployeeDashboard;