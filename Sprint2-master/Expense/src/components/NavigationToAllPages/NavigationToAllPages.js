import React from 'react';
import { withRouter } from 'react-router-dom';
function NavigationToAllPages(props) {
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            
           <div class="row col-12 d-flex collapse navbar-collapse" id="navbarNavDropdown">
           <ul class="navbar-nav mr-auto">
           <li class="nav-item active">
           <a class="nav-link" href='/login'>Login</a>
            </li>
           <li class="nav-item active">
           <a class="nav-link" href='/register'>Registration</a>
            </li>
           <li class="nav-item active">
           <a class="nav-link" href='/employee dashboard'>Employee Dashboard</a>
            </li>
           <li class="nav-item active">
           <a class="nav-link" href='reimbursement form'>Add Reimbursement form</a>
            </li>
           <li class="nav-item active">
           <a class="nav-link" href='#'>View Reimbursement List</a>
            </li>
           <li class="nav-item active">
           <a class="nav-link" href='/manager dashboard'>Finance Manager Dashboard</a>
            </li>
           <li class="nav-item active">
           <a class="nav-link" href='#'>View Reimbursement Request</a>
            </li>
           <li class="nav-item active">
           <a class="nav-link" href='#'>Accept/Reject Reimbursement</a>
            </li>
            </ul>
           </div>
        </nav>
        
    )
}

export default withRouter(NavigationToAllPages);