import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';

// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Card, Typography, Stack, Grid } from '@mui/material';
// utils
import { fNumber, fPercent } from '../../../../utils/formatNumber';
// components
import Iconify from '../../../../components/Iconify';

ProgressWidgetSummary.propTypes = {
  polCount: PropTypes.number.isRequired,
  polPercent: PropTypes.number.isRequired,
  genderData: PropTypes.arrayOf(PropTypes.object).isRequired,
  ageRangeData: PropTypes.arrayOf(PropTypes.object).isRequired,
  parentData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default function ProgressWidgetSummary({ polCount, polPercent, genderData, ageRangeData, parentData }) {
  const theme = useTheme();

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

  return (
    <Card sx={{ alignItems: 'center', p: 2 }}>
      <Card sx={{ display: 'flex', alignItems: 'center', p: 2, backgroundColor: '#EEFBE8' }}>
        <Box sx={{ flexGrow: 1, color: '#11142D' }}>
          <Typography variant="subtitle2">Pol Count</Typography>
          <Typography variant="h5">{fNumber(polCount)}</Typography>
        </Box>

        {polPercent && (
          <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 2, mb: 1 }}>
            <IconWrapperStyle
              sx={{
                ...(polPercent < 0 && {
                  color: 'error.main',
                  bgcolor: alpha(theme.palette.error.main, 0.16),
                }),
              }}
            >
              <Iconify
                width={16}
                height={16}
                icon={polPercent >= 0 ? 'eva:trending-up-fill' : 'eva:trending-down-fill'}
              />
            </IconWrapperStyle>
            <Typography component="span" variant="subtitle2">
              {polPercent > 0 && '+'}
              {fPercent(polPercent)}
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
                <Grid item sx={{ minWidth: 110 }}>
                  <Typography variant="subtitle1" color="#7C7C7C">
                    {data.title}
                  </Typography>
                </Grid>
                <Grid xs item sx={{ mt: 1.2, color: '#fff' }}>
                  <LinearProgress
                    variant="determinate"
                    value={data.value}
                    color="secondary"
                    style={{ colorPrimary: '#605BFF' }}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1" color="#000" sx={{ minWidth: 35 }}>
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
                <Grid item sx={{ minWidth: 110 }}>
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
                <Grid item sx={{ minWidth: 50 }}>
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
            {parentData?.map((data, index) => (
              <Grid key={index} spacing={2} sx={{ pt: 1 }} container>
                <Grid item sx={{ minWidth: 110 }}>
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
                <Grid item sx={{ minWidth: 50 }}>
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
