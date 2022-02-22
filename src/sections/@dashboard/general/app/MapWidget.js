import { useState } from 'react';
// @mui
import { Card, Box, Grid, Typography } from '@mui/material';
import ReactMapGL from 'react-map-gl';

import Slider from '@mui/material/Slider';

export default function MapWidget() {
  const [valueFrequency, setValueFrequency] = useState([20, 37]);
  const handleChangeFrequency = (event, newValue) => {
    setValueFrequency(newValue);
  };

  const [valueRecency, setValueRecency] = useState([40, 87]);
  const handleChangeRecency = (event, newValue) => {
    setValueRecency(newValue);
  };

  const [viewport, setViewport] = useState({
    latitude: 37.785164,
    longitude: -100,
    width: '100%',
    height: '100%',
    zoom: 3,
  });

  return (
    <Card sx={{ height: '100%', width: '100%', p: 2, pb: 0 }}>
      <Box style={{ height: '90%' }}>
        <Card sx={{ height: '100%', width: '100%' }}>
          <ReactMapGL
            {...viewport}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            mapboxApiAccessToken="pk.eyJ1IjoiYWhzYW5uYXNlZW05NyIsImEiOiJja3p4MG5saG0yMDJmMnVwa2Npa3Z3dDV0In0.eljSkJFpbxDvud308RNKkA"
            onViewportChange={(viewport) => setViewport(viewport)}
          />
        </Card>
      </Box>

      <Box spacing={2} sx={{ pt: 1 }}>
        <Grid container sx={{ justifyContent: 'space-around' }}>
          <Grid item>
            <Grid item>
              <Grid container>
                <Grid item style={{ paddingRight: '10px' }}>
                  <Typography variant="h6" color="#11142D">
                    Frequency
                  </Typography>
                </Grid>
                <Grid item sx={{ width: 170 }}>
                  <Slider
                    value={valueFrequency}
                    onChange={handleChangeFrequency}
                    valueLabelDisplay="auto"
                    color="secondary"
                    style={{ color: '#605BFF' }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container>
              <Grid item style={{ paddingRight: '10px' }}>
                <Typography variant="h6" color="#11142D">
                  Recency
                </Typography>
              </Grid>
              <Grid item sx={{ width: 170 }}>
                <Slider
                  value={valueRecency}
                  onChange={handleChangeRecency}
                  valueLabelDisplay="auto"
                  color="secondary"
                  style={{ color: '#605BFF' }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
}
