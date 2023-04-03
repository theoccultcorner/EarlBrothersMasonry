import React from 'react';
import { Typography, Grid } from '@material-ui/core';

export function Landing() {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4">
            Welcome to My Landing Page
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus hendrerit enim, sit amet dignissim arcu pellentesque quis.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            Nullam lobortis consequat elit, sed fringilla nulla tempor sit amet.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Landing;
