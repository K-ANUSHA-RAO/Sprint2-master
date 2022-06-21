import React from 'react'
import ReactDOM from 'react-dom'
function ViewAllList() {

  return (
    <div>
            <table class="table table-hover">
            <thead>
                    <tr>
                        <th scope="col">Request Id</th>
                        <th scope="col">Employee Id</th>
                        <th scope="col">Employee Name</th>
                        <th scope="col">Date</th>
                        <th scope="col">Description</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Status</th>
                    </tr>
            </thead>
            <tbody>
                    <tr>
                        <td scope="row">1</td>
                        <td>1</td>
                        <td>Ram</td>
                        <td >23/06/2022</td>
                        <td>Travel Expense</td>
                        <td>2000</td>
                        <td className ="stat">Pending</td>
                    </tr>
                    <tr>
                        <td scope="row">2</td>
                        <td>2</td>
                        <td>Shyam</td>
                        <td >24/06/2022</td>
                        <td>Food Expense</td>
                        <td>1000</td>
                        <td className ="stat">Rejected</td>
                    </tr>
                    <tr>
                        <td scope="row">3</td>
                        <td>3</td>
                        <td>Luv</td>
                        <td >22/06/2022</td>
                        <td>Rental Expense</td>
                        <td>5000</td>
                        <td className ="stat">Accepted</td>
                    </tr>
                    <tr>
                        <td scope="row">4</td>
                        <td>4</td>
                        <td>Kush</td>
                        <td >23/06/2022</td>
                        <td>Travel Expense</td>
                        <td>2000</td>
                        <td className ="stat">Pending</td>
                    </tr>
            </tbody>
</table>
</div>
  );
}

export default ViewAllList;