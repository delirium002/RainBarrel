import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Stack, Typography } from '@mui/material';
import Iconify from '../../components/Iconify';

const VisitorInput = () => {
  const [numberValue, setNumberValue] = useState('');

  const InputBox = styled(Box)(() => ({
    border: '1px solid #F0F0F0',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    cursor: 'pointer',
  }));

  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Box>
      <Stack direction="row">
        <Typography>Minimum number of days visited</Typography>
        <Iconify
          width={20}
          height={20}
          sx={{ mt: 0.3, ml: 0.5, color: '#898E94' }}
          icon={'eva:question-mark-circle-outline'}
        />
      </Stack>

      <Stack direction="row" sx={{ mt: 1.5 }}>
        <Typography sx={{ mt: 0.3 }}>Any Visitor</Typography>

        {number.map((item, index) => (
          <InputBox
            key={index}
            sx={{
              pt: 0.4,
              color: item === numberValue ? '#fff' : '#000',
              backgroundColor: item === numberValue ? '#605BFF' : '#fff',
            }}
            onClick={() => setNumberValue(item)}
          >
            {item}
          </InputBox>
        ))}

        <Typography sx={{ mt: 0.5, ml: 1 }}>Frequent Visitor</Typography>
      </Stack>
    </Box>
  );
};

export default VisitorInput;
