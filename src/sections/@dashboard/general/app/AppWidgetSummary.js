// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Card, Typography, Stack, Skeleton } from '@mui/material';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { useNavigate } from 'react-router-dom';

import useAuth from '../../../../hooks/useAuth';
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
  const { user } = useAuth();
  const navigate = useNavigate();

  const theme = useTheme();

  const handleFavourite = () => {
    if (!user) {
      navigate('/auth/login');
    } else {
      console.log('user', user);
    }
  };

  return (
    <Card sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, pl: 4, pr: 4 }}>
      <Stack direction="row" sx={{ width: '60vw', justifyContent: 'space-between' }}>
        <Stack>
          <Typography variant="subtitle2" color="#93A3AB">
            Public Audience
          </Typography>

          {loading ? (
            <Skeleton variant="text" width="100%" height={15} />
          ) : (
            <Box>
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h5">{audience}</Typography>
              </Box>
              <Box>
                <Typography variant="subtitle2" color="#929292">
                  ID: #{audienceCode}
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
            <Stack direction="row" alignItems="center" spacing={1} sx={{ ml: 2 }}>
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

        <Stack>
          <Typography variant="subtitle2" color="#93A3AB">
            Country
          </Typography>

          {loading ? (
            <Skeleton variant="text" width="100%" height={15} />
          ) : (
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h5">Worldwide</Typography>

              {/* <FormControl fullWidth sx={{ border: 'none', outline: 'none' }}>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  sx={{ border: 'none', outline: 'none' }}
                  // labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value="Worldwide"
                  label="Age"
                  // onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl> */}
            </Box>
          )}
        </Stack>

        <Stack>
          <Typography variant="subtitle2" color="#93A3AB">
            Audience Type
          </Typography>

          {loading ? (
            <Skeleton variant="text" width="100%" height={15} />
          ) : (
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h5">All Visitors</Typography>
            </Box>
          )}
        </Stack>
      </Stack>

      <Stack flexDirection="row" sx={{ justifyContent: 'end', pt: 3, pb: 3.5 }}>
        <Box sx={{ ml: 2 }}>
          <ShareIconWrapperStyle onClick={handleFavourite}>
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
