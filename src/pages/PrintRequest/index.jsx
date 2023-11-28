import React, {useState} from 'react';
import {Button, Modal, Stack, Typography} from "@mui/material";
import FindPrinters from "./FindPrinters.tsx";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import SelectSize from "./SelectSize.tsx";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import {Link} from 'react-router-dom';

import { DateTimePicker, LocalizationProvider, viVN } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo/DemoContainer.js';
import dayjs from 'dayjs';

export default function HomePage() {
    const handleInput = (event) => {
        // Custom validation to allow only numbers and commas
        const inputValue = event.target.value.replace(/[^0-9,]/g, '');
        // You can use inputValue for further processing or state update
    };
    // state for in 2 mặt or in 1 mặt
    const defaultReceiveDateTime = dayjs().add(1, 'day').hour(8).minute(0).second(0).millisecond(0);
    const [singleSidePrinting, setSingleSidePrinting] = useState(false);
    const [doubleSidePrinting, setDoubleSidePrinting] = useState(false);
    const [receiveDateTime, setReceiveDateTime] = useState(defaultReceiveDateTime);
    const [file, setFile] = useState(null);

    const handleSingleSidePrintingChange = () => {
        setSingleSidePrinting(true);
        setDoubleSidePrinting(false);
    };

    const handleDoubleSidePrintingChange = () => {
        setSingleSidePrinting(false);
        setDoubleSidePrinting(true);
    };

    //on confirm print box 

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <Stack direction={'column'} sx={{marginLeft: '60px'}}>
            <Typography variant={'h3'} fontWeight={700}>
                YÊU CẦU IN
            </Typography>
            <Stack direction={'column'} spacing={3} sx={{marginTop: '20px'}}>

                <Typography variant={'h4'} fontWeight={600}>
                    Chọn máy in
                </Typography>
                <FindPrinters></FindPrinters>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateTimePicker']}>
                  <DateTimePicker
                    label="Chọn thời gian nhận"
                    value={receiveDateTime}
                    onChange={(newValue) => setReceiveDateTime(newValue)}
                    ampm={false}
                    defaultValue={defaultReceiveDateTime}
                    disablePast
                    sx={{ width: 100 }}
                  />
                </DemoContainer>
              </LocalizationProvider>
                <Typography variant={'h4'} fontWeight={600} sx={{marginTop: '65px'}}>
                    Tải tệp lên
                </Typography>
                <Button
                    variant='contained'
                    component="label"
                    onClick={file ? () => setFile(null) : null}
                    sx={{
                        backgroundColor: 'white',
                        border: 'dashed',
                        borderColor: '#71B8FF',
                        color: 'black',
                        borderRadius: '20px',
                        '&:hover': {
                            backgroundColor: '#EEEEEE', // Change this to the desired hover color
                        },
                        width: '903px',
                        height: '100px',
                        marginTop: '36px',
                        display: 'flex',
                        flexDirection: 'column',
                        textTransform: 'none',
                    }}
                >

                    <UploadFileIcon sx={{ height: 50, width: 50 }}/>
                    {!file
                        ? 
                        <div>
                            <Typography >Nhấp vào đây để thêm tệp</Typography>
                            <input
                                type="file"
                                hidden
                                onChange={(e) => {
                                    setFile(e.target.files[0])
                                }}
                            />
                        </div>
                        :
                        <div sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                            <Typography color="blue" textAlign="center">{file.name}</Typography>
                            <Typography textAlign="center">Nhấp vào đây để chọn tệp khác</Typography>
                        </div>
                    }
                </Button>
                <Typography variant={'h4'} fontWeight={600} sx={{marginTop: '90px', marginBottom: '31px'}}>Thiết lập in</Typography>
                <Stack direction={'row'} sx={{marginBottom:'24px'}}>

                    <Stack sx={{width: '170.75px'}}>
                        <Typography variant={'h5'}>Cỡ giấy</Typography>
                    </Stack>

                    {/*    drop down list*/}
                    <SelectSize></SelectSize>

                </Stack>

                {/* THIS NEEDS TO BE IN SEPARATE FILES, BUT SOMEHOW I COULDNT FUCKING IMPORT IT BACK
                    SO I CHOOSE THIS FUCKING NONSENSE WAY.
                    GOD SAVES ME
                    */}

                    <Stack direction={'row'} >
                        <Stack sx={{width: '170.75px'}}>
                            <Typography variant={'h5'}>Các trang...</Typography>
                        </Stack>

                        <Box sx={{display: 'flex', alignItems: 'center', marginLeft: '100px'}}>
                            <TextField
                                id="printingPages"
                                sx={{borderRadius: '20px'}}
                                onChange={handleInput}
                                placeholder="Enter pages (e.g., 1, 2, 3)"
                            />
                            <IconButton sx={{p: '10px'}} aria-label="copy-page">
                                <FileCopyIcon/>
                            </IconButton>
                        </Box>
                    </Stack>

                    <Stack direction={'row'}>

                        <Typography variant={'h5'}>Tùy chọn mặt in</Typography>
                        {/*    2 check boxes*/}
                        <Stack direction={'row'} sx={{marginLeft: '100px'}}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={singleSidePrinting}
                                        onChange={handleSingleSidePrintingChange}
                                    />
                                }
                                label="In một mặt"
                            />

                            {/* Double-Side Printing Checkbox */}
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={doubleSidePrinting}
                                        onChange={handleDoubleSidePrintingChange}
                                    />
                                }
                                label="In hai mặt"
                            />
                        </Stack>

                    </Stack>




            </Stack>
            <Stack direction={'row'} sx={{justifyContent: 'space-between', alignItems: 'flex-end'}}>
                <Typography variant='h5'>
                    Bạn hiện có: 24
                </Typography>
                <Stack direction={'column'}>
                    <Typography variant='h5'>Tổng số giấy</Typography>
                    <Typography variant='h1' sx={{color: '#71B8FF'}}> 24</Typography>
                </Stack>

            </Stack>

            {/*FOOTER*/}
            <Stack direction={'row'} sx={{justifyContent: 'space-between', marginTop:'67px'}}>
                <Link to={'/smart-printing-service/Payment'}>
                    <Button variant='contained' sx={{borderRadius: '20px', width: '160px'}}>
                        Mua thêm
                    </Button>
                </Link>

                <Stack direction={'row'} spacing={'34px'}>
                    <Link to={'/smart-printing-service'}>
                        <Button variant='contained' sx={{
                            borderRadius: '20px',
                            backgroundColor: 'white',
                            color: '#71B8FF',
                            '&:hover': {backgroundColor: 'white'},
                            width: '160px'
                        }}>
                            Hủy
                        </Button>
                    </Link>


                    {/*THIS IS THE MODAL FOR "CẢM ƠN BẠN"
                        I ENCOUNTERED THE PROBLEM OF CANNOT IMPORT COMPONENT
                    */}
                    <Button variant='contained' sx={{borderRadius:'20px',width:'160px'}} onClick={handleOpen}>
                        Xác nhận
                    </Button>
                    <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 350, height: 180, bgcolor: 'background.paper', p: 4, borderRadius:5}}>
                            <Typography id="modal-modal-title" variant="h5" component="h2" align='center'>Gửi yêu cầu in thành công</Typography>
                            <Stack spacing='50px'>
                                <Typography id="modal-modal-description" variant="h6" sx={{ mt: 2 }} align='center'>Cám ơn bạn</Typography>

                                <Box sx={{position:'absolute', right:'125px'}}>
                                    <Button variant='contained' sx={{width:100, height:30, borderRadius:100}} onClick={handleClose}>Trở về</Button>
                                </Box>
                            </Stack>
                        </Box>
                    </Modal>
                </Stack>

            </Stack>

        </Stack>
    );
}

