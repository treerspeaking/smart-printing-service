// @ts-ignore
import React from 'react'
import {Button, Paper, Stack, Typography} from '@mui/material'
import ConfirmModal from "./ConfirmModal";

interface Props {
    bgColor: string
    buttonColor: string
    buttonTextColor: string
    content: string
    buttonHoverColor: string
    paperQuantity: number
    payAmount: number
}

export const PaperBar2 = ({bgColor, buttonColor, content, buttonTextColor, buttonHoverColor, paperQuantity, payAmount}: Props) => {
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    return (


        <Paper elevation={2}
               sx={{backgroundColor: bgColor, borderRadius: '20px', height: '133px', alignContent: 'center', display: 'inline'}}>
            <Stack direction={'row'}
                   sx={{justifyContent: 'space-between', alignItems: 'flex-end', alignContent: 'center'}}>
                <Stack direction={'column'} sx={{marginLeft: '46px', marginTop: '32px'}}>
                    <Typography variant='h4'>
                        {content}
                    </Typography>
                </Stack>

                <Button variant='contained'
                        sx={{
                            backgroundColor: buttonColor, color: buttonTextColor, borderRadius: '100px',
                            marginRight: '47px', alignContent: 'center', '&:hover': {backgroundColor: buttonHoverColor}
                        }}
                        onClick={handleOpen}>
                    Mua ngay
                </Button>
                <ConfirmModal paperQuantity={paperQuantity} payAmount={payAmount} open={open}
                              handleClose={handleClose}/>
            </Stack>
        </Paper>

    )
}
