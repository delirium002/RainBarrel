import PropTypes from 'prop-types';

import LinearProgress from '@mui/material/LinearProgress';

// @mui
import { Box, Card, CardHeader, Typography, Stack, Grid } from '@mui/material';

// ----------------------------------------------------------------------

AppSimilarMatch.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default function AppSimilarMatch({ title, color, data }) {
  return (
    <Card sx={{ p: 2 }}>
      <CardHeader title={title} />
      <Stack sx={{ p: 2, pr: 0 }}>
        <Grid container sx={{ justifyContent: 'space-around' }}>
          {data.map((e, index) => (
            <Grid item key={index} sx={12} md={3} lg={3}>
              <ContentBox color={color} data={e} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Card>
  );
}

const ContentBox = ({ data }) => {
  const { title, value } = data;
  return (
    <Box
      sx={{
        mt: 1,
        p: 3,
        border: '1px solid #E4E4E4',
      }}
    >
      <Box sx={{ display: 'flex' }}>
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
