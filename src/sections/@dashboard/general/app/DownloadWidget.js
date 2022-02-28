// @mui
import { styled } from '@mui/material/styles';
import { Box, Card } from '@mui/material';
// components
import Iconify from '../../../../components/Iconify';

const IconWrapperStyle = styled('div')(() => ({
  width: 32,
  height: 32,
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#d9d9d9',
  border: '1px solid #d9d9d9',
  backgroundColor: '#fff',
}));

export default function DownloadWidget() {
  return (
    <Card sx={{ display: 'flex', alignItems: 'end', justifyContent: 'end', pt: 3, pb: 3.5 }}>
      <Box sx={{ flexGrow: 0.1 }}>
        <IconWrapperStyle>
          <Iconify width={20} height={20} icon="eva:star-fill" />
        </IconWrapperStyle>
      </Box>
      <Box sx={{ flexGrow: 0.1 }}>
        <IconWrapperStyle>
          <Iconify width={20} height={20} icon="eva:download-fill" />
        </IconWrapperStyle>
      </Box>
      <Box sx={{ flexGrow: 0.1 }}>
        <IconWrapperStyle>
          <Iconify width={20} height={20} icon="eva:share-fill" />
        </IconWrapperStyle>
      </Box>
    </Card>
  );
}
