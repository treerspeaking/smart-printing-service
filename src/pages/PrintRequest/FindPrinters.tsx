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


interface Props {
    defaultValue: string;
    printers: string[];
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }
  
const FindPrinters = ( {onChange, defaultValue, printers} ) => {

    return (
        <TextField
          id="select-printers"
          select
          label="Máy in"
          defaultValue={defaultValue}
          onChange={e => onChange(e)}
          sx={{marginLeft:'100px', width: 100}}
        >
          {printers.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
    );
};

export default FindPrinters;
