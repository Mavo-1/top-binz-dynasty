import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

const ArticleGrid = ({ articles }) => {
  return (
    <Grid container spacing={4}>
      {articles.map((article, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={article.image}
              alt={article.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {article.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {article.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ArticleGrid;
