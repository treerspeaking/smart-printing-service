import * as React from 'react';

import MenuItem from "@mui/material/MenuItem";

import { TextField } from '@mui/material';

const sizes = ["A1", "A2", "A3", "A4", "A5"];

interface Props {
  defaultValue: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SelectSize = ( {onChange, defaultValue} ) => {

    return (
        <TextField
          id="select-paper-size"
          select
          label="Cỡ"
          defaultValue={defaultValue}
          onChange={e => onChange(e)}
          sx={{ marginLeft:'100px', width: 75 }}
        >
          {sizes.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
    );
};

export default SelectSize;
