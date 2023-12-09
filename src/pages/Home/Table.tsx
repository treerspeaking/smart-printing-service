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
import { Box, Typography } from '@mui/material';

import { studentMapper } from '../../contexts/mapper/StudentMapper';
import { usePrinter } from '../../contexts/PrinterContext';
import { useAuth } from '../../contexts/AuthContext';

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


    const user = useAuth().currentUser;
    const {printerData, fetchPrinterData} = usePrinter();

    const [tableRows, setTableRows] = React.useState<Data[]>([]);
    // const [tableRows, setTableRows] = [parentTableRows, setParentTableRows];
    

    const findPrinterFromData = async (PrinterDocumentID) => {
        console.log(printerData, PrinterDocumentID);
        
    
        const printer = printerData ? printerData.find(printer => {
            return printer.id === PrinterDocumentID
        }) : await fetchPrinterData().find(printer => {
                return printer.id === PrinterDocumentID 
            });
            
        return printer;
    }

    const formatVNDate = (date: Date) => {
        const options: Intl.DateTimeFormatOptions = {
            hour: '2-digit',
            minute: '2-digit',
            day: '2-digit',
            month: '2-digit',
            year: 'numeric' as const,
        };
        const vnDate = new Date(date).toLocaleString('vi-VN', options);
        const dayNames = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
        const dayName = dayNames[new Date(date).getDay()];
        return `${dayName} ${vnDate}`;
    };

    const fetchPrintingLogData = async () => {
        const logs = await studentMapper.getAllPrintingLogsByStudentID(user.uid);
        const data = await Promise.all(logs.map(async (log) => {
            const printer = await findPrinterFromData(log.PrinterDocumentID);

            const rowData = createData(
                formatVNDate(log.ReceiveRequestTimestamp.toDate()),
                formatVNDate(log.PrintTimestamp.toDate()),
                log.DocumentName,
                printer ? (printer.Brand + ' ' + printer.Model) : "",
                printer ? (printer.Campus + ' ' + printer.Building + ' - ' + printer.Room) : "",
                log.PrintingStatus
            );
            return rowData;
        }));

        setTableRows(data);
    };

    React.useEffect(() => {
        fetchPrintingLogData();
    }, [user.uid, printerData]);

    
    const handleRequestSort = (property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const createSortHandler = (property) => (event) => {
        handleRequestSort(property);
    };

    const sortedRows = tableRows
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
        <Paper sx={{ width: '100%'}} >
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
                                        {column.id === "tinhTrang"
                                            ?
                                            (<Typography color={row.tinhTrang === 'Hoàn thành' ? 'green' : row.tinhTrang === 'Chưa hoàn thành' ? 'red' : 'orange'}>
                                                {row[column.id]}
                                            </Typography>)
                                            :
                                            <Typography>
                                                {row[column.id]}
                                            </Typography>
                                        }
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
                count={tableRows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}