import React from 'react';
import { withRouter } from 'react-router-dom';
function EmployeeDashboard(props) {
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="row col-12 d-flex collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href='/reimbursement form'>Reimbursement Form</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href='/View List'>View Reimbursement Status </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(EmployeeDashboard);