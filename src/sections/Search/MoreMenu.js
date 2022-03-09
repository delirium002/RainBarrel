import PropTypes from 'prop-types';
import { useState } from 'react';
// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Stack, Box, MenuItem, IconButton } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';

// components
import Iconify from '../../components/Iconify';

import { getDemoAuthData } from '../../redux/slices/Audience/action';
import AppModal from '../../components/AppModal';
import AppPopOver from '../../components/AppPopOver';
// ----------------------------------------------------------------------

export default function MoreMenu({ user }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [openPopOver, setOpenPopOver] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const dispatch = useDispatch();

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
    <>
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

      <Stack flexDirection="row" sx={{ justifyContent: 'end', pt: 3, pb: 3.5 }}>
        <Box>
          <ShareIconWrapperStyle onClick={handleFavourite}>
            <Iconify width={20} height={20} icon="eva:star-fill" />
          </ShareIconWrapperStyle>
        </Box>
        <Box sx={{ ml: 2 }}>
          <ShareIconWrapperStyle onClick={handleShare}>
            <Iconify width={20} height={20} icon="eva:share-fill" />
          </ShareIconWrapperStyle>
        </Box>
      </Stack>
    </>
  );
}
