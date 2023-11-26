import React from 'react'
import {Button, Paper, Stack, Typography} from '@mui/material'

import SelectQuantity from './SelectQuantity'
import ConfirmModal from "./ConfirmModal";

export const PaperBar4 = () => {
    const [quantity, setQuantity] = React.useState(0)
    const handleIncrement = () => {
        setQuantity(quantity + 1)
    }
    const handleDecreasement = () => {
        if (quantity > 0)
            setQuantity(quantity - 1)
        else
            setQuantity(0)
    }
    const handleInputChange = (e) => {
        let newValue = parseInt(e.target.value, 10);
        if (!isNaN(newValue) && newValue > 0) {
            setQuantity(newValue);
        }
    }

    const [modalOpen, setModalOpen] = React.useState(false)

    const handleOpen = () => setModalOpen(true);
    const handleClose = () => setModalOpen(false);

    return (
        <Paper elevation={2}
               sx={{backgroundColor: 'white', borderRadius: '20px', height: '133px', alignContent: 'center', display: 'inline'}}>
            <Stack direction={'row'}
                   sx={{justifyContent: 'space-between', alignItems: 'flex-end', alignContent: 'center'}}>
                <Stack direction={'column'} sx={{marginLeft: '46px', marginTop: '32px'}}>
                    <Typography variant='h5'>
                        Hoặc chọn số tờ bạn mong muốn
                    </Typography>
                </Stack>


                <Stack direction={'row'} spacing={2} sx={{alignItems: 'flex-end' ,marginRight:'47px'}}>
                    <SelectQuantity quantity={quantity} onIncrement={handleIncrement} onDecrement={handleDecreasement}
                                    onInputChange={(e) => handleInputChange(e)}/>
                    <Button variant='contained'
                            sx={{backgroundColor: '#0F6CBF', color: 'white', borderRadius: '100px', alignContent: 'center'}}
                            onClick={handleOpen}>
                        Mua ngay
                    </Button>
                </Stack>

                <ConfirmModal paperQuantity={quantity} payAmount={10000 * quantity} open={modalOpen}
                              handleClose={handleClose}/>
            </Stack>
        </Paper>

    )
}
