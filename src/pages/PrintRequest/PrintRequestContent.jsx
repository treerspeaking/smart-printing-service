import React, { useState, useContext, useEffect } from 'react';
import { Button, Modal, Stack, Typography } from "@mui/material";
import FindPrinters from "./FindPrinters.tsx";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import SelectSize from "./SelectSize.tsx";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Link } from 'react-router-dom';

import { DateTimePicker, LocalizationProvider, viVN } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo/DemoContainer.js';
import dayjs from 'dayjs';

import { usePrinter } from '../../contexts/PrinterContext.jsx';
import { useAuth } from '../../contexts/AuthContext.jsx';
import { studentMapper } from '../../contexts/mapper/StudentMapper.jsx';
import { ROUTES } from '../../contexts/RouteContext.jsx';


const PrintRequestContent = () => {
  const handlePagesInput = (event) => {
    // caculate the number of page need to be printed
    const inputValue = event.target.value;
    const allowedPattern = /^((\d+,)*\d+|)$/;
    const isValid = inputValue.match(allowedPattern);
    if (isValid) {
      setPagesError(false);
      setPrintingPages(inputValue);
      // let pagesCount = inputValue.split(",").length
      // setPagesPrinted(pagesCount)
    }
    else {
      setPagesError(true);
    }
  };

  const { currentUser } = useAuth();
  const { printerData } = usePrinter();
  const [pageBalance, setPageBalance] = useState();
  // The number of pages that need to be printed 10
  const [pagesPrinted, setPagesPrinted] = useState(0);
  // state for in 2 mặt or in 1 mặt
  const defaultReceiveDateTime = dayjs().add(1, 'day').hour(0).minute(0).second(0).millisecond(0);
  const [selectedPrinterDocument, setSelectedPrinterDocument] = useState(null);
  const [selectedPrinterDocumentError, setSelectedPrinterDocumentError] = useState(false)
  // the size of the page A4 or A3
  const [pageSize, setPageSize] = useState('A4');
  // the pages that need to be printed 1,2,3,4
  const [printingPages, setPrintingPages] = useState('');
  const [pagesError, setPagesError] = useState(false);
  const [singleSidePrinting, setSingleSidePrinting] = useState(false);
  const [doubleSidePrinting, setDoubleSidePrinting] = useState(true);
  const [receiveDateTime, setReceiveDateTime] = useState(defaultReceiveDateTime); // ? THIS NEEDS TO SET NULL HA ? 
  const [dateError,setDateError] = useState(null)
  const [file, setFile] = useState(null);
  const [fileError, setFileError] = useState(false)


  const handleSingleSidePrintingChange = () => {
    setSingleSidePrinting(true);
    setDoubleSidePrinting(false);
  };

  const handleDoubleSidePrintingChange = () => {
    setSingleSidePrinting(false);
    setDoubleSidePrinting(true);
  };

  const fileToByteArray = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = (event) => {
        const byteArray = new Uint8Array(event.target.result);
        resolve(byteArray);
      };
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    });
  };

  const byteArrayToBase64 = (byteArray) => {
    let binary = '';
    const chunkSize = 0xffff; // Use chunks to avoid call stack overflow
    for (let i = 0; i < byteArray.length; i += chunkSize) {
      const chunk = byteArray.subarray(i, i + chunkSize);
      binary += String.fromCharCode.apply(null, chunk);
    }
    return window.btoa(binary);
  };

  const handlePrintRequest = async () => {
    // number of page that need to be printed 1,2,3
    let pagesCount = printingPages.split(",").length
    // Nếu 2 side thì chỉ cho in 1/2 số trang
    let pagesCountAfterSide = singleSidePrinting ? pagesCount : Math.ceil(pagesCount / 2)
    // A4 1 trang A3 2 trang
    const pageSizeMultiplier = pageSize === 'A4' ? 1 : 2
    let newPagesPrinted = pagesCountAfterSide * pageSizeMultiplier;
    const newPageBalance = pageBalance - newPagesPrinted
    setPagesPrinted(newPagesPrinted)
    setPageBalance(newPageBalance)
    // if(!singleSidePrinting)
    // {
    //   // change page balance for the client side
    //     setPagesPrinted(Math.ceil(pagesPrinted/2))
    //     setPageBalance(pageBalance-pagesPrinted)
    // }
    console.log("Printer Doc ID", selectedPrinterDocument.id);
    console.log("File", file);
    console.log("Receive Date Time", receiveDateTime);
    console.log("Page Size", pageSize);
    console.log ("How many pages to be printed? ",newPagesPrinted) // ? 
    console.log("Printing Pages", printingPages);
    console.log("Single Side Printing", singleSidePrinting);
    console.log("Double Side Printing", doubleSidePrinting);

    console.log("Current User", currentUser);

    const byteArray = await fileToByteArray(file);
    const base64 = byteArrayToBase64(byteArray)

    await studentMapper.createPrintingRequest(
      selectedPrinterDocument.id,
      currentUser.uid,
      file.name,
      "", // used to be base64 but now we use the file url
      dayjs().toDate(),
      receiveDateTime.toDate(),
      pageSize,
      printingPages,
      singleSidePrinting ? 1 : 2,
      "Pending",
      newPageBalance
    );

  };


  useEffect(() => {
    const fetchPageBalance = async () => {
      const balance = await studentMapper.getPageBalance(currentUser.uid);
      setPageBalance(balance);
    };

    fetchPageBalance();
  }, [currentUser]);


  //on confirm print box 

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    if(file&&selectedPrinterDocument&&printingPages)
    {

      handlePrintRequest();
      setOpen(true);
    }
      
    else
    {
        if(!selectedPrinterDocument)
        {
          console.log("Vui long chon may in")
          setSelectedPrinterDocumentError(true)
          
        }
        if(!file)
        {
          setFileError(true)
          console.log("Vui long tai? tep len")
          alert("Vui long tai tep len")
        }
        if(!pagesPrinted)
        {
          setPagesError(true)
        }
    }
  }
  const handleClose = () => setOpen(false);


  return (
    <Stack direction={'column'} sx={{ marginLeft: '60px' }}>
      <Stack direction={'row'} sx={{ justifyContent: 'space-between', alignItems: 'start' }}>
        <Stack direction="column" spacing={3}>
          <Typography variant={'h2'}>
            YÊU CẦU IN
          </Typography>

        </Stack>
        <Stack direction={'column'} alignItems="center">
          <Typography variant='h5'>Tổng số giấy bạn hiện có</Typography>
          <Typography variant='h1' sx={{ color: '#71B8FF' }}> {pageBalance} </Typography>
        </Stack>

      </Stack>
      <Stack direction={'column'} spacing={3} sx={{ marginTop: '20px' }}>

        <Typography variant={'h4'} fontWeight={600}>
          Chọn máy in
        </Typography>

        <FindPrinters
          printers={printerData}
          error={selectedPrinterDocumentError}
          selectedPrinterDocumentID={selectedPrinterDocument}
          onChange={(e) => setSelectedPrinterDocument(e.target.value)}
        />



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
        <Typography variant={'h4'} fontWeight={600} sx={{ marginTop: '65px' }}>
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
            alignItems: 'center',
            textTransform: 'none',
          }}
        >

          {!file
            ?
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "start" }} >
              <UploadFileIcon sx={{ height: 50, width: 50 }} />
              <Typography >Nhấp vào đây để thêm tệp</Typography>
              {/* TODO: Get the accepted file types from the backend first before this */}
              {fileError && <Typography style={{ color: 'red' }}>{fileError}</Typography>}
              <input
                type="file"
                required = {true}
                hidden
                error={fileError}
                accept=".pdf , .docx , .doc , .pptx , .ppt , .xlsx , .xls"
                
                helperText={fileError&&"asdasdasd"}
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
        <Typography variant={'h4'} fontWeight={600} sx={{ marginTop: '90px', marginBottom: '31px' }}>Thiết lập in</Typography>
        <Stack direction={'row'} sx={{ marginBottom: '24px' }}>

          <Stack sx={{ width: '170.75px' }}>
            <Typography variant={'h5'}>Cỡ giấy</Typography>
          </Stack>

          {/*    drop down list*/}
          <SelectSize
            defaultValue={pageSize}
            onChange={(e) => setPageSize(e.target.value)}
          />

        </Stack>

        {/* THIS NEEDS TO BE IN SEPARATE FILES, BUT SOMEHOW I COULDNT FUCKING IMPORT IT BACK
                    SO I CHOOSE THIS FUCKING NONSENSE WAY.
                    GOD SAVES ME
                    */}

        <Stack direction={'row'} >
          <Stack sx={{ width: '170.75px' }}>
            <Typography variant={'h5'}>Các trang...</Typography>
          </Stack>

          <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '100px' }}>
            <TextField
              id="printingPages"
              sx={{ borderRadius: '20px' }}
              error={pagesError}
              helperText={pagesError && "Chỉ chấp nhận các con số được cách bởi đấu phẩy"}
              onChange={handlePagesInput}
              placeholder="Nhập các trang (v.d., 1, 2, 3)"
              required={true}
              
            />
            <FileCopyIcon
              sx={{ margin: 2 }}
            />
          </Box>
        </Stack>

        <Stack direction={'row'}>

          <Typography variant={'h5'}>Tùy chọn mặt in</Typography>
          {/*    2 check boxes*/}
          <Stack direction={'row'} sx={{ marginLeft: '100px' }}>
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
      {/*FOOTER*/}
      <Stack direction={'row'} sx={{ justifyContent: 'space-between', marginTop: '10px' }}>
        <Link to={ROUTES.PAYMENT}>
          <Button variant='contained' sx={{ borderRadius: '20px', width: '160px' }}>
            Mua thêm
          </Button>
        </Link>

        <Stack direction={'row'} spacing={'34px'}>
          <Link to={ROUTES.ROOT}>
            <Button variant='outlined' sx={{
              borderRadius: '20px',
              color: 'black',
              '&:hover': { backgroundColor: 'white' },
              width: '160px'
            }}>
              Hủy
            </Button>
          </Link>


          {/*THIS IS THE MODAL FOR "CẢM ƠN BẠN"
                        I ENCOUNTERED THE PROBLEM OF CANNOT IMPORT COMPONENT
                    */}
          <Button variant='contained' sx={{ borderRadius: '20px', width: '160px' }} onClick={handleOpen}>
            Xác nhận
          </Button>
          <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 350, height: 180, bgcolor: 'background.paper', p: 4, borderRadius: 5 }}>
              <Typography id="modal-modal-title" variant="h5" component="h2" align='center'>Gửi yêu cầu in thành công</Typography>
              <Stack spacing='50px'>
                <Typography id="modal-modal-description" variant="h6" sx={{ mt: 2 }} align='center'>Cám ơn bạn</Typography>

                <Box sx={{ position: 'absolute', right: '125px' }}>
                  <Button variant='contained' sx={{ width: 100, height: 30, borderRadius: 100 }} onClick={handleClose}>Trở về</Button>
                </Box>
              </Stack>
            </Box>
          </Modal>
        </Stack>

      </Stack>

    </Stack>
  );
};

export { PrintRequestContent };
