// src/components/TeamCard.js

import React from 'react';
import { Card, CardContent, Typography, CardMedia, Box, Divider } from '@mui/material';

const TeamCard = ({ team }) => {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 2, boxShadow: 3 }}>
      <CardMedia component="img" image={team.image} alt={team.name} sx={{ height: 140 }} />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
          {team.name}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Coach: {team.coach}
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Box>
          <Typography variant="body2">Record: {team.record}</Typography>
          <Typography variant="body2">Passing Yards: {team.passingYards}</Typography>
          <Typography variant="body2">Rushing Yards: {team.rushingYards}</Typography>
          <Typography variant="body2">Touchdowns: {team.touchdowns}</Typography>
          <Typography variant="body2">Interceptions: {team.interceptions}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TeamCard;
