// src/pages/Home.js

import React from 'react';
import { Container, Box, Typography, Grid } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TeamCard from '../components/TeamCard';

const teams = [
  { name: 'Houston', coach: 'Coleman', record: '0-0', passingYards: 3500, rushingYards: 1500, touchdowns: 40, interceptions: 10, image: '/img/UH.png' },
  { name: 'Boise State', coach: 'Coach B', record: '1-0', passingYards: 3000, rushingYards: 1800, touchdowns: 35, interceptions: 8, image: '/img/boise state.png' },
  { name: 'Fresno State', coach: 'Coach C', record: '0-0', passingYards: 3200, rushingYards: 1700, touchdowns: 38, interceptions: 9, image: '/img/bulldog.png' },
  { name: 'Wake Forest', coach: 'Badculo', record: '1-0', passingYards: 3700, rushingYards: 1600, touchdowns: 42, interceptions: 7, image: '/img/wake_forest_demon_deacons-alternate.png' },
  { name: 'Buffalo', coach: 'Coach E', record: '0-0', passingYards: 2900, rushingYards: 2000, touchdowns: 30, interceptions: 12, image: '/img/buffalo.webp' },
  { name: 'Rice', coach: 'Alscott', record: '0-1', passingYards: 2800, rushingYards: 2100, touchdowns: 28, interceptions: 15, image: '/img/rice.jpg' },
];

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Box
          sx={{
            bgcolor: 'grey.200',
            pt: 8,
            pb: 6,
            backgroundImage: 'url(/path/to/your/background.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white',
            textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="inherit"
              gutterBottom
            >
              College Football League
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="inherit"
              paragraph
            >
              Stay updated with the latest news, team stats, and weekly articles.
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {teams.map((team, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <TeamCard team={team} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Home;
