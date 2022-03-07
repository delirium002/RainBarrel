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

import { getDashboardData } from '../../redux/slices/dashboard/action';
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

  const { topAnalytics, dspMatchRate, chartData, rangeData, similarMatchData, socialMatchData } = dashboard;

  const TABLE_HEAD = [
    { id: 'Audience Name', label: 'Audience Name', alignRight: false },
    { id: 'Audience Size', label: 'Audience Size', alignRight: false },
    { id: '% Change', label: '% Change', alignRight: false },
    { id: '' },
  ];

  const [productList, setProductList] = useState([
    { id: 1, audienceName: 'Teenage kids', size: 10708, change: 10 },
    { id: 2, audienceName: 'Pizza stores', size: 61391, change: 5 },
    { id: 3, audienceName: 'Moms with cat', size: 233, change: 80 },
    { id: 4, audienceName: 'Single fathers', size: 43359, change: -30 },
    { id: 5, audienceName: 'Men below 30', size: 13671, change: 40 },
    { id: 6, audienceName: 'Men below 20', size: 9876, change: -50 },
    { id: 7, audienceName: 'Shopkeepers', size: 11001, change: 60 },
    { id: 8, audienceName: 'Students', size: 5436, change: 70 },
    { id: 9, audienceName: 'Teacher', size: 7843, change: -5 },
  ]);

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

          <Grid item xs={7}>
            <AppTables
              user={user}
              title="Custom Audience"
              tableHead={TABLE_HEAD}
              productList={productList}
              setProductList={setProductList}
            />
          </Grid>
          <Grid item xs={5}>
            <AppTables
              user={user}
              title="Your Favourites"
              tableHead={TABLE_HEAD}
              productList={productList}
              setProductList={setProductList}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
