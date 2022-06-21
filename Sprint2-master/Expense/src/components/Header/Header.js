import React from 'react';
import { withRouter } from "react-router-dom";
import Button from '@material-ui/core/Button';
import LogoutIcon from '@material-ui/icons/ExitToApp';
function Header(props) {
    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }
    let title = capitalize(props.location.pathname.substring(1,props.location.pathname.length))
    if(props.location.pathname === '/') {
        title = 'Expense Reimbursement System'
    }
    function renderLogout() {
        if(props.location.pathname === '/home'||props.location.pathname === '/EmployeeDashboard'||props.location.pathname === '/ManagerDashboard'){
            return(
                <div className="ml-auto">
                    <Button startIcon={<LogoutIcon />} color="secondary" variant="contained" onClick={() => handleLogout()}>
                     Logout
                    </Button>
                </div>
            )
        }
    }
    const handleLogout = () =>{
        props.history.push('/login');
    }
    return(
        <nav className="navbar navbar-dark bg-primary">
            <div className="row col-12 d-flex justify-content-center text-white">
                <span className="h3">{props.title || title}</span>
                {renderLogout()}
            </div>
        </nav>
    )
}
export default withRouter(Header);