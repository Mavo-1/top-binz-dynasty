// src/components/layout/Footer.js

import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 1 }} component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        College Football 25
      </Typography>
      <Typography variant="subtitle1" align="center" component="p">
        Follow the latest updates and stats!
      </Typography>
      <Copyright />
    </Box>
  );
};

function Copyright() {
  return (
    <Typography variant="body2" align="center">
      {'© '}
      <Link color="inherit" href="https://mui.com/">
        College Football League
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default Footer;
