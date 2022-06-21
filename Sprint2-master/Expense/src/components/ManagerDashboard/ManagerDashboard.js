import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import AcceptAndRejectRequests from '../AcceptAndRejectRequests/AcceptAndRejectRequests';

class ManagerDashboard extends React.Component {
    render(){
        return(
           
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="navbar-nav mr-auto">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <li className="nav-item dark" >
                <Link to={"/ViewAllList"} className="nav-link dark">
                View All forms
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link to={"/AcceptAndRejectRequests"} className="nav-link">
                  Accept And Reject Requests
                  </Link>
                </li>
                
                    </div>
                    <div className="container mt-3">
              <Switch>
                <Route exact path={"/ViewAllList"} component={""} />
                <Route exact path={"/AcceptAndRejectRequests"} component={AcceptAndRejectRequests} />
              </Switch>
            </div>
            </nav>
        );
    }
 }
  export default ManagerDashboard;