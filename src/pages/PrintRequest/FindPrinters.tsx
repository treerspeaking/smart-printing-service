import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { TextField } from '@mui/material';

import { useState } from 'react';

// interface Props {

//   selectedPrinterDocumentID: string;
//   printers: string[];
//   onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
// }

const FindPrinters = ({ onChange, selectedPrinterDocumentID, printers,error }) => {
  const handlePrinterChange = (event) => {
    console.log(event.target.value);
    if (event.target && 'value' in event.target) {
      onChange(event);
    }
  };

  return (
    <TextField
      id="select-printers"
      select
      label="Máy in"
      error={error}
      helperText={error&&"Vui lòng chọn máy in"}
      value={selectedPrinterDocumentID}  // Change this prop name
      onChange={handlePrinterChange}
      sx={{ marginLeft: '100px', width: 100 }}
    > 
      {printers ? printers.map((printer) => (
        <MenuItem value={printer}>
          {`${printer.Building}-${printer.Room}`}
        </MenuItem>
      )) : null}
    </TextField>
  );
};

export default FindPrinters;
