// src/components/layout/Header.js

import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="relative" sx={{ bgcolor: 'primary.main' }}>
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          College Football League
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
