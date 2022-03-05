// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Card, Typography, Stack, Grid, Skeleton, Divider } from '@mui/material';
// utils
import { fNumber, fPercent } from '../../../../utils/formatNumber';
// components
import Iconify from '../../../../components/Iconify';

export default function ProgressWidgetSummary({ loading, polCount, polPercent, genderData, ageRangeData, parentData }) {
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
      <Stack direction="row" sx={{ pt: 1 }}>
        <Box sx={{ flexGrow: 1, color: '#11142D' }}>
          <Typography variant="h5" color="#11142D">
            POI Count
          </Typography>

          {loading ? (
            <Skeleton variant="text" width="100%" height={10} />
          ) : (
            <Typography variant="subtitle2" component="p" color="#7C7C7C" sx={{ pt: 2 }}>
              {fNumber(polCount)}
            </Typography>
          )}
        </Box>

        {polPercent && (
          <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 2, mb: 1, pt: 2 }}>
            <Typography component="span" variant="subtitle2">
              {polPercent > 0 && '+'}
              {fPercent(polPercent)}
            </Typography>

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
                icon={polPercent >= 0 ? 'eva:arrow-upward-fill' : 'eva:arrow-downward-fill'}
              />
            </IconWrapperStyle>
          </Stack>
        )}
      </Stack>

      <Stack direction="row" sx={{ pt: 2 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h5" color="#11142D">
            Audience Demographic Profile
          </Typography>

          <Box sx={{ pt: 1 }}>
            <Typography variant="h6" color="#11142D">
              Gender
            </Typography>

            {loading ? (
              <Skeleton variant="text" width="100%" height={20} />
            ) : (
              genderData?.map((data, index) => (
                <Box key={index}>
                  <Box spacing={2} sx={{ display: 'flex', justifyContent: 'space-between', pt: 1, pb: 0.5 }} container>
                    <Box>
                      <Typography variant="subtitle1" color="#7C7C7C">
                        {data.title}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" color="#000">
                        {fNumber(data.value)}%
                      </Typography>
                    </Box>
                  </Box>
                  <Divider />
                </Box>
              ))
            )}
          </Box>

          <Stack sx={{ pt: 2 }}>
            <Typography variant="h6" color="#11142D">
              Age Range
            </Typography>

            {loading ? (
              <Skeleton variant="text" width="100%" height={20} />
            ) : (
              ageRangeData?.map((data, index) => (
                <Box key={index}>
                  <Box spacing={2} sx={{ display: 'flex', justifyContent: 'space-between', pt: 1, pb: 0.5 }} container>
                    <Box>
                      <Typography variant="subtitle1" color="#7C7C7C">
                        {data.title}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" color="#000">
                        {fNumber(data.value)}%
                      </Typography>
                    </Box>
                  </Box>
                  <Divider />
                </Box>
              ))
            )}
          </Stack>
        </Box>
      </Stack>
    </Card>
  );
}
