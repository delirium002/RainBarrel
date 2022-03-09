// @mui
import { styled } from '@mui/material/styles';
import { Container, Box, Typography } from '@mui/material';
// hooks
import useSettings from '../../hooks/useSettings';
// _mock_
import { _userPayment, _userAddressBook, _userInvoices, _userAbout } from '../../_mock';
// components
import Page from '../../components/Page';
import Iconify from '../../components/Iconify';
// sections
import AccountSettingComponent from '../../sections/AccountSettings/AccountSetting';

// ----------------------------------------------------------------------

export default function AccountSetting() {
  const { themeStretch } = useSettings();

  const IconWrapperStyle = styled('div')(({ theme }) => ({
    width: 24,
    height: 24,
  }));

  return (
    <Page title="Account Settings">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <Box sx={{ flexGrow: 1, mt: 5, display: 'flex' }}>
          <IconWrapperStyle>
            <Iconify width={25} height={25} sx={{ mt: 0.8, color: '#BFBFBF' }} icon="eva:arrow-back-fill" />
          </IconWrapperStyle>
          <Typography variant="h4" gutterBottom sx={{ ml: 2 }}>
            Account Settings
          </Typography>
        </Box>

        <Box sx={{ mb: 5 }} />
        <Box>
          <AccountSettingComponent />
        </Box>
      </Container>
    </Page>
  );
}
