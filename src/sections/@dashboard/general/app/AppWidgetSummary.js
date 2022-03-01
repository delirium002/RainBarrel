// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Card, Typography, Stack, Skeleton } from '@mui/material';
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

const ShareIconWrapperStyle = styled('div')(() => ({
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

export default function AppWidgetSummary({ loading, audience, audienceCode, audienceSize, audiencePercent }) {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, pl: 4, pr: 4 }}>
      <Stack direction="row" sx={{ width: '45vw', justifyContent: 'space-between' }}>
        <Stack>
          <Typography variant="subtitle2" color="#93A3AB">
            Public Audience
          </Typography>

          {loading ? (
            <Skeleton variant="text" width="100%" height={15} />
          ) : (
            <Box sx={{ display: 'flex' }}>
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h5">{audience}</Typography>
              </Box>
              <Box sx={{ ml: 3 }}>
                <Typography variant="h5" color="#FAAD14">
                  #{audienceCode}
                </Typography>
              </Box>
            </Box>
          )}
        </Stack>

        <Stack direction="row">
          <Box>
            <Typography variant="subtitle2" color="#93A3AB">
              Audience Size
            </Typography>

            {loading ? (
              <Skeleton variant="text" width="100%" height={15} />
            ) : (
              <Typography variant="h5">{fNumber(audienceSize)}</Typography>
            )}
          </Box>

          {audiencePercent && (
            <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 2, ml: 2 }}>
              <IconWrapperStyle
                sx={{
                  ...(audiencePercent < 0 && {
                    color: 'error.main',
                    bgcolor: alpha(theme.palette.error.main, 0.16),
                  }),
                }}
              >
                <Iconify
                  width={16}
                  height={16}
                  icon={audiencePercent >= 0 ? 'eva:trending-up-fill' : 'eva:trending-down-fill'}
                />
              </IconWrapperStyle>
              <Typography component="span" variant="subtitle2">
                {audiencePercent > 0 && '+'}
                {fPercent(audiencePercent)}
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
