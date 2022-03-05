import { useState, useEffect } from 'react';
// @mui
import { Card, Box, Grid, Typography } from '@mui/material';
// import ReactMapGL from 'react-map-gl';

import Slider from '@mui/material/Slider';

import { useDispatch, useSelector } from 'react-redux';
// import DeckGL from '@deck.gl/react';
import { LineLayer } from '@deck.gl/layers';
import { HexagonLayer, HeatmapLayer } from '@deck.gl/aggregation-layers';
// import { StaticMap } from 'react-map-gl';
import { MapView, FirstPersonView } from '@deck.gl/core';
import DeckGL, { GeoJsonLayer, ArcLayer } from 'deck.gl';
import { StaticMap, MapContext, NavigationControl } from 'react-map-gl';

export default function MapWidget() {
  const [valueFrequency, setValueFrequency] = useState(37);
  const handleChangeFrequency = (event, newValue) => {
    setValueFrequency(newValue);
  };

  const [valueRecency, setValueRecency] = useState(87);
  const handleChangeRecency = (event, newValue) => {
    setValueRecency(newValue);
  };

  const AIR_PORTS = 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_airports.geojson';

  // const data = [{ COORDINATES: [-122.42177834, 37.78346622, -122.43177834, 37.78546622], WEIGHT: 10 }];

  const INITIAL_VIEW_STATE = {
    latitude: 51.47,
    longitude: 0.45,
    zoom: 4,
    bearing: 0,
    pitch: 30,
  };

  // const MAP_STYLE = 'https://basemaps.cartocdn.com/gl/positron-nolabels-gl-style/style.json';
  const MAP_STYLE = 'mapbox://styles/mapbox/dark-v9';

  const NAV_CONTROL_STYLE = {
    position: 'absolute',
    top: 10,
    left: 10,
  };

  const layers = [
    new GeoJsonLayer({
      id: 'airports',
      data: AIR_PORTS,
      // Styles
      filled: true,
      pointRadiusMinPixels: 2,
      pointRadiusScale: 2000,
      getPointRadius: (f) => 11 - f.properties.scalerank,
      getFillColor: [200, 0, 80, 180],
      // Interactive props
      pickable: true,
      autoHighlight: true,
    }),
    // new HexagonLayer({
    //   id: 'hex',
    //   data,
    //   pickable: true,
    //   extruded: true,
    //   radius: 200,
    //   elevationScale: 4,
    //   getPosition: (d) => [d.COORDINATES[0], d.COORDINATES[1]],
    //   getElevationWeight: (d) => d.WEIGHT,
    //   // getPosition: (d) => d.COORDINATES,
    // }),
  ];

  return (
    <Card sx={{ height: '100%', width: '100%', p: 2, pb: 0 }}>
      <Box sx={{ height: '90%' }}>
        <Card sx={{ height: '100%', width: '100%' }}>
          <DeckGL
            initialViewState={INITIAL_VIEW_STATE}
            controller
            layers={layers}
            ContextProvider={MapContext.Provider}
            getTooltip={({ object }) => object && `${object.hex} count: ${object.count}`}
          >
            <StaticMap mapStyle={MAP_STYLE} mapboxApiAccessToken={process.env.REACT_APP_MAPBOX} />
            <NavigationControl style={NAV_CONTROL_STYLE} />
          </DeckGL>
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
