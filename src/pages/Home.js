// src/pages/Home.js

import React from 'react';
import { Container, Box, Typography, Grid, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, AppBar, CssBaseline, Divider } from '@mui/material';
import { Home as HomeIcon, TableChart as TableChartIcon, Article as ArticleIcon } from '@mui/icons-material';
// import Header from '../components/Header';
import Footer from '../components/Footer';
import TeamCard from '../components/TeamCard';
import TeamTable from '../components/TeamTable';
import ArticleGrid from '../components/ArticleGrid';


const drawerWidth = 240;

const teams = [
  { name: 'Houston', coach: 'Coleman', record: '0-1', passingYards: 374, rushingYards: 12, ptd: 2, rtd: 1, image: '/img/UH.png' },

  { name: 'Boise State', coach: 'Lasso', record: '1-1', passingYards: 415, rushingYards: 479, ptd: 3, rtd: 6, image: '/img/bs.png' },

  { name: 'Fresno State', coach: 'Freeman', record: '2-1', passingYards: 863, rushingYards: 432, ptd: 10, rtd: 3, image: '/img/BULLDOG.png' },

  { name: 'Wake Forest', coach: 'Falco', record: '3-0', passingYards: 806, rushingYards: 630, ptd: 7, rtd: 7, image: '/img/wf.png' },

  { name: 'Buffalo', coach: 'Options', record: '1-2', passingYards: 1096, rushingYards: 246, ptd: 7, rtd: 4, image: '/img/buffalo.webp' },

  { name: 'Rice', coach: 'Alstott', record: '1-1', passingYards: 240, rushingYards: 527, ptd: 3, rtd: 7, image: '/img/rice.jpg' },
];

const articles = [
    {title: 'Owls fall to Bearcats', description: 'Rice coach criticizes players for bad performance', image: '/img/article-img/rice head coach.jpg'}, 
    // {title: 'Article 1', description: 'DAJKFLDJK', image: '/img/UH.png'},
    // {title: 'Article 1', description: 'DAJKFLDJK', image: '/img/UH.png'},
    // {title: 'Article 1', description: 'DAJKFLDJK', image: '/img/UH.png'},
    // {title: 'Article 1', description: 'DAJKFLDJK', image: '/img/UH.png'},
    // {title: 'Article 1', description: 'DAJKFLDJK', image: '/img/UH.png'},
    
]

const Home = () => {
    return (
        <Box sx={{ display: 'flex', minHeight: '100vh', flexDirection: 'column', bgcolor: 'grey.400' }}>
        <CssBaseline />
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Top Binz Dynasty
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: 
            { width: drawerWidth, 
                boxSizing: 'border-box', 
                bgcolor: "grey.400",
                color: 'white' },
          }}
        >
          <Toolbar />
          <Divider />
          <List sx={{
            color:'white'
          }}>
            <ListItem button component="a" href="#home" >
              <ListItemIcon sx={{
            color:'white'
          }}>
                <HomeIcon  />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component="a" href="#team-table">
              <ListItemIcon sx={{
            color:'white'
          }}>
                <TableChartIcon />
              </ListItemIcon>
              <ListItemText primary="Team Rankings" />
            </ListItem>
            <ListItem button component="a" href="#articles">
              <ListItemIcon sx={{
            color:'white'
          }}>
                <ArticleIcon />
              </ListItemIcon>
              <ListItemText primary="Articles" />
            </ListItem>
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, bgcolor: 'grey.300', p: 3, marginLeft: `${drawerWidth}px` }}>
          <Toolbar />
          <Box
            id="home"
            sx={{
              height: "400px",
              bgcolor: 'grey.200',
              pt: 8,
              pb: 6,
              backgroundImage: 'url(/img/ea-sports-college-football-25-key-art-cropped.avif)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              color: 'white',
              textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
              display: 'flex',
              alignItems: 'center', // Center content vertically
              justifyContent: 'center', // Center content horizontally
            }}
          >
            <Container maxWidth="sm">
              <Box sx={{ mt: 10 }}> 
                <Typography
                  component="h1"
                  variant="h2"
                  align="center"
                  color="inherit"
                  gutterBottom
                >
                  College Football League
                </Typography>
                {/* <Typography
                  variant="h5"
                  align="center"
                  color="inherit"
                  paragraph
                >
                  Stay updated with the latest news, team stats, and weekly articles.
                </Typography> */}
                </Box>
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
          <Box id="team-table" sx={{ mt: 8 }}>
            <Typography variant="h4" gutterBottom>
              Team Rankings
            </Typography>
            <TeamTable teams={teams} />
          </Box>
          <Box id="articles" sx={{ mt: 8 }}>
            <Typography variant="h4" gutterBottom>
              Articles
            </Typography>
            <ArticleGrid articles={articles} />
          </Box>
        </Box>
        <Footer />
      </Box>
    );
  };
  
  export default Home;