import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import data from "../storage/art.json";
import { Item } from '../models/Item';

const Art: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    setItems(data);
  }, []);

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom sx={{ fontFamily: 'Jura', p: 1 }}>
        Art
      </Typography>
      <Grid container spacing={2}>
        {items.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Box
              sx={{
                p: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <img
                src={item.link}
                alt={item.title}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '2px',
                  boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
                }}
              />
              <Typography variant="body2" sx={{ textAlign: 'center', mt: 1, fontFamily: 'Jura' }}>
                {item.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Art;
