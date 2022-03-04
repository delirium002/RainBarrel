import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Typography, Modal, Button, TextField } from '@mui/material';

import ReCAPTCHA from 'react-google-recaptcha';

import Iconify from '../../../components/Iconify';
import Image from '../../../components/Image';

const AppModal = ({ type, modalOpen, setModalOpen, title, description, image }) => {
  const navigate = useNavigate();

  const theme = useTheme();

  const [recaptchaValue, setRecaptchaValue] = useState('');

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

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 1,
    outline: 'none',
    modal: {
      '&:focus': {
        outline: 'none',
      },
    },
  };

  return (
    <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
      <Box sx={style}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" component="h2">
            {title}
          </Typography>

          <IconWrapperStyle
            onClick={() => setModalOpen(false)}
            sx={{
              color: 'error.main',
              bgcolor: alpha(theme.palette.error.main, 0.16),
              mt: 1,
            }}
          >
            <Iconify width={16} height={16} icon={'eva:close-fill'} />
          </IconWrapperStyle>
        </Box>

        {description && (
          <Box sx={{ mt: 1 }}>
            <Typography variant="subtitle2" component="p" sx={{ color: '#8C8C8C' }}>
              {description}
            </Typography>
          </Box>
        )}

        <Box sx={{ mt: 2 }}>
          {type === 'auth' ? (
            <Image src={image} alt="illustration" />
          ) : (
            <>
              <TextField
                size="small"
                fullWidth
                variant="outlined"
                margin="dense"
                color="secondary"
                placeholder="Name"
              />

              <TextField
                size="small"
                fullWidth
                variant="outlined"
                margin="dense"
                color="secondary"
                placeholder="Email"
              />

              <TextField size="large" fullWidth multiline margin="dense" color="secondary" placeholder="Message" />

              <Box sx={{ mt: 2 }}>
                <ReCAPTCHA sitekey={process.env.REACT_APP_RECAPTCHA_KEY} onChange={(e) => setRecaptchaValue(e)} />
              </Box>
            </>
          )}
        </Box>

        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
          {type === 'auth' ? (
            <>
              <>
                <Button
                  variant="outlined"
                  color="secondary"
                  fullWidth
                  sx={{ mr: 1 }}
                  onClick={() => navigate('/auth/register')}
                >
                  Sign Up
                </Button>
              </>
              <>
                <Button variant="contained" color="secondary" fullWidth onClick={() => navigate('/auth/login')}>
                  Login
                </Button>
              </>
            </>
          ) : (
            <Button variant="contained" color="secondary" fullWidth onClick={() => setModalOpen(false)}>
              Send
            </Button>
          )}
        </Box>
      </Box>
    </Modal>
  );
};

export default AppModal;
