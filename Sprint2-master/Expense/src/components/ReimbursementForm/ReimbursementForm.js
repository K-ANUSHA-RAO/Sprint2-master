import React, {useState} from 'react';
import { withRouter } from 'react-router-dom';
function ReimbursementForm(props) {
    const [state , setState] = useState({
        date : "",
        description : "",
        amount: "",
        successMessage: null
    })
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }
    const handleSubmitClick = () => {
        props.history.push('/employee dashboard');
    }
    return(
        <div className="card col-14 col-lg-6 login-card mt-5 hv-center">
            <form id="myForm">
            <h1 className="form-group text-center text-uppercase mt-3 mb-5">Reimbursement Form</h1>
                <div className="form-group text-left">
                        <label>Date</label>
                        <input type="date" 
                            className="form-control" 
                            id="date" 
                            value={state.date}
                            onChange={handleChange}
                            required
                        />
                </div>
                <div className="form-group text-left purple-border">
                    <label>Description</label>
                    <textarea className="form-control" 
                        id="description" 
                        rows="3" 
                        value={state.description}
                        onChange={handleChange}
                        required>
                        </textarea>
                </div>
                <div className="form-group text-left">
                        <label>Amount</label>
                        <input type="number" 
                            className="form-control" 
                            id="amount" 
                            placeholder="Amount"
                            value={state.amount}
                            onChange={handleChange}
                            required
                        />
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary mr-2 mb-3"
                    onClick={() => handleSubmitClick()}
                >
                    Submit
                </button>

            </form>
        </div>
    )
}

export default withRouter(ReimbursementForm);