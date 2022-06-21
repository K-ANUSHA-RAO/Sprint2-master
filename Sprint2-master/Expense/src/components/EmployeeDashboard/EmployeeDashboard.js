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
       
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-nav mr-auto">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="row col-12 d-flex collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
            <Link to={"/Reimbursement Form"} className="nav-link dark">
            Reimbursement Form
              </Link>
            </li>
            <li className="nav-item active">
              <Link to={"/ViewList"} className="nav-link">
              View Reimbursement Status 
              </Link>
            </li>
            </ul>
            </div>
                </div>
                <div className="container mt-3">
          <Switch>
            <Route exact path={"/Reimbursement Form"} component={ReimbursementForm} />
            <Route exact path={"/Reimbursementstatus"} component={""} />
          </Switch>
        </div>
        </nav>
    );
}
}

export default EmployeeDashboard;