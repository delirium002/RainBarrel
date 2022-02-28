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
  AppMatchRate,
  AppGraph,
  AppSimilarMatch,
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

  /// ////////////// PROGRESS BAR DATA ///////////////////////

  const genderData = [
    { title: 'Male', value: 40 },
    { title: 'Female', value: 80 },
  ];

  const ageRangeData = [
    { title: '12-18', value: 3 },
    { title: '19-25', value: 70 },
    { title: '26-32', value: 27 },
    { title: '33-39', value: 0 },
    { title: '40-46', value: 0 },
    { title: '50+', value: 0 },
  ];

  const parentData = [
    { title: 'Parents', value: 30 },
    { title: 'Non-Parents', value: 70 },
  ];

  /// /////////////// Chart Data ///////////////////////////
  const chartData = [
    {
      year: 2020,
      data: [{ name: 'Audience', data: [45, 77, 99, 88, 77, 56, 13, 34, 10, 55, 45, 60] }],
    },
  ];

  /// //////////////// SOCIAL RATE DATA ///////////////////////
  const socialMatchData = [
    {
      icon: 'google',
      title: 'DV 360',
      value: 47,
    },
    {
      icon: 'google',
      title: 'TTD',
      value: 23,
    },
    {
      icon: 'facebook',
      title: 'Amazon',
      value: 21,
    },
    {
      icon: 'google',
      title: 'Meta',
      value: 27,
    },
    {
      icon: 'google',
      title: 'Google',
      value: 47,
    },
    {
      icon: 'google',
      title: 'Youtube',
      value: 47,
    },
  ];

  const dspMatchRate = [
    {
      icon: 'google',
      title: 'DV 360',
      value: 47,
    },
    {
      icon: 'google',
      title: 'TTD',
      value: 23,
    },
    {
      icon: 'facebook',
      title: 'Amazon',
      value: 21,
    },
    {
      icon: 'google',
      title: 'Meta',
      value: 27,
    },
  ];

  /// //////////////// SIMILAR MATCH DATA ///////////////////////
  const similarMatchData = [
    {
      title: 'Women with Cats',
      value: 47,
    },
    {
      title: 'Women with Dogs',
      value: 23,
    },
    {
      title: 'Men with Pets',
      value: 38,
    },
    {
      title: 'Men with Dogs',
      value: 51,
    },
  ];

  return (
    <Page title="General: App">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <AppWidgetSummary
              audience="Women with Pets"
              audienceCode="#45487"
              audienceSize={760194}
              audiencePercent={40}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <MapWidget />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <ProgressWidgetSummary
              polCount={2644785}
              polPercent={40}
              genderData={genderData}
              ageRangeData={ageRangeData}
              parentData={parentData}
            />
          </Grid>

          <Grid item xs={12} lg={8}>
            <AppGraph type="bar" title="Audience Recency Distribution" chartData={chartData} />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppMatchRate title="Social Match Rate" color="#605BFF" data={socialMatchData} />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppGraph type="area" title="Audience Size Over Time" chartData={chartData} />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppMatchRate
              title="DSP Match Rate"
              color="#FF7A45"
              heading="Audience Summary"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae consequat, nunc at ultrices ut. Viverra ut
            placerat non adipiscing lorem risus donec bibendum."
              data={dspMatchRate}
            />
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
            <AppSimilarMatch title="Similar Audiences" color="#FF7A45" data={similarMatchData} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
