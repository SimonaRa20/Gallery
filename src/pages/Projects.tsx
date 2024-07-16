import React, { useEffect, useState } from 'react';
import { Box, Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Link, Paper } from '@mui/material';
import data from "../storage/projects.json";
import { Project } from '../models/Project';

const Projects: React.FC = () => {
  const [items, setItems] = useState<Project[]>([]);

  useEffect(() => {
    setItems(data);
  }, []);

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom sx={{ fontFamily: 'Jura', p: 1 }}>
        Projects
      </Typography>
      <Paper>
        <TableContainer>
          <Table sx={{ minWidth: 750 }} size="medium">
            <TableHead>
              <TableRow>
                <TableCell align="center" sx={{ fontFamily: 'Jura' }}>Nr</TableCell>
                <TableCell align="center" sx={{ fontFamily: 'Jura' }}>Link</TableCell>
                <TableCell align="center" sx={{ fontFamily: 'Jura' }}>Description</TableCell>
                <TableCell align="center" sx={{ fontFamily: 'Jura' }}>Languages</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((row) => {
                return (
                  <TableRow
                    hover
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell align="center" sx={{ fontFamily: 'Jura' }}>{row.nr}</TableCell>
                    <TableCell align="center">
                      <Link href={row.link} variant="body2" sx={{ color: '#3f51b5', textDecoration: 'none', '&:hover': { textDecoration: 'underline' }, fontFamily: 'Jura' }}>
                        {row.title}
                      </Link>
                    </TableCell>
                    <TableCell align="justify" sx={{ fontFamily: 'Jura' }}>{row.description}</TableCell>
                    <TableCell align="justify" sx={{ fontFamily: 'Jura' }}>{row.language}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default Projects;
