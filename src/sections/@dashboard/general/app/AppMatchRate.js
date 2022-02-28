import PropTypes from 'prop-types';

import LinearProgress from '@mui/material/LinearProgress';

// @mui
import { Box, Card, CardHeader, Typography, Stack, Grid } from '@mui/material';

// components
import Iconify from '../../../../components/Iconify';

// ----------------------------------------------------------------------

AppMatchRate.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default function AppMatchRate({ title, color, heading, description, data }) {
  return (
    <Card sx={{ p: 2 }}>
      <CardHeader title={title} />
      <Stack sx={{ p: 2, pr: 0 }}>
        <Grid container spacing={3} sx={{ justifyContent: 'space-around' }}>
          {data.map((e, index) => (
            <Grid item key={index} sx={12} lg={6}>
              <ContentBox data={e} color={color} />
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

const ContentBox = ({ data, color }) => {
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
          <LinearProgress variant="determinate" value={value} color="secondary" style={{ color: '#000000' }} />
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
