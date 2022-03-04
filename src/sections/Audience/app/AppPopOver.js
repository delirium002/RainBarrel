import React from 'react';

import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

const AppPopOver = ({ text, openPopOver, setOpenPopOver, anchorEl, setAnchorEl }) => {
  const id = openPopOver ? 'simple-popover' : undefined;

  setTimeout(() => {
    setAnchorEl(null);
    setOpenPopOver(false);
  }, 3000);

  return (
    <Popover
      id={id}
      open={openPopOver}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      sx={{ mt: 2 }}
    >
      <Typography sx={{ p: 2 }}>{text}</Typography>
    </Popover>
  );
};

export default AppPopOver;
