import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function DateCalendarValue() {
  // create a new date object with // "Tue Aug 23 2022 14:47:12 GMT-0700 (Pacific Daylight Time)

  const objectDate = new Date();
  const [value, setValue] = React.useState<Dayjs | null>(dayjs(objectDate));

  return (
    <>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        
          <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} sx={{backgroundColor:"#E9E7EB", borderRadius:10,minWidth: '320px',maxHeight:'320px', margin:'0px'}} />
        
      
    </LocalizationProvider>
    
  </>
    
  );
}
