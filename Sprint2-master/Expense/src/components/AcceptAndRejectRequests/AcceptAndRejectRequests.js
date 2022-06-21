import React from 'react';
  function AcceptAndRejectRequests() {
    const handleAccept =  (e) => {
      //console.log(e)
      const parent = e.target.parentNode.parentNode
      const stat = parent.querySelectorAll(".stat")[0]
      //console.log(stat)
      stat.textContent = "Accepted"
    }
    const handleReject = (e) => {
      const parent = e.target.parentNode.parentNode
      const stat = parent.querySelectorAll(".stat")[0]
      stat.textContent = "Rejected"
  
    }
  
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
                          <th scope="col">Action</th>
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
                          <td><button type="button" class="btn btn-success" onClick={handleAccept} >Accept</button> <button type="button" class="btn btn-danger" onClick={handleReject} >Reject</button></td>
                          <td className ="stat">Pending</td>
                      </tr>
                      <tr>
                          <td scope="row">2</td>
                          <td>2</td>
                          <td>Shyam</td>
                          <td >24/06/2022</td>
                          <td>Food Expense</td>
                          <td>1000</td>
                          <td><button type="button" class="btn btn-success" onClick={handleAccept}>Accept</button> <button type="button" class="btn btn-danger" onClick={handleReject}>Reject</button></td>
                          <td className ="stat">Pending</td>
                      </tr>
                      <tr>
                          <td scope="row">3</td>
                          <td>3</td>
                          <td>Luv</td>
                          <td >22/06/2022</td>
                          <td>Rental Expense</td>
                          <td>5000</td>
                          <td><button type="button" class="btn btn-success" onClick={handleAccept}>Accept</button> <button type="button" class="btn btn-danger" onClick={handleReject}>Reject</button></td>
                          <td className ="stat">Pending</td>
                      </tr>
                      <tr>
                          <td scope="row">4</td>
                          <td>4</td>
                          <td>Kush</td>
                          <td >23/06/2022</td>
                          <td>Travel Expense</td>
                          <td>2000</td>
                          <td><button type="button" class="btn btn-success" onClick={handleAccept}>Accept</button> <button type="button" class="btn btn-danger" onClick={handleReject}>Reject</button></td>
                          <td className ="stat">Pending</td>
                      </tr>
              </tbody>
  </table>
  </div>
    );
  }
  
  export default AcceptAndRejectRequests;