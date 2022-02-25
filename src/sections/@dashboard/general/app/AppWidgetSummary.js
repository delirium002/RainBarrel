import PropTypes from 'prop-types';
import ReactApexChart from 'react-apexcharts';
// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Card, Typography, Stack } from '@mui/material';
// utils
import { fNumber, fPercent } from '../../../../utils/formatNumber';
// components
import Iconify from '../../../../components/Iconify';

// ----------------------------------------------------------------------

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

const ShareIconWrapperStyle = styled('div')(({ theme }) => ({
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

// ----------------------------------------------------------------------

// AppWidgetSummary.propTypes = {
//   chartColor: PropTypes.string.isRequired,
//   chartData: PropTypes.arrayOf(PropTypes.number).isRequired,
//   percent: PropTypes.number.isRequired,
//   title: PropTypes.string.isRequired,
//   total: PropTypes.number.isRequired,
// };

export default function AppWidgetSummary({ title, description, code, total }) {
  const theme = useTheme();

  const percent = 40;

  return (
    <Card sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, pl: 4, pr: 4 }}>
      <Stack direction="row" sx={{ width: '35vw', justifyContent: 'space-between' }}>
        <Stack>
          <Typography variant="subtitle2" color="#93A3AB">
            {title}
          </Typography>

          <Box sx={{ display: 'flex' }}>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h5">{description}</Typography>
            </Box>
            <Box sx={{ ml: 3 }}>
              <Typography variant="h5" color="#FAAD14">
                {code}
              </Typography>
            </Box>
          </Box>

          {total && <Typography variant="h5">{fNumber(total)}</Typography>}
        </Stack>

        <Stack direction="row">
          <Box>
            <Typography variant="subtitle2" color="#93A3AB">
              Audience Size
            </Typography>
            <Typography variant="h5">{fNumber(760194)}</Typography>
          </Box>

          {percent && (
            <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 2, ml: 2 }}>
              <IconWrapperStyle
                sx={{
                  ...(percent < 0 && {
                    color: 'error.main',
                    bgcolor: alpha(theme.palette.error.main, 0.16),
                  }),
                }}
              >
                <Iconify
                  width={16}
                  height={16}
                  icon={percent >= 0 ? 'eva:trending-up-fill' : 'eva:trending-down-fill'}
                />
              </IconWrapperStyle>
              <Typography component="span" variant="subtitle2">
                {percent > 0 && '+'}
                {fPercent(percent)}
              </Typography>
            </Stack>
          )}
        </Stack>
      </Stack>

      <Stack flexDirection="row" sx={{ justifyContent: 'end', pt: 3, pb: 3.5 }}>
        <Box sx={{ ml: 2 }}>
          <ShareIconWrapperStyle>
            <Iconify width={20} height={20} icon="eva:star-fill" />
          </ShareIconWrapperStyle>
        </Box>
        <Box sx={{ ml: 2 }}>
          <ShareIconWrapperStyle>
            <Iconify width={20} height={20} icon="eva:download-fill" />
          </ShareIconWrapperStyle>
        </Box>
        <Box sx={{ ml: 2 }}>
          <ShareIconWrapperStyle>
            <Iconify width={20} height={20} icon="eva:share-fill" />
          </ShareIconWrapperStyle>
        </Box>
      </Stack>
    </Card>
  );
}
