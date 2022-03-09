import { useState, useEffect } from 'react';

// @mui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, TextField, Input, InputAdornment } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';

// hooks
import useAuth from '../../hooks/useAuth';
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
// sections
import { AppWidgetSummary } from '../../sections/@dashboard/general/app';
import Iconify from '../../components/Iconify';
import { getDashboardData } from '../../redux/slices/Dashboard/action';
import AppTables from '../../sections/Search/AppTables';
// ----------------------------------------------------------------------

export default function Search() {
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
    { id: 'audienceID', label: 'Audience ID', alignRight: false },
    { id: 'audienceName', label: 'Audience Name', alignRight: false },
    { id: 'audienceType', label: 'Audience Size', alignRight: false },
    { id: 'audienceSize', label: 'Audience Size', alignRight: false },
    { id: 'change', label: '% Change', alignRight: false },
    { id: 'pastDays', label: 'Past 30 Days', alignRight: false },
    { id: '' },
  ];

  const data = [
    {
      id: 'INV-9804378',
      audienceName: 'Teenage kids',
      audienceType: 'All',
      size: 10708,
      change: 10,
      chartData: [5, 18, 12, 51, 68, 11, 39, 37, 27, 20],
    },
    {
      id: 'INV-9804378',
      audienceName: 'Pizza stores',
      audienceType: 'Frequent',
      size: 61391,
      change: 5,
      chartData: [5, 18, 12, 51, 68, 11, 39, 37, 27, 20],
    },
    {
      id: 'INV-9804378',
      audienceName: 'Moms with cat',
      audienceType: 'Multiple Locations',
      size: 233,
      change: 80,
      chartData: [5, 18, 12, 51, 68, 11, 39, 37, 27, 20],
    },
    {
      id: 'INV-9804378',
      audienceName: 'Single fathers',
      audienceType: 'Multiple Locations',
      size: 43359,
      change: -30,
      chartData: [5, 18, 12, 51, 68, 11, 39, 37, 27, 20],
    },
    {
      id: 'INV-9804378',
      audienceName: 'Men below 30',
      audienceType: 'Multiple Locations',
      size: 13671,
      change: 40,
      chartData: [5, 18, 12, 51, 68, 11, 39, 37, 27, 20],
    },
    {
      id: 'INV-9804378',
      audienceName: 'Men below 20',
      audienceType: 'Frequent',
      size: 9876,
      change: -50,
      chartData: [5, 18, 12, 51, 68, 11, 39, 37, 27, 20],
    },
    {
      id: 'INV-9804378',
      audienceName: 'Shopkeepers',
      audienceType: 'Frequent',
      size: 11001,
      change: 60,
      chartData: [5, 18, 12, 51, 68, 11, 39, 37, 27, 20],
    },
    {
      id: 'INV-9804378',
      audienceName: 'Students',
      audienceType: 'All',
      size: 5436,
      change: 70,
      chartData: [5, 18, 12, 51, 68, 11, 39, 37, 27, 20],
    },
    {
      id: 'INV-9804378',
      audienceName: 'Teacher',
      audienceType: 'All',
      size: 7843,
      change: -5,
      chartData: [5, 18, 12, 51, 68, 11, 39, 37, 27, 20],
    },
  ];

  return (
    <Page title="Audience">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              autoFocus
              fullWidth
              disableUnderline
              placeholder="Search…"
              size="small"
              color="secondary"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Iconify icon={'eva:search-fill'} sx={{ color: 'text.disabled', width: 20, height: 20 }} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <AppTables user={user} title="Custom Audience" tableHead={TABLE_HEAD_CUSTOM} data={data} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
