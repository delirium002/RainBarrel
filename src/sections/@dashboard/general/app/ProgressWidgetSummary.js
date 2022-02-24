import PropTypes from 'prop-types';
import ReactApexChart from 'react-apexcharts';

import LinearProgress from '@mui/material/LinearProgress';

// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Card, Typography, Stack, Grid } from '@mui/material';
// utils
import { fNumber, fPercent } from '../../../../utils/formatNumber';
// components
import Iconify from '../../../../components/Iconify';

// AppWidgetSummary.propTypes = {
//   chartColor: PropTypes.string.isRequired,
//   chartData: PropTypes.arrayOf(PropTypes.number).isRequired,
//   Number: PropTypes.number.isRequired,
//   title: PropTypes.string.isRequired,
//   total: PropTypes.number.isRequired,
// };

export default function ProgressWidgetSummary() {
  const theme = useTheme();

  const genderData = [
    { title: 'Male', value: 40 },
    { title: 'Female', value: 80 },
  ];

  const ageRangeData = [
    { title: '12-18', value: 3 },
    { title: '19-25', value: 70 },
    { title: '26-32', value: 27 },
    { title: '33-39', value: 0 },
    { title: '40-46', value: 0 },
    { title: '50+', value: 0 },
  ];

  const parentalData = [
    { title: 'Parents', value: 0 },
    { title: 'Non-Parents', value: 100 },
  ];

  const IconWrapperStyle = styled('div')(({ theme }) => ({
    width: 24,
    height: 24,
    display: 'flex',
    borderRadius: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.success.main,
    backgroundColor: alpha(theme.palette.success.main, 0.16),
  }));

  const title = 'Pol Count';
  const total = 2644785;
  const percent = 40;

  return (
    <Card sx={{ alignItems: 'center', p: 2 }}>
      <Card sx={{ display: 'flex', alignItems: 'center', p: 2, backgroundColor: '#EEFBE8' }}>
        <Box sx={{ flexGrow: 1, color: '#11142D' }}>
          <Typography variant="subtitle2">{title}</Typography>

          {total && <Typography variant="h5">{fNumber(total)}</Typography>}
        </Box>

        {percent && (
          <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 2, mb: 1 }}>
            <IconWrapperStyle
              sx={{
                ...(percent < 0 && {
                  color: 'error.main',
                  bgcolor: alpha(theme.palette.error.main, 0.16),
                }),
              }}
            >
              <Iconify width={16} height={16} icon={percent >= 0 ? 'eva:trending-up-fill' : 'eva:trending-down-fill'} />
            </IconWrapperStyle>
            <Typography component="span" variant="subtitle2">
              {percent > 0 && '+'}
              {fPercent(percent)}
            </Typography>
          </Stack>
        )}
      </Card>

      <Box sx={{ display: 'flex', pt: 2 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h5" color="#11142D">
            Audience Demographic Profile
          </Typography>

          <Box sx={{ pt: 1 }}>
            <Typography variant="h6" color="#11142D">
              Gender
            </Typography>
            {genderData?.map((data, index) => (
              <Grid key={index} spacing={2} sx={{ pt: 1 }} container>
                <Grid item>
                  <Typography variant="subtitle1" color="#7C7C7C">
                    {data.title}
                  </Typography>
                </Grid>
                <Grid xs item sx={{ mt: 1.2 }}>
                  <LinearProgress
                    variant="determinate"
                    value={data.value}
                    color="secondary"
                    style={{ color: '#605BFF' }}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1" color="#000">
                    {fNumber(data.value)}%
                  </Typography>
                </Grid>
              </Grid>
            ))}
          </Box>

          <Box sx={{ pt: 2 }}>
            <Typography variant="h6" color="#11142D">
              Age Range
            </Typography>
            {ageRangeData?.map((data, index) => (
              <Grid key={index} spacing={2} sx={{ pt: 1 }} container>
                <Grid item>
                  <Typography variant="subtitle1" color="#7C7C7C">
                    {data.title}
                  </Typography>
                </Grid>
                <Grid xs item sx={{ mt: 1.2 }}>
                  <LinearProgress
                    variant="determinate"
                    value={data.value}
                    color="secondary"
                    style={{ color: '#605BFF' }}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1" color="#000">
                    {fNumber(data.value)}%
                  </Typography>
                </Grid>
              </Grid>
            ))}
          </Box>

          <Box sx={{ pt: 2 }}>
            <Typography variant="h6" color="#11142D">
              Parental Status
            </Typography>
            {parentalData?.map((data, index) => (
              <Grid key={index} spacing={2} sx={{ pt: 1 }} container>
                <Grid item>
                  <Typography variant="subtitle1" color="#7C7C7C">
                    {data.title}
                  </Typography>
                </Grid>
                <Grid xs item sx={{ mt: 1.2 }}>
                  <LinearProgress
                    variant="determinate"
                    value={data.value}
                    color="secondary"
                    style={{ color: '#605BFF' }}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1" color="#000">
                    {fNumber(data.value)} %
                  </Typography>
                </Grid>
              </Grid>
            ))}
          </Box>
        </Box>
      </Box>
    </Card>
  );
}
