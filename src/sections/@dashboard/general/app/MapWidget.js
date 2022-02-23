import { useState, useEffect } from 'react';
// @mui
import { Card, Box, Grid, Typography } from '@mui/material';
// import ReactMapGL from 'react-map-gl';

import KeplerGl from 'kepler.gl';
import Slider from '@mui/material/Slider';

import { useDispatch, useSelector } from 'react-redux';
import useSwr from 'swr';
import { addDataToMap } from 'kepler.gl/actions';

export default function MapWidget() {
  const [valueFrequency, setValueFrequency] = useState(37);
  const handleChangeFrequency = (event, newValue) => {
    setValueFrequency(newValue);
  };

  const [valueRecency, setValueRecency] = useState(87);
  const handleChangeRecency = (event, newValue) => {
    setValueRecency(newValue);
  };

  // const [viewport, setViewport] = useState({
  //   latitude: 37.785164,
  //   longitude: -100,
  //   width: '100%',
  //   height: '100%',
  //   zoom: 3,
  // });

  const dispatch = useDispatch();
  const { data } = useSwr('covid', async () => {
    const response = await fetch(
      'https://gist.githubusercontent.com/leighhalliday/a994915d8050e90d413515e97babd3b3/raw/a3eaaadcc784168e3845a98931780bd60afb362f/covid19.json'
    );
    const data = await response.json();
    return data;
  });

  useEffect(() => {
    if (data) {
      dispatch(
        addDataToMap({
          datasets: {
            info: {
              label: 'COVID-19',
              id: 'covid19',
            },
            data,
          },
          option: {
            centerMap: true,
            readOnly: false,
          },
          config: {},
        })
      );
    }
  }, [dispatch, data]);

  return (
    <Card sx={{ height: '100%', width: '100%', p: 2, pb: 0 }}>
      <Box>
        <Card>
          {/* <ReactMapGL
            {...viewport}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            mapboxApiAccessToken="pk.eyJ1IjoiYWhzYW5uYXNlZW05NyIsImEiOiJja3p4MG5saG0yMDJmMnVwa2Npa3Z3dDV0In0.eljSkJFpbxDvud308RNKkA"
            onViewportChange={(viewport) => setViewport(viewport)}
          /> */}

          <KeplerGl
            id="covid"
            width={window.innerWidth}
            mapboxApiAccessToken="pk.eyJ1IjoiYWhzYW5uYXNlZW05NyIsImEiOiJja3p4MG5saG0yMDJmMnVwa2Npa3Z3dDV0In0.eljSkJFpbxDvud308RNKkA"
            height={window.innerHeight - 300}
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
