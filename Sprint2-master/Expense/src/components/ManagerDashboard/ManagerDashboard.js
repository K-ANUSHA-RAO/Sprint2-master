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
           
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
              <div className='container'>
                <div className="navbar-nav mr-auto">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div className="row col-24 d-flex collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active" >
                <Link to={"/View All List"} className="nav-link dark">
                View All List
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link to={"/Accept And Reject Requests"} className="nav-link dark">
                  Accept And Reject Requests
                  </Link>
                </li>
                </ul>
                </div>
                </div>
                    </div>
                    <div className="container mt-3">
              <Switch>
                <Route exact path={"/View All List"} component={"ViewAllList"} />
                <Route exact path={"/AcceptAndRejectRequests"} component={AcceptAndRejectRequests} />
              </Switch>
            </div>
            </nav>
        );
    }
 }
  export default ManagerDashboard;