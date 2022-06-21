import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";  
class EmployeeDashboard extends React.Component {
    render(){
    return(
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <div className='container'>
            <div className="navbar-nav mr-auto">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="row col-24 d-flex collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item">
            <Link to={"/Reimbursement Form"} className="nav-link dark">
            Reimbursement Form
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/View List"} className="nav-link dark">
              View Reimbursement Status 
              </Link>
            </li>
            </ul>
            </div>
            </div>
                </div>
                <div className="container mt-3">
        </div>
        </nav>
    );
}
}

export default EmployeeDashboard;