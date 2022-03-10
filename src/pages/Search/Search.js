import { useState, useEffect } from 'react';

// @mui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, TextField, Button, InputAdornment } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';

// hooks
import useAuth from '../../hooks/useAuth';
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
// sections
import Iconify from '../../components/Iconify';
import { getSearchData } from '../../redux/slices/Search/action';
import AppTables from '../../sections/Search/AppTables';
import FilterPopOver from './FilterPopOver';
// ----------------------------------------------------------------------

export default function Search() {
  const { user } = useAuth();
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  const [search, setSearch] = useState('');

  const { themeStretch } = useSettings();
  const dispatch = useDispatch();

  const { loading, searchData } = useSelector((state) => state.searchDataReducer);

  useEffect(() => {
    dispatch(getSearchData());
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { data } = searchData;

  const TABLE_HEAD_CUSTOM = [
    { id: 'audienceID', label: 'Audience ID', alignRight: false },
    { id: 'audienceName', label: 'Audience Name', alignRight: false },
    { id: 'audienceType', label: 'Audience Size', alignRight: false },
    { id: 'audienceSize', label: 'Audience Size', alignRight: false },
    { id: 'change', label: '% Change', alignRight: false },
    { id: 'pastDays', label: 'Past 30 Days', alignRight: false },
    { id: '' },
  ];

  const filtData = [];
  data?.forEach((e) => {
    if (e.audienceName.includes(search)) {
      return filtData.push(e);
    }
  });

  return (
    <Page title="Audience">
      <FilterPopOver anchorEl={anchorEl} handleClose={handleClose} />
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
          <Grid item xs={11}>
            <TextField
              autoFocus
              fullWidth
              placeholder="Search…"
              size="small"
              color="secondary"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Iconify icon={'eva:search-fill'} sx={{ color: 'text.disabled', width: 20, height: 20 }} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={1}>
            <Button
              onClick={handleClick}
              color="secondary"
              startIcon={<Iconify icon={'eva:funnel-outline'} sx={{ color: '#11142D', width: 20, height: 20 }} />}
              sx={{ color: '#11142D' }}
            >
              Filter
            </Button>
          </Grid>
          <Grid item xs={12}>
            <AppTables
              user={user}
              title="Custom Audience"
              tableHead={TABLE_HEAD_CUSTOM}
              loading={loading}
              data={filtData}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
