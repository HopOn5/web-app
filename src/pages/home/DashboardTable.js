import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Text from "../../components/Text";
import TablePagination from "@mui/material/TablePagination";

const DashboardTable = ({
    rows = [],
    cols = [],
    customCell,
    header,
    headerType
}) => {
    const getClassname = (subclass) =>
        `dashboard-table${subclass ? `__${subclass}` : ""}`;

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handlePageChange = (e, pageNo) => setPage(pageNo);
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const renderCells = (rowData) =>
        cols.map((colKey, key) => {
            console.log(rowData, colKey);
            return (
                <TableCell
                    className={getClassname("cell")}
                    scope="row"
                    align="left"
                    key={`${key}-cell`}
                >
                    {colKey === "custom_cell"
                        ? customCell(rowData)
                        : rowData[colKey]}
                </TableCell>
            );
        });

    return (
        <div className={getClassname()}>
            {header && (
                <Text
                    className={getClassname("header")}
                    type={headerType ?? "primaryLarge fW7"}
                >
                    {header}
                </Text>
            )}
            <TableContainer
                component={Paper}
                className={getClassname("container")}
            >
                <Table aria-label="simple table">
                    <TableBody>
                        {rows?.map((row, key) => (
                            <TableRow
                                key={`${key}-dash-row`}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0
                                    }
                                }}
                            >
                                {renderCells(row)}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 50]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </div>
    );
};

export default DashboardTable;
