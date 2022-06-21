import React from 'react';
import { withRouter } from "react-router-dom";
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
        if(props.location.pathname === '/home'||props.location.pathname === '/employee dashboard'||props.location.pathname === '/manager dashboard'){
            return(
                <div className="ml-auto">
                    <button className="btn btn-danger" onClick={() => handleLogout()}>Logout</button>
                </div>
            )
        }
    }
    const handleLogout = () =>{
        props.history.push('/login');
    }
    return(
        <nav className="navbar navbar-dark bg-dark">
            <div className="row col-12 d-flex justify-content-center text-white">
                <span className="h3">{props.title || title}</span>
                {renderLogout()}
            </div>
        </nav>
    )
}
export default withRouter(Header);