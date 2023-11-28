import * as React from 'react';

import MenuItem from "@mui/material/MenuItem";

import { TextField } from '@mui/material';

const sizes = [
    {
      value: 'a1',
      label: 'A1',
    },
    {
      value: 'a2',
      label: 'A2',
    },
    {
      value: 'a3',
      label: 'A3',
    },
    {
      value: 'a4',
      label: 'A4',
    },
    {
        value: 'a5',
        label: 'A5',
    },
];

interface Props {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SelectSize = ( {onChange} ) => {

    return (
        <TextField
          id="select-paper-size"
          select
          label="Select"
          defaultValue="a4"
          onChange={e => onChange(e)}
          sx={{marginLeft:'100px'}}
        >
          {sizes.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
    );
};

export default SelectSize;
