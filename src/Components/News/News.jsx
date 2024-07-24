import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, Card, CardContent, CardActions, Button } from '@mui/material';

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=1aebd79ac57c4abd93d039e4c49c9342');
        if (!response.ok) {
          throw new Error('Failed to fetch news. Please try again later.');
        }
        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const handleViewDetails = (url) => {
    window.open(url, '_blank');
  };

  return (
    <Container component="main" sx={{ paddingTop: 4 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h4" gutterBottom>
          Latest News
        </Typography>
        {loading && <Typography variant="body1">Loading news articles...</Typography>}
        {error && <Typography variant="body1" color="error">Something went wrong: {error}</Typography>}
        {news.length > 0 ? (
          news.map((item, index) => (
            <Card key={index} sx={{ marginBottom: 2 }}>
              <CardContent>
                <Typography variant="h6" component="div">
                  {item.title}
                </Typography>
                <Typography color="textSecondary" variant="body2">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => handleViewDetails(item.url)}>
                  Read More
                </Button>
              </CardActions>
            </Card>
          ))
        ) : (
          <Typography variant="body1">No news articles available.</Typography>
        )}
      </Box>
    </Container>
  );
};

export default News;
