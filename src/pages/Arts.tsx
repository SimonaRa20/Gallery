import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography, Modal, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import data from "../storage/art.json";
import { Art } from '../models/Art';

const Arts: React.FC = () => {
  const [items, setItems] = useState<Art[]>([]);
  const [selectedItem, setSelectedItem] = useState<Art | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    setItems(data);
  }, []);

  const handleOpenModal = (item: Art) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
    setIsModalOpen(false);
  };

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
                cursor: 'pointer',
              }}
              onClick={() => handleOpenModal(item)}
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
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Box
          sx={{
            position: 'relative',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: '4px',
            maxWidth: '90%',
            maxHeight: '90%',
            overflow: 'auto',
          }}
        >
          <IconButton
            onClick={handleCloseModal}
            sx={{ position: 'absolute', top: 8, right: 8 }}
          >
            <CloseIcon />
          </IconButton>
          {selectedItem && (
            <img
              src={selectedItem.link}
              alt={selectedItem.title}
              style={{ width: '100%', height: 'auto', borderRadius: '4px' }}
            />
          )}
          {selectedItem && (
            <Typography variant="h6" sx={{ textAlign: 'center', mt: 2, fontFamily: 'Jura' }}>
              {selectedItem.title}
            </Typography>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default Arts;
