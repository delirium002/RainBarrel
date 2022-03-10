import { useState } from 'react';
import { Stack, Box, Divider, TextField, Button, Checkbox, Popover, Typography, FormControlLabel } from '@mui/material';

const FilterPopOver = ({ anchorEl, handleClose }) => {
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const [checkAll, setCheckAll] = useState(false);
  const [frequentCheck, setFrequentCheck] = useState(false);
  const [multiLocationCheck, setMultiLocationCheck] = useState(false);
  const [sizeMin, setSizeMin] = useState('');
  const [sizeMax, setSizeMax] = useState('');
  const [changeMin, setChangeMin] = useState('');
  const [changeMax, setChangeMax] = useState('');

  const handleClear = () => {
    setCheckAll(false);
    setFrequentCheck(false);
    setMultiLocationCheck(false);
    setSizeMin('');
    setSizeMax('');
    setChangeMin('');
    setChangeMax('');
  };

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="subtitle1">Filters.</Typography>
        <Divider sx={{ pt: 1, mb: 1.4 }} />
        <Typography variant="subtitle1">Audience type</Typography>

        <Stack direction="column" sx={{ pl: 1, pt: 0.7 }}>
          <FormControlLabel
            control={
              <Checkbox sx={{ p: 0.2 }} color="secondary" checked={checkAll} onChange={() => setCheckAll(!checkAll)} />
            }
            label="All"
          />
          <FormControlLabel
            control={
              <Checkbox
                sx={{ p: 0.2 }}
                color="secondary"
                checked={frequentCheck}
                onChange={() => setFrequentCheck(!frequentCheck)}
              />
            }
            label="Frequent visitors"
          />
          <FormControlLabel
            control={
              <Checkbox
                sx={{ p: 0.2 }}
                color="secondary"
                checked={multiLocationCheck}
                onChange={() => setMultiLocationCheck(!multiLocationCheck)}
              />
            }
            label="From multiple locations"
          />
        </Stack>

        <Typography variant="subtitle1" sx={{ pt: 1.4 }}>
          Audience size
        </Typography>
        <Stack direction="row" width={230} sx={{ pt: 0.7 }}>
          <TextField
            size="small"
            variant="outlined"
            label="Min"
            color="secondary"
            type="number"
            sx={{ mr: 1 }}
            value={sizeMin}
            onChange={(e) => setSizeMin(e.target.value)}
          />
          <TextField
            size="small"
            variant="outlined"
            label="Max"
            color="secondary"
            type="number"
            value={sizeMax}
            onChange={(e) => setSizeMax(e.target.value)}
          />
        </Stack>

        <Typography variant="subtitle1" sx={{ pt: 1.4 }}>
          % change
        </Typography>
        <Stack direction="row" width={230} sx={{ pt: 0.7 }}>
          <TextField
            size="small"
            variant="outlined"
            label="Min"
            color="secondary"
            type="number"
            sx={{ mr: 1 }}
            value={changeMin}
            onChange={(e) => setChangeMin(e.target.value)}
          />
          <TextField
            size="small"
            variant="outlined"
            label="Max"
            color="secondary"
            type="number"
            value={changeMax}
            onChange={(e) => setChangeMax(e.target.value)}
          />
        </Stack>

        <Divider sx={{ pt: 2, mb: 1 }} />

        <Button onClick={handleClear} sx={{ color: '#605BFF' }}>
          Clear filters
        </Button>
      </Box>
    </Popover>
  );
};

export default FilterPopOver;
