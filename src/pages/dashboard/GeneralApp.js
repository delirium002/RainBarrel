// @mui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Stack, Card } from '@mui/material';

import { doc, getDoc } from 'firebase/firestore';
import { DB } from '../../contexts/FirebaseContext';

// hooks
import useAuth from '../../hooks/useAuth';
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
// sections
import {
  AppWidget,
  AppWelcome,
  AppFeatured,
  AppNewInvoice,
  AppTopAuthors,
  AppTopRelated,
  AppAreaInstalled,
  AppWidgetSummary,
  AppCurrentDownload,
  AppTopInstalledCountries,
  DownloadWidget,
  MapWidget,
  ProgressWidgetSummary,
  AppSocialMatch,
} from '../../sections/@dashboard/general/app';

// ----------------------------------------------------------------------

export default function GeneralApp() {
  const { user } = useAuth();
  const theme = useTheme();
  const { themeStretch } = useSettings();

  const gets = async () => {
    const docRef = doc(DB, 'data', 'DBTopAnalytics');
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log('Document data:', docSnap.data());
    } else {
      console.log('No such document!');
    }
  };
  gets();

  return (
    <Page title="General: App">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
          {/* <Grid item xs={12} md={8}>
            <AppWelcome displayName={user?.displayName} />
          </Grid> */}

          {/* <Grid item xs={12} md={4}>
            <AppFeatured />
          </Grid> */}

          <Grid item xs={12} md={4}>
            <AppWidgetSummary title="Public Audience" description="Women with Pets" code="#45487" />
          </Grid>

          <Grid item xs={12} md={4}>
            <AppWidgetSummary title="Audience Size" percent={12} total={760194} />
          </Grid>

          {/* <Grid item xs={12} md={3}>
            <AppWidgetSummary title="Pol Count" percent={-5} total={2218} />
          </Grid> */}

          <Grid item xs={12} md={4}>
            <DownloadWidget />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <MapWidget />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <ProgressWidgetSummary />
          </Grid>

          <Grid item xs={12} lg={8}>
            {/* <AppNewInvoice /> */}
            <AppAreaInstalled />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            {/* <AppTopRelated /> */}
            <AppSocialMatch />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTopInstalledCountries />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTopAuthors />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Stack spacing={3}>
              <AppWidget title="Conversion" total={38566} icon={'eva:person-fill'} chartData={48} />
              <AppWidget title="Applications" total={55566} icon={'eva:email-fill'} color="warning" chartData={75} />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
