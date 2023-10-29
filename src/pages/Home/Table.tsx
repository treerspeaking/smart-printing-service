import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import SendIcon from '@mui/icons-material/Send';
const styles = {
    scrollbar: {
        width: 0,
    },
    scrollbarThumb: {
        height: 0,
        background: 'transparent',
    },
};

interface Column {
    id: 'ngayNhan' | 'ngayDat' | 'tenFile' | 'tenMayIn' | 'viTri' | 'tinhTrang';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: string) => string;
}

const columns: Column[] = [
    { id: 'ngayNhan', label: 'Ngày nhận', minWidth: 170 },
    { id: 'ngayDat', label: 'Ngày đặt', minWidth: 100 },
    {
        id: 'tenFile',
        label: 'Tên file',
        minWidth: 170,
        align: 'right',
    },
    {
        id: 'tenMayIn',
        label: 'Tên máy in',
        minWidth: 170,
        align: 'right',
    },
    {
        id: 'viTri',
        label: 'Vị trí',
        minWidth: 170,
        align: 'right',
    },
    {
        id: 'tinhTrang',
        label: 'Tình trạng',
        minWidth: 170,
        align: 'right',
    },
];

interface Data {
    ngayNhan: string;
    ngayDat: string;
    tenFile: string;
    tenMayIn: string;
    viTri: string;
    tinhTrang: string;
}

function createData(
    ngayNhan: string,
    ngayDat: string,
    tenFile: string,
    tenMayIn: string,
    viTri: string,
    tinhTrang: string,
): Data {
    return { ngayNhan, ngayDat, tenFile, tenMayIn, viTri, tinhTrang };
}

const rows = [
    createData('2023-10-28', '2023-10-25', 'example.pdf', 'Printer A', 'A1', 'Hoàn thành'),
    createData('2023-10-27', '2023-10-24', 'document.doc', 'Printer B', 'B2', 'Chưa hoàn thành'),
    createData('2023-10-26', '2023-10-23', 'image.jpg', 'Printer C', 'C3', 'Đã gửi đi'),
    createData('2023-10-29', '2023-10-26', 'data.csv', 'Printer D', 'D4', 'Đang xử lý'),
    createData('2023-10-30', '2023-10-27', 'presentation.ppt', 'Printer E', 'E5', 'Hoàn thành'),
    createData('2023-10-31', '2023-10-28', 'spreadsheet.xlsx', 'Printer F', 'F6', 'Chưa hoàn thành'),
    createData('2023-11-01', '2023-10-29', 'drawing.pdf', 'Printer G', 'G7', 'Đã gửi đi'),
    createData('2023-11-02', '2023-10-30', 'report.doc', 'Printer H', 'H8', 'Hoàn thành'),
    createData('2023-11-03', '2023-10-31', 'photo.jpg', 'Printer I', 'I9', 'Chưa hoàn thành'),
    createData('2023-11-04', '2023-11-01', 'data.csv', 'Printer J', 'J10', 'Đang xử lý'),
];

const circleStyles = {
    circle: {
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        display: 'inline-block',
        marginRight: '4px',
    },
    green: {
        backgroundColor: 'green',
    },
    red: {
        backgroundColor: 'red',
    },
    yellow: {
        backgroundColor: 'yellow',
    },
};


export default function ColumnGroupingTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    // Define state for sorting
    const [orderBy, setOrderBy] = React.useState('ngayNhan');
    const [order, setOrder] = React.useState('asc');

    const handleRequestSort = (property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const createSortHandler = (property) => (event) => {
        handleRequestSort(property);
    };

    const sortedRows = rows
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .sort((a, b) => {
            const isAsc = order === 'asc';
            return (isAsc ? a[orderBy] > b[orderBy] : a[orderBy] < b[orderBy]) ? 1 : -1;
        });

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%' }}>
            <TableContainer sx={{ maxHeight: 440,  }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left" colSpan={6} style={{ fontWeight: 'bold', backgroundColor: '#0F6CBF', borderTopLeftRadius: 10, borderTopRightRadius: 10, color: 'white' }}>
                                LỊCH SỬ IN
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ top: 57, minWidth: column.minWidth, fontWeight: 'bold' }}
                                >
                                    <TableSortLabel
                                        active={orderBy === column.id}

                                        onClick={createSortHandler(column.id)}
                                    >
                                        {column.label}
                                    </TableSortLabel>
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sortedRows.map((row) => (
                            <TableRow hover role="checkbox" tabIndex={-1} key={row.ngayNhan}>
                                {columns.map((column) => (
                                    <TableCell key={column.id} align={column.align}>
                                        {column.id === 'tinhTrang' ? (
                                            <span style={circleStyles.circle} className={row.tinhTrang === 'Hoàn thành' ? 'green' : row.tinhTrang === 'Chưa hoàn thành' ? 'red' : 'yellow'} />
                                        ) : null}
                                        {row[column.id]}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>

                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}