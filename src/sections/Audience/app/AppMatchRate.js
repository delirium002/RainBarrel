import { useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';

// @mui
import { Box, Button, Card, CardHeader, Typography, Stack, Grid } from '@mui/material';

// components
import Iconify from '../../../components/Iconify';
import AppModal from '../../../components/AppModal';

// ----------------------------------------------------------------------

export default function AppMatchRate({ user, title, color, heading, description, data }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');

  const handleContactModal = () => {
    if (!user) {
      setModalType('auth');
      setModalOpen(true);
    } else {
      setModalType('contact');
      setModalOpen(true);
    }
  };

  return (
    <Card sx={{ p: 2 }}>
      <AppModal
        type={modalType}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        title={modalType === 'contact' ? 'Contact us' : 'You need an Account to use this feature'}
        description={
          modalType === 'contact'
            ? 'Please share your query with us using the form below, also upload the document if you have any.'
            : undefined
        }
      />

      <CardHeader title={title} />
      <Stack sx={{ p: 2, pr: 0 }}>
        <Grid container spacing={3} sx={{ justifyContent: 'space-around' }}>
          {data?.map((e, index) => (
            <Grid item key={index} sx={12} lg={6}>
              <ContentBox data={e} color={color} handleClick={handleContactModal} />
            </Grid>
          ))}
        </Grid>
      </Stack>
      {heading && (
        <Stack sx={{ p: 2, pt: 3, pr: 0 }}>
          <Typography variant="h5" color="#11142D" sx={{ mb: 2 }}>
            {heading}
          </Typography>
          <Typography variant="body1" color="#929292" sx={{ mb: 2 }}>
            {description}
          </Typography>
        </Stack>
      )}
    </Card>
  );
}

const ContentBox = ({ data, color, handleClick }) => {
  const { icon, title, value } = data;

  return (
    <Box sx={{ mt: 2, width: '90%' }}>
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ mr: '5px' }}>
          <Iconify width={20} height={20} icon={`eva:${icon}-outline`} color={color} />
        </Box>
        <Box>
          <Typography variant="subtitle2" color="#808191">
            {title}
          </Typography>
        </Box>
      </Box>
      <Box>
        <Box>
          <Typography variant="h4" color="#11142D">
            {value}%
          </Typography>
        </Box>
        <Box>
          {value !== 0 ? (
            <LinearProgress variant="determinate" value={value} color="secondary" sx={{ color: '#000000', mt: 2 }} />
          ) : (
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              sx={{ color: '#000', border: '0.5px solid #D9D9D9' }}
              onClick={handleClick}
            >
              Contact Us
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};
