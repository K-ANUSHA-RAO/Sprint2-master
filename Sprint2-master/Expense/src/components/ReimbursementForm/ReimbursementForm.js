import React, {useState} from 'react';
import { withRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Switch, Route,Link} from "react-router-dom";
class ReimbursementForm extends React.Component {
    // const [state , setState] = useState({
    //     date : "",
    //     description : "",
    //     amount: "",
    //     successMessage: null
    // })
    // const handleChange = (e) => {
    //     const {id , value} = e.target   
    //     setState(prevState => ({
    //         ...prevState,
    //         [id] : value
    //     }))
    // }
    // const handleSubmitClick = () => {
    //     props.history.push('/employee dashboard');
    // }
    theme = createTheme();
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {},
      date:'',
      description:'',
      amount:''
    };
  }
  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
    if (!fields["date"]) {
        formIsValid = false;
        errors["date"] = "Cannot be empty";
      }
    if (!fields["description"]) {
        formIsValid = false;
        errors["description"] = "Cannot be empty";
    }
    if (!fields["amount"]) {
        formIsValid = false;
        errors["amount"] = "Cannot be empty";
    }
    this.setState({ errors: errors });
    return formIsValid;
  }

  contactSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log({
        date: data.get('date'),
        description:data.get('description'),
        amount: data.get('amount'),
    });
    if (this.handleValidation()) {
      alert("Form submitted");
    } else {
      alert("Input values are invalid.");
    }
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }
    render() {
    return(
        <ThemeProvider theme={this.theme}>
        <div className="card col-14 col-lg-6 login-card mt-5 hv-center">
            <form component="form" name="contactform" className="contactform" noValidate onSubmit={this.contactSubmit.bind(this)}>
            <h1 className="form-group text-center text-uppercase mt-3 mb-5">Reimbursement Form</h1>
                <div className="form-group text-left">
                        <label>Date</label>
                        <input type="date" 
                            className="form-control" 
                            id="date" 
                            name="date"
                            refs="date"
                            onChange={this.handleChange.bind(this, "date")}
                            value={this.state.fields["date"]}
                            required
                        />
                </div>
                <div className="form-group text-left purple-border">
                    <label>Description</label>
                    <textarea className="form-control" 
                        id="description" 
                        rows="3" 
                        name="description"
                        refs="description"
                        onChange={this.handleChange.bind(this, "description")}
                        value={this.state.fields["description"]}
                        required>
                        </textarea>
                </div>
                <div className="form-group text-left">
                        <label>Amount</label>
                        <input type="number" 
                            className="form-control" 
                            id="amount" 
                            placeholder="Amount"
                            name="amount"
                            refs="amount"
                            onChange={this.handleChange.bind(this, "amount")}
                            value={this.state.fields["amount"]}
                            required
                        />
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary mr-2 mb-3"
                >
                    Submit
                </button>

            </form>
        </div>
        </ThemeProvider>
    )
    }
}
export default ReimbursementForm;