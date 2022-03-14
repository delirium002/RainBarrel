import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, TextField, Typography, InputAdornment } from '@mui/material';
import Iconify from '../../components/Iconify';

const Activations = () => {
  const IconWrapperStyle = styled('div')(({ theme }) => ({
    width: 24,
    height: 24,
    display: 'flex',
    borderRadius: '5px',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.success.main,
    backgroundColor: alpha(theme.palette.success.main, 0.16),
  }));

  return (
    <Box>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h4" sx={{ mb: 2 }}>
          DSP Activation
        </Typography>
        <Box>
          <Typography>DV 360 Partner ID</Typography>
          <TextField
            placeholder="DV 360 Partner ID"
            color="secondary"
            sx={{ backgroundColor: '#FAFAFB', width: '100%' }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconWrapperStyle
                    sx={{
                      color: '#fff',
                      bgcolor: '#FF7875',
                    }}
                  >
                    <Iconify width={16} height={16} icon={'eva:play-circle-fill'} />
                  </IconWrapperStyle>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h4" sx={{ mb: 2 }}>
          Social Activation
        </Typography>
        <Box
          sx={{
            display: 'grid',
            rowGap: 4,
            columnGap: 3,
            gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' },
          }}
        >
          <Box>
            <Typography>Facebook/Instagram Ad Account ID</Typography>
            <TextField
              placeholder="Facebook/Instagram Ad Account ID"
              color="secondary"
              sx={{ backgroundColor: '#FAFAFB', width: '100%' }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconWrapperStyle
                      sx={{
                        color: '#fff',
                        bgcolor: '#FF7875',
                      }}
                    >
                      <Iconify width={16} height={16} icon={'eva:facebook-fill'} />
                    </IconWrapperStyle>
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Box>
            <Typography>Twitter Ad Account ID</Typography>
            <TextField
              placeholder="Twitter Ad Account ID"
              color="secondary"
              sx={{ backgroundColor: '#FAFAFB', width: '100%' }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconWrapperStyle
                      sx={{
                        color: '#fff',
                        bgcolor: '#FF7875',
                      }}
                    >
                      <Iconify width={16} height={16} icon={'eva:twitter-fill'} />
                    </IconWrapperStyle>
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Box>
            <Typography>LinkedIn Ad Account ID</Typography>
            <TextField
              placeholder="LinkedIn Ad Account ID"
              color="secondary"
              sx={{ backgroundColor: '#FAFAFB', width: '100%' }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconWrapperStyle
                      sx={{
                        color: '#fff',
                        bgcolor: '#FF7875',
                      }}
                    >
                      <Iconify width={16} height={16} icon={'eva:linkedin-fill'} />
                    </IconWrapperStyle>
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Box>
            <Typography>Pinterest Ad Account ID</Typography>
            <TextField
              placeholder="Pinterest Ad Account ID"
              color="secondary"
              sx={{ backgroundColor: '#FAFAFB', width: '100%' }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconWrapperStyle
                      sx={{
                        color: '#fff',
                        bgcolor: '#FF7875',
                      }}
                    >
                      <Iconify width={16} height={16} icon={'eva:linkedin-fill'} />
                    </IconWrapperStyle>
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Box>
            <Typography>Snapchat Ad Account ID</Typography>
            <TextField
              placeholder="Snapchat Ad Account ID"
              color="secondary"
              sx={{ backgroundColor: '#FAFAFB', width: '100%' }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconWrapperStyle
                      sx={{
                        color: '#fff',
                        bgcolor: '#FF7875',
                      }}
                    >
                      <Iconify width={16} height={16} icon={'eva:linkedin-fill'} />
                    </IconWrapperStyle>
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Box>
            <Typography>TikTok Ad Account ID</Typography>
            <TextField
              placeholder="TikTok Ad Account ID"
              color="secondary"
              sx={{ backgroundColor: '#FAFAFB', width: '100%' }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconWrapperStyle
                      sx={{
                        color: '#fff',
                        bgcolor: '#FF7875',
                      }}
                    >
                      <Iconify width={16} height={16} icon={'eva:linkedin-fill'} />
                    </IconWrapperStyle>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Activations;
