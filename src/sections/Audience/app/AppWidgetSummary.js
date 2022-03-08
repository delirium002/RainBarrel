import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Card, Typography, Stack, Skeleton } from '@mui/material';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// utils
import { fNumber, fPercent } from '../../../utils/formatNumber';
// components
import Iconify from '../../../components/Iconify';

import AppModal from '../../../components/AppModal';
import AppPopOver from './AppPopOver';

import { getDemoAuthData } from '../../../redux/slices/Audience/action';

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

export default function AppWidgetSummary({ user, loading, audience, audienceCode, audienceSize, audiencePercent }) {
  const theme = useTheme();
  const dispatch = useDispatch();

  const [modalOpen, setModalOpen] = useState(false);
  const [openPopOver, setOpenPopOver] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleFavourite = () => {
    if (!user) {
      setModalOpen(true);
    } else {
      dispatch(getDemoAuthData(user?.id));
    }
  };

  const handleShare = (event) => {
    if (!user) {
      setModalOpen(true);
    } else {
      const tempInput = document.createElement('input');
      tempInput.value = `${window.location.href}`;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
      setAnchorEl(event.currentTarget);
      setOpenPopOver(true);
    }
  };

  return (
    <Card sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, pl: 4, pr: 4 }}>
      <AppModal
        type="auth"
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        title="You need an Account to use this feature"
      />
      <AppPopOver
        text="Link Copied!"
        openPopOver={openPopOver}
        setOpenPopOver={setOpenPopOver}
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
      />

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
              <FormControl variant="standard" sx={{ minWidth: 120 }}>
                <Select defaultValue="worldwide">
                  <MenuItem value="worldwide">Worldwide</MenuItem>
                </Select>
              </FormControl>
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
            <FormControl variant="standard" sx={{ minWidth: 120 }}>
              <Select defaultValue="all visitors">
                <MenuItem value="all visitors">All Visitors</MenuItem>
              </Select>
            </FormControl>
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
          <ShareIconWrapperStyle onClick={handleShare}>
            <Iconify width={20} height={20} icon="eva:share-fill" />
          </ShareIconWrapperStyle>
        </Box>
      </Stack>
    </Card>
  );
}
