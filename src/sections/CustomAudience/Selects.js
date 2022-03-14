import { useState } from 'react';
import { Box, OutlinedInput, InputLabel, MenuItem, FormControl, Select, Chip, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Selects = () => {
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const names = ['McDonald', 'Nike', 'Adidas', 'Shell oil', 'Coca cola', 'April Tucker'];

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium,
    };
  }

  const theme = useTheme();
  const [personName, setPersonName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  return (
    <Box
      sx={{
        mt: 4,
        display: 'grid',
        rowGap: 4,
        columnGap: 3,
        gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' },
      }}
    >
      <Box>
        <Typography>Brands</Typography>
        <FormControl sx={{ backgroundColor: '#FAFAFB', width: '100%' }}>
          <InputLabel>Brands</InputLabel>
          <Select
            multiple
            value={personName}
            onChange={handleChange}
            color="secondary"
            input={<OutlinedInput id="select-multiple-chip" label="Brands" />}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {names.map((name) => (
              <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Box>
        <Typography>Top Categories</Typography>
        <FormControl sx={{ backgroundColor: '#FAFAFB', width: '100%' }}>
          <Select
            multiple
            value={personName}
            onChange={handleChange}
            color="secondary"
            input={<OutlinedInput />}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {names.map((name) => (
              <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Box>
        <Typography>Sub Categories</Typography>
        <FormControl sx={{ backgroundColor: '#FAFAFB', width: '100%' }}>
          <Select
            multiple
            value={personName}
            onChange={handleChange}
            color="secondary"
            input={<OutlinedInput />}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {names.map((name) => (
              <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Box>
        <Typography>Categories Tags</Typography>
        <FormControl sx={{ backgroundColor: '#FAFAFB', width: '100%' }}>
          <Select
            multiple
            value={personName}
            onChange={handleChange}
            color="secondary"
            input={<OutlinedInput />}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {names.map((name) => (
              <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Selects;
