import { styled } from '@mui/material/styles';
import { Box, Stack, Button, Typography } from '@mui/material';
import Iconify from '../../components/Iconify';

const Geography = () => {
  const InputButton = styled(Button)(() => ({
    color: '#000',
    fontSize: '14px',
    fontWeight: 300,
    border: '1px dashed #605BFF',
    backgroundColor: 'rgba(96, 91, 255, 0.05)',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: 'rgba(96, 91, 255, 0.05)',
    },
  }));

  return (
    <Box>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h4" sx={{ mb: 1.5 }}>
          Geography
        </Typography>
        <Box
          sx={{ p: 0.6, display: 'flex', width: '20%', color: '#fff', backgroundColor: '#0050B3', borderRadius: '4px' }}
        >
          <Iconify width={20} height={20} sx={{ mt: 0.2 }} icon={'eva:arrow-ios-forward-outline'} />
          <Typography>Link to our CSV Template</Typography>
        </Box>

        <Box
          sx={{
            mt: 2,
            display: 'grid',
            rowGap: 4,
            columnGap: 3,
            gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' },
          }}
        >
          <Box sx={{ width: '100%' }}>
            <Stack direction="row">
              <Typography>Inclusions</Typography>
              <Iconify
                width={20}
                height={20}
                sx={{ mt: 0.3, ml: 0.5, color: '#898E94' }}
                icon={'eva:question-mark-circle-outline'}
              />
            </Stack>
            <InputButton variant="contained" size="large" sx={{ width: '100%' }}>
              Upload CSV File
            </InputButton>
          </Box>
          <Box sx={{ width: '100%' }}>
            <Stack direction="row">
              <Typography>Exclusions</Typography>
              <Iconify
                width={20}
                height={20}
                sx={{ mt: 0.3, ml: 0.5, color: '#898E94' }}
                icon={'eva:question-mark-circle-outline'}
              />
            </Stack>
            <InputButton type="input" variant="contained" size="large" sx={{ width: '100%' }}>
              Upload CSV File
            </InputButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Geography;
