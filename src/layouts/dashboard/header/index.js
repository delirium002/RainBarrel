import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// @mui
import { styled } from '@mui/material/styles';
import {
  Box,
  Stack,
  AppBar,
  Toolbar,
  Input,
  Typography,
  Slide,
  Button,
  InputAdornment,
  ClickAwayListener,
} from '@mui/material';
// hooks
import useOffSetTop from '../../../hooks/useOffSetTop';
import useResponsive from '../../../hooks/useResponsive';
// utils
import cssStyles from '../../../utils/cssStyles';
// config
import { HEADER, NAVBAR } from '../../../config';
// components
import Logo from '../../../components/Logo';
import Iconify from '../../../components/Iconify';
import { IconButtonAnimate } from '../../../components/animate';
//
// import Searchbar from './Searchbar';
import AccountPopover from './AccountPopover';
// import LanguagePopover from './LanguagePopover';
// import ContactsPopover from './ContactsPopover';
// import NotificationsPopover from './NotificationsPopover';

// ----------------------------------------------------------------------

const RootStyle = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'isCollapse' && prop !== 'isOffset' && prop !== 'verticalLayout',
})(({ isCollapse, isOffset, verticalLayout, theme }) => ({
  ...cssStyles(theme).bgBlur(),
  boxShadow: 'none',
  height: HEADER.MOBILE_HEIGHT,
  zIndex: theme.zIndex.appBar + 1,
  transition: theme.transitions.create(['width', 'height'], {
    duration: theme.transitions.duration.shorter,
  }),
  [theme.breakpoints.up('lg')]: {
    height: HEADER.DASHBOARD_DESKTOP_HEIGHT,
    // width: `calc(100% - ${NAVBAR.DASHBOARD_WIDTH + 1}px)`,
    // ...(isCollapse && {
    //   width: `calc(100% - ${NAVBAR.DASHBOARD_COLLAPSE_WIDTH}px)`,
    // }),
    ...(isOffset && {
      height: HEADER.DASHBOARD_DESKTOP_OFFSET_HEIGHT,
    }),
    ...(verticalLayout && {
      width: '100%',
      height: HEADER.DASHBOARD_DESKTOP_OFFSET_HEIGHT,
      backgroundColor: theme.palette.background.default,
    }),
  },
}));

// ----------------------------------------------------------------------

DashboardHeader.propTypes = {
  onOpenSidebar: PropTypes.func,
  isCollapse: PropTypes.bool,
  verticalLayout: PropTypes.bool,
};

export default function DashboardHeader({ onOpenSidebar, isCollapse = false, verticalLayout = false }) {
  const isOffset = useOffSetTop(HEADER.DASHBOARD_DESKTOP_HEIGHT) && !verticalLayout;

  const isDesktop = useResponsive('up', 'lg');

  return (
    <RootStyle isCollapse={isCollapse} isOffset={isOffset} verticalLayout={verticalLayout}>
      <Toolbar
        sx={{
          minHeight: '100% !important',
          px: { lg: 5 },
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Stack spacing={1}>
          <Logo />
        </Stack>

        {/* {isDesktop && verticalLayout && <Logo sx={{ mr: 2.5 }} />} */}

        {/* {!isDesktop && (
          <IconButtonAnimate onClick={onOpenSidebar} sx={{ mr: 1, color: 'text.primary' }}>
            <Iconify icon="eva:menu-2-fill" />
          </IconButtonAnimate>
        )} */}

        {/* <Searchbar /> */}
        {/* <Box sx={{ flexGrow: 1 }} /> */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', color: 'black' }}>
            <Box sx={{ mr: 4, ml: 4 }}>
              <Link to="/" style={{ color: '#000', textDecoration: 'none' }}>
                <Typography variant="h6">Dashboard</Typography>
              </Link>
            </Box>

            <Box sx={{ mr: 4, ml: 4 }}>
              <Link to="/audience" style={{ color: '#000', textDecoration: 'none' }}>
                <Typography variant="h6">Public</Typography>
              </Link>{' '}
            </Box>

            <Box sx={{ mr: 4, ml: 4 }}>
              <Typography variant="h6">Custom</Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex' }}>
            <Box sx={{ mr: 2, width: '40vw' }}>
              <Input
                autoFocus
                fullWidth
                disableUnderline
                placeholder="Search for audience…"
                startAdornment={
                  <InputAdornment position="start">
                    <Iconify icon={'eva:search-fill'} sx={{ color: 'text.disabled', width: 20, height: 20 }} />
                  </InputAdornment>
                }
                sx={{
                  fontWeight: 'fontWeightLight',
                  backgroundColor: '#F5F5F5',
                  borderRadius: '4px',
                  padding: '5px',
                }}
              />
            </Box>
            <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
              {/* <LanguagePopover />
          <NotificationsPopover />
          <ContactsPopover /> */}
              <AccountPopover />
            </Stack>
          </Box>
        </Box>
      </Toolbar>
    </RootStyle>
  );
}
