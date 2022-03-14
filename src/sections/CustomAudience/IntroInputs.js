import { useState } from 'react';
import { Box, TextField, FormControl, Typography } from '@mui/material';
import { DateRangePicker, DatePicker } from '@mui/lab';

const IntroInputs = () => {
  const [value, setValue] = useState([null, null]);

  return (
    <Box
      sx={{
        display: 'grid',
        rowGap: 4,
        columnGap: 3,
        gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' },
      }}
    >
      <Box>
        <Typography>Email</Typography>
        <TextField color="secondary" name="email" label="Email" sx={{ backgroundColor: '#FAFAFB', width: '100%' }} />
      </Box>

      <Box>
        <Typography>Audience Name</Typography>
        <TextField
          color="secondary"
          name="name"
          label="Audience Name"
          sx={{ backgroundColor: '#FAFAFB', width: '100%' }}
        />
      </Box>

      <Box>
        <Typography>Client Name</Typography>
        <TextField
          color="secondary"
          name="client"
          label="Client Name"
          sx={{ backgroundColor: '#FAFAFB', width: '100%' }}
        />
      </Box>

      <Box>
        <Typography>Start and End date for device data</Typography>
        <DateRangePicker
          startText="Start date for device data"
          endText="End date for device data"
          calendars={2}
          value={value}
          format="dd/MM/yyyy"
          onChange={(newValue) => {
            setValue(newValue);
          }}
          sx={{ backgroundColor: '#FAFAFB', width: '100%' }}
          renderInput={(startProps, endProps) => (
            <>
              <TextField {...startProps} />
              <Box sx={{ mx: 2 }}> to </Box>
              <TextField {...endProps} />
            </>
          )}
        />
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography>End date for campaign</Typography>
        <FormControl sx={{ backgroundColor: '#FAFAFB', width: '100%' }}>
          <DatePicker
            // value={value}
            onChange={(newValue) => {
              // setValue(newValue);
            }}
            format="dd/MM/yyyy"
            sx={{ backgroundColor: '#FAFAFB' }}
            renderInput={(params) => <TextField {...params} />}
          />
        </FormControl>
      </Box>
    </Box>
  );
};

export default IntroInputs;
