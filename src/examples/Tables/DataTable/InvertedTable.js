import React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import PropTypes from "prop-types";

const InvertedTable = ({ table }) => {
  const columns = table.columns;
  const data = table.rows;
  console.log(table.rows);
  console.log(table.columns);
  return (
    // <TableContainer component={Box} display="flex" flexDirection="column">
    //     <Box flex="1">
    //         <Table>
    //             {/* Table Header */}
    //             <thead>
    //                 {data.map((row, rowIndex) => (
    //                     <TableRow key={rowIndex}>
    //                         {row.cells.map((cell, cellIndex) => (
    //                             <TableCell key={cellIndex} style={{ width: columns[cellIndex].width || "auto", textAlign: columns[cellIndex].align || "left" }}>
    //                                 {cell.render("Cell")}
    //                             </TableCell>
    //                         ))}
    //                     </TableRow>
    //                 ))}
    //             </thead>

    //             {/* Table Body */}
    //             <tbody>
    //                 <TableRow>
    //                     {columns.map((column, columnIndex) => (
    //                         <TableCell key={columnIndex} style={{ textAlign: column.align || "left" }}>
    //                             {column.render("Header")}
    //                         </TableCell>
    //                     ))}
    //                 </TableRow>
    //             </tbody>
    //         </Table>
    //     </Box>
    // </TableContainer>

    <div>dsd</div>
  );
};

// Prop validation for InvertedTable component
InvertedTable.propTypes = {
  table: PropTypes.shape({
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        Header: PropTypes.node,
        accessor: PropTypes.string,
        width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        align: PropTypes.oneOf(["left", "center", "right"]),
        render: PropTypes.func,
      })
    ),
    rows: PropTypes.arrayOf(
      PropTypes.shape({
        cells: PropTypes.arrayOf(
          PropTypes.shape({
            value: PropTypes.any,
            render: PropTypes.func,
          })
        ),
      })
    ),
  }).isRequired,
};

export default InvertedTable;
