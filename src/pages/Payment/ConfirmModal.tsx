// @ts-ignore
import React from 'react';
import {Box, Button, Modal, Stack, Typography} from "@mui/material";

import {useAuth} from "../../contexts/AuthContext";
import { studentMapper } from '../../contexts/mapper/StudentMapper';

import { useState, useEffect } from 'react';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px',
    boxShadow: 24,
    p: 4,
    borderRadius:'20px'
};
interface Props
{
    paperQuantity:number
    payAmount: number
    open:boolean
    handleClose:()=>void ;

}
const ConfirmModal = ({handleClose,open,paperQuantity,payAmount}:Props) => {

    const { currentUser } = useAuth();    
    const [paperAdd, setPaperAdd] = useState(paperQuantity);
    const [ active, setActive] = React.useState(open);

    useEffect(() => {
        setActive(open);
    }, [open]);

    useEffect(() => {
        setPaperAdd(paperQuantity);
    }
    , [paperQuantity]);

    const handlePay = async () => {
        await studentMapper.addPageBalance(currentUser.uid, paperAdd);
        handleClose();
    }

    return (
        <Modal
            open={active}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Stack direction = {'column'} spacing={'24px'} >
                    <Stack sx={{alignItems:'center'}}>
                        <Typography variant={'h5'} sx={{fontWeight:'bold'}}>
                            Thông tin giao dịch
                        </Typography>
                    </Stack>
                    <Stack direction={'column'} sx={{justifyContent:'center',alignItems:'center'}}>
                        <Typography variant={'h6'}>
                            Lượng giấy A4 bạn mua: {paperQuantity}
                        </Typography>
                        <Typography variant={'h6'} sx={{marginLeft:'inherit'}}>
                            Tổng số tiền: {payAmount} <code>₫</code>
                        </Typography>
                    </Stack>

                    <Button 
                    variant='contained' 
                    sx={{borderRadius:'100px'}} 
                    href={'https://bkpay.hcmut.edu.vn/bkpay/'} 
                    onClick={handlePay}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Tiếp tục đến bkpay
                    </Button>
                    <Button 
                    variant='contained' 
                    sx={{borderRadius:'100px'}} 
                    onClick={handleClose}
                >
                    Cancel
                </Button>
                </Stack>
            </Box>

        </Modal>
    );
};

export default ConfirmModal;
