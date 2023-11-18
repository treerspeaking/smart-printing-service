import React, { useState } from 'react';
import Input from '@mui/material/Input';
import IconButton from '@mui/material/IconButton';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Stack } from '@mui/material';
interface Props
{

    quantity:number
    onIncrement: ()=>void
    onDecrement: () => void
    onInputChange: (e) =>void
}
const SelectQuantity = ({quantity,onIncrement,onDecrement,onInputChange}:Props) => {

    return (
        <div>
            <Stack direction={'row'} >
                <Input
                    value={quantity}
                    onChange={onInputChange}
                    inputProps={{
                        style: {
                            textAlign: 'center',
                            width: '50px', // Adjust the width as needed
                        },
                    }}
                />
                <Stack direction={'column'}>
                    <IconButton
                        aria-label="Increment"
                        onClick={onIncrement}
                    >
                        <ArrowDropUpIcon />
                    </IconButton>

                    <IconButton
                        aria-label="Decrement"
                        onClick={onDecrement}
                    >
                        <ArrowDropDownIcon />
                    </IconButton>


                </Stack>
            </Stack>
        </div>
    );
};

export default SelectQuantity;
