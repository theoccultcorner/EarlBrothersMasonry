import React from 'react';
import { Typography, Grid } from '@material-ui/core';

export function Landing() {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4">
           Earl Brothers Masonry
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">
            Welcome!
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            Central Coast, California
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Landing;
