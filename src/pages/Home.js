// src/pages/Home.js

import React,  { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Box, Typography, Grid, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, AppBar, CssBaseline, Divider } from '@mui/material';
import { Home as HomeIcon, TableChart as TableChartIcon, Article as ArticleIcon } from '@mui/icons-material';
// import Header from '../components/Header';
import TeamTable from '../components/TeamTable'
import Footer from '../components/Footer';
import TeamCard from '../components/TeamCard';
// import ArticleGrid from '../components/ArticleGrid';
// import EditableTeamTable from '../components/EditableTeamTable';


const drawerWidth = 240;




const Home = () => {
    const [teams,setTeams] = useState([]);
    // const [articles, setArticles] = useState([]);

    useEffect(()=> {
        axios.get('/api/teams').then(response => setTeams(response.data));
        //fetch articles similarly
    }, [])

    return (
        <Box sx={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
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
              [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            }}
          >
            <Toolbar />
            <Divider />
            <List>
              <ListItem button component="a" href="#home">
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button component="a" href="#team-table">
                <ListItemIcon>
                  <TableChartIcon />
                </ListItemIcon>
                <ListItemText primary="Team Rankings" />
              </ListItem>
              <ListItem button component="a" href="#articles">
                <ListItemIcon>
                  <ArticleIcon />
                </ListItemIcon>
                <ListItemText primary="Articles" />
              </ListItem>
            </List>
          </Drawer>
          <Box component="main" sx={{ flexGrow: 1, bgcolor: 'grey.100', p: 3, marginLeft: `${drawerWidth}px` }}>
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
              {/* <ArticleGrid articles={articles} /> */}
            </Box>
          </Box>
          <Footer />
        </Box>
      );
    };
  
  export default Home;