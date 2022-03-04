import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Card, Typography, Stack, Skeleton } from '@mui/material';

import useAuth from '../../../hooks/useAuth';
// utils
import { fNumber, fPercent } from '../../../utils/formatNumber';
// components
import Iconify from '../../../components/Iconify';

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

// ----------------------------------------------------------------------

export default function AppWidgetSummary({ loading, audience, audienceCode, audienceSize, audiencePercent }) {
  const { user } = useAuth();

  const { authData } = useSelector((state) => state.getDemoAuthDataReducer);

  const theme = useTheme();
  const dispatch = useDispatch();

  const percent = 10;

  return (
    <Card sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, pl: 4, pr: 4 }}>
      <Stack>
        {loading ? (
          <Skeleton variant="text" width="100%" height={15} />
        ) : (
          <Stack direction="row">
            <Typography variant="subtitle2" color="#000">
              Single Father in LA
            </Typography>

            <Box sx={{ ml: 1 }}>
              <Typography variant="subtitle2" color="#929292">
                #456785
              </Typography>
            </Box>
          </Stack>
        )}

        <Stack sx={{ mt: 1 }}>
          {percent && (
            <Stack direction="row" alignItems="center" spacing={1}>
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

        <Stack sx={{ mt: 1 }}>
          <Box>
            {loading ? (
              <Skeleton variant="text" width="100%" height={15} />
            ) : (
              <Typography variant="h5">{fNumber(18756)}</Typography>
            )}
          </Box>
        </Stack>
      </Stack>
    </Card>
  );
}
