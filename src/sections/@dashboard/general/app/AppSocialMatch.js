import PropTypes from 'prop-types';

import LinearProgress from '@mui/material/LinearProgress';

// @mui
import { Box, Card, CardHeader, Typography, Stack, Grid } from '@mui/material';
// _mock_
import { _appRelated } from '../../../../_mock';
// components
import Iconify from '../../../../components/Iconify';

// ----------------------------------------------------------------------

const data = [
  {
    icon: 'google',
    title: 'DV 360',
    value: 47,
  },
  {
    icon: 'google',
    title: 'TTD',
    value: 23,
  },
  {
    icon: 'facebook',
    title: 'Amazon',
    value: 21,
  },
  {
    icon: 'google',
    title: 'Meta',
    value: 27,
  },
  {
    icon: 'google',
    title: 'Google',
    value: 47,
  },
  {
    icon: 'google',
    title: 'Youtube',
    value: 47,
  },
];

export default function AppSocialMatch() {
  return (
    <Card sx={{ p: 2 }}>
      <CardHeader title="Social Match Rate" />
      <Stack sx={{ p: 2, pr: 0 }}>
        <Grid container spacing={3} sx={{ justifyContent: 'space-around' }}>
          {data.map((e, index) => (
            <Grid item sx={12} lg={6}>
              <ContentBox key={index} data={e} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Card>
  );
}

const ContentBox = ({ data }) => {
  const { icon, title, value } = data;
  return (
    <Box sx={{ mt: 2, width: '90%' }}>
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ mr: '5px' }}>
          <Iconify width={20} height={20} icon={`eva:${icon}-outline`} color="#615bfe" />
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
          <LinearProgress variant="determinate" value={value} color="secondary" style={{ color: '#605BFF' }} />
        </Box>
      </Box>
    </Box>
  );
};

ContentBox.propTypes = {
  data: PropTypes.shape({
    icon: PropTypes.string,
    title: PropTypes.string,
    value: PropTypes.number,
  }),
};
