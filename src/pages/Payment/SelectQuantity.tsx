import React, { useState } from 'react';
import Input from '@mui/material/Input';
import IconButton from '@mui/material/IconButton';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Stack } from '@mui/material';
const SelectQuantity = () => {
    const [quantity, setQuantity] = useState(0);

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };
    const handleInputChange = (e) => {
        const newValue = parseInt(e.target.value, 10);
        if (!isNaN(newValue)) {
            setQuantity(newValue);
        }
    };
    return (
        <div>
            <Stack direction={'row'} sx={{}}>
                <Input
                    value={quantity}
                    onChange={handleInputChange}
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
                        onClick={handleIncrement}
                    >
                        <ArrowDropUpIcon />
                    </IconButton>

                    <IconButton
                        aria-label="Decrement"
                        onClick={handleDecrement}
                    >
                        <ArrowDropDownIcon />
                    </IconButton>


                </Stack>
            </Stack>
        </div>
    );
};

export default SelectQuantity;
