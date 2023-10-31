import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function DateCalendarValue() {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2023-10-28'));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        
          <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} sx={{backgroundColor:"#E9E7EB", borderRadius:10,maxHeight:'80%'}} />
        
      
    </LocalizationProvider>
  );
}