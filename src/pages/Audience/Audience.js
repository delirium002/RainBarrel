import { useEffect } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import {
  Container,
  Grid,
  // Stack, Card
} from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';

// hooks
import useAuth from '../../hooks/useAuth';
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
// sections
import {
  AppWidgetSummary,
  MapWidget,
  ProgressWidgetSummary,
  AppMatchRate,
  AppGraph,
  AppSimilarMatch,
} from '../../sections/Audience/app';

import { getDashboardData } from '../../redux/slices/dashboard/action';

// ----------------------------------------------------------------------

export default function Audience() {
  const { user } = useAuth();
  const theme = useTheme();

  const { themeStretch } = useSettings();
  const dispatch = useDispatch();

  const { loading, dashboard, error } = useSelector((state) => state.dashboardReducer);

  useEffect(() => {
    dispatch(getDashboardData());
  }, []);

  const { topAnalytics, dspMatchRate, chartData, rangeData, similarMatchData, socialMatchData } = dashboard;

  return (
    <Page title="Audience">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <AppWidgetSummary
              user={user}
              loading={loading}
              audience={topAnalytics?.audience}
              audienceCode={topAnalytics?.audienceCode}
              audienceSize={topAnalytics?.audienceSize}
              audiencePercent={topAnalytics?.audiencePercent}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <MapWidget />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <ProgressWidgetSummary
              loading={loading}
              polCount={rangeData?.polCount}
              polPercent={rangeData?.polPercent}
              genderData={rangeData?.genderData}
              ageRangeData={rangeData?.ageRangeData}
              parentData={rangeData?.parentData}
            />
          </Grid>

          <Grid item xs={12} lg={8}>
            <AppGraph type="bar" title="Audience Recency Distribution" chartData={chartData} />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppMatchRate title="Social Match Rate" color="#605BFF" data={socialMatchData?.data} />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppGraph type="area" title="Audience Size Over Time" chartData={chartData} />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppMatchRate
              user={user}
              title="DSP Match Rate"
              color="#FF7A45"
              heading={dspMatchRate?.heading}
              description={dspMatchRate?.description}
              data={dspMatchRate?.data}
            />
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
            <AppSimilarMatch title="Similar Audiences" color="#FF7A45" data={similarMatchData?.data} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
