import React from 'react';
import { withRouter } from 'react-router-dom';
function Home(props) {
    return(
        <div className="mt-2">
            This is a home page!
        </div>
    )
}

export default withRouter(Home);