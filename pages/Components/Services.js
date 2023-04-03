import React from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';

const services = [
    {
      title: 'Brick Repair',
      description: 'We repair all types of brick damage, from cracks and chips to complete replacement of damaged brick. Our brick repair services include tuckpointing, brick replacement, and brick cleaning and restoration.'
    },
    {
      title: 'Stone Masonry',
      description: 'We specialize in the installation and repair of natural stone surfaces such as patios, walkways, and retaining walls. Our stone masonry services include design, installation, repair, and restoration of all types of natural stone surfaces.'
    },
    {
      title: 'Chimney Repair',
      description: 'Our expert masons can repair and rebuild any type of chimney, from simple repairs to complete chimney restoration. Our chimney repair services include chimney rebuilding, repointing, chimney liner installation, and chimney crown repair.'
    }
  ];
  

function Services() {
  return (
    <Grid container spacing={3}>
      {services.map((service, index) => (
        <Grid item xs={12} sm={4} key={index}>
          <Paper elevation={3} style={{ padding: '24px' }}>
            <Typography variant="h5" gutterBottom>
              {service.title}
            </Typography>
            <Typography variant="body1">
              {service.description}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default Services;
