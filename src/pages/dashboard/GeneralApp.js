import { useState, useEffect } from 'react';
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
import { AppWidgetSummary } from '../../sections/Audience/app';

import { getDashboardData } from '../../redux/slices/dashboard/action';

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

  const { topAnalytics, dspMatchRate, chartData, rangeData, similarMatchData, socialMatchData } = dashboard;

  return (
    <Page title="Audience">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <AppWidgetSummary />
          </Grid>
          <Grid item xs={12} md={4}>
            <AppWidgetSummary />
          </Grid>
          <Grid item xs={12} md={4}>
            <AppWidgetSummary />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
