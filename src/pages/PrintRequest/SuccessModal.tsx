import * as React from 'react';
import {Box, Button, Modal, Stack, Typography} from "@mui/material";

const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);
 const SuccessModal = () => {
    return (
        <>
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
 </>
    );
};

export default SuccessModal;
