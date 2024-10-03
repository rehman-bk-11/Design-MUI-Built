import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
export default function Grid() {
  return (
    <div style={{ height: '900px', width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}

const columns = [
  { field: 'firstName', headerName: 'First Name', width: 200 },
  { field: 'lastName', headerName: 'Last Name', width: 200 },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'age', headerName: 'Age', type: 'number', width: 200 },
  { field: 'type', headerName: 'Type', width: 250 },
  { field: 'lastActive', headerName: 'Last Active', width: 250 },
  { field: 'nFlaggedItems', headerName: 'Number of Flagged Items', width: 250 },
];

const rows = [
  { id: 1, firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', age: 28, type: 'User', lastActive: '2024-10-01', nFlaggedItems: 2 },
  { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com', age: 34, type: 'Admin', lastActive: '2024-09-25', nFlaggedItems: 1 },
  { id: 3, firstName: 'Alice', lastName: 'Johnson', email: 'alice.johnson@example.com', age: 22, type: 'User', lastActive: '2024-10-02', nFlaggedItems: 0 },
  { id: 4, firstName: 'Bob', lastName: 'Brown', email: 'bob.brown@example.com', age: 45, type: 'Moderator', lastActive: '2024-09-30', nFlaggedItems: 5 },
  { id: 5, firstName: 'Charlie', lastName: 'Davis', email: 'charlie.davis@example.com', age: 30, type: 'User', lastActive: '2024-10-01', nFlaggedItems: 3 },
  { id: 6, firstName: 'David', lastName: 'Wilson', email: 'david.wilson@example.com', age: 40, type: 'Admin', lastActive: '2024-09-29', nFlaggedItems: 2 },
  { id: 7, firstName: 'Eva', lastName: 'Taylor', email: 'eva.taylor@example.com', age: 27, type: 'User', lastActive: '2024-10-03', nFlaggedItems: 0 },
  { id: 8, firstName: 'Frank', lastName: 'Anderson', email: 'frank.anderson@example.com', age: 36, type: 'Moderator', lastActive: '2024-09-28', nFlaggedItems: 1 },
  { id: 9, firstName: 'Grace', lastName: 'Thomas', email: 'grace.thomas@example.com', age: 29, type: 'User', lastActive: '2024-09-27', nFlaggedItems: 4 },
  { id: 10, firstName: 'Hank', lastName: 'Jackson', email: 'hank.jackson@example.com', age: 31, type: 'User', lastActive: '2024-10-01', nFlaggedItems: 2 },
  { id: 11, firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', age: 28, type: 'User', lastActive: '2024-10-01', nFlaggedItems: 2 },
  { id: 12, firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com', age: 34, type: 'Admin', lastActive: '2024-09-25', nFlaggedItems: 1 },
  { id: 13, firstName: 'Alice', lastName: 'Johnson', email: 'alice.johnson@example.com', age: 22, type: 'User', lastActive: '2024-10-02', nFlaggedItems: 0 },
  { id: 14, firstName: 'Bob', lastName: 'Brown', email: 'bob.brown@example.com', age: 45, type: 'Moderator', lastActive: '2024-09-30', nFlaggedItems: 5 },
  { id: 15, firstName: 'Charlie', lastName: 'Davis', email: 'charlie.davis@example.com', age: 30, type: 'User', lastActive: '2024-10-01', nFlaggedItems: 3 },
  { id: 16, firstName: 'David', lastName: 'Wilson', email: 'david.wilson@example.com', age: 40, type: 'Admin', lastActive: '2024-09-29', nFlaggedItems: 2 },
  { id: 17, firstName: 'Eva', lastName: 'Taylor', email: 'eva.taylor@example.com', age: 27, type: 'User', lastActive: '2024-10-03', nFlaggedItems: 0 },
  { id: 18, firstName: 'Frank', lastName: 'Anderson', email: 'frank.anderson@example.com', age: 36, type: 'Moderator', lastActive: '2024-09-28', nFlaggedItems: 1 },
  { id: 19, firstName: 'Grace', lastName: 'Thomas', email: 'grace.thomas@example.com', age: 29, type: 'User', lastActive: '2024-09-27', nFlaggedItems: 4 },
  { id: 20, firstName: 'Hank', lastName: 'Jackson', email: 'hank.jackson@example.com', age: 31, type: 'User', lastActive: '2024-10-01', nFlaggedItems: 2 },
];

