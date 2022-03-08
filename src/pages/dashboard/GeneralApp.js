import { useState, useEffect } from 'react';

// @mui
import { useTheme } from '@mui/material/styles';
import { Container, Grid } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';

// hooks
import useAuth from '../../hooks/useAuth';
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
// sections
import { AppWidgetSummary } from '../../sections/@dashboard/general/app';

import { getDashboardData } from '../../redux/slices/Dashboard/action';
import AppTables from '../../sections/@dashboard/general/app/AppTables';
// ----------------------------------------------------------------------

export default function GeneralApp() {
  const { user } = useAuth();
  const theme = useTheme();

  const { themeStretch } = useSettings();
  const dispatch = useDispatch();

  const { loading, dashboard, error } = useSelector((state) => state.dashboardReducer);

  useEffect(() => {
    dispatch(getDashboardData());
  }, []);

  const { topTrendings, customAudience, favouriteAudience, demoCustomAudience, demoFavouriteAudience } = dashboard;

  const TABLE_HEAD_CUSTOM = [
    { id: 'Audience ID', label: 'Audience ID', alignRight: false },
    { id: 'Audience Name', label: 'Audience Name', alignRight: false },
    { id: 'Audience Size', label: 'Audience Size', alignRight: false },
    { id: '% Change', label: '% Change', alignRight: false },
    { id: '' },
  ];
  const TABLE_HEAD_FAV = [
    { id: 'Audience Name', label: 'Audience Name', alignRight: false },
    { id: 'Audience Size', label: 'Audience Size', alignRight: false },
    { id: '% Change', label: '% Change', alignRight: false },
    { id: '' },
  ];

  const trend1 = topTrendings && topTrendings[0];
  const trend2 = topTrendings && topTrendings[1];
  const trend3 = topTrendings && topTrendings[2];

  return (
    <Page title="Audience">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <AppWidgetSummary
              loading={loading}
              title={trend1?.title}
              code={trend1?.code}
              percent={trend1?.percent}
              size={trend1?.size}
              chartData={trend1?.chartData}
              numberOfDays={trend1?.numberOfDays}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <AppWidgetSummary
              loading={loading}
              title={trend2?.title}
              code={trend2?.code}
              percent={trend2?.percent}
              size={trend2?.size}
              chartData={trend2?.chartData}
              numberOfDays={trend2?.numberOfDays}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <AppWidgetSummary
              loading={loading}
              title={trend3?.title}
              code={trend3?.code}
              percent={trend3?.percent}
              size={trend3?.size}
              chartData={trend3?.chartData}
              numberOfDays={trend3?.numberOfDays}
            />
          </Grid>

          <Grid item xs={7}>
            <AppTables
              user={user}
              title="Custom Audience"
              tableHead={TABLE_HEAD_CUSTOM}
              data={user ? customAudience : demoCustomAudience}
            />
          </Grid>
          <Grid item xs={5}>
            <AppTables
              user={user}
              title="Your Favourites"
              tableHead={TABLE_HEAD_FAV}
              data={user ? favouriteAudience : demoFavouriteAudience}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
