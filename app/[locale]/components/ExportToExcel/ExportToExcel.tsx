// ExportToExcel.tsx
import React from "react";
import * as XLSX from "xlsx";
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const ExportToExcel: React.FC = () => {
  const tableId = "export-table";

  // Static data
  const data = [
    { name: "John", age: 30, email: "john@example.com" },
    { name: "Alice", age: 25, email: "alice@example.com" },
    { name: "Bob", age: 35, email: "bob@example.com" },
  ];

  const handleExport = () => {
    const tableElement = document.getElementById(tableId);
    if (!tableElement) return;

    const worksheet = XLSX.utils.table_to_sheet(tableElement);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    XLSX.writeFile(workbook, "exported_table.xlsx");
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table id={tableId}>
          <TableHead>
            <TableRow>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Age</strong></TableCell>
              <TableCell><strong>Email</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Button variant="contained" color="primary" onClick={handleExport} sx={{ mt: 2 }}>
        Export to Excel
      </Button>
    </div>
  );
};

export default ExportToExcel;
