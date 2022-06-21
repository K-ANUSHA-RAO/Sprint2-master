import * as React from 'react';
import ViewList from "./ViewList";
import { tableData } from "./data";

function ViewList1() {
  const columns = [
    { field: "id", header: "Request_id" },
    { field: "id", header: "Employee_id" },
    { field: "name", header: "Employee_Name" },
    { field: "date", header: "Date" },
    { field: "description", header: "Description" },
    { field: "amount", header: "Amount" },
    { field: "status", header: "Status" },
  ];

  return (
    <div>
      <ViewList data={tableData} columns={columns} hover={true} striped={true} />
    </div>
  );
}

export default ViewList1;