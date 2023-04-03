import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
 
    color: '#696969',
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
       Earl Brothers Masonry
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
       Designed by www.NevarezMarketing.com
      </Typography>
    </footer>
  );
}

export default Footer;
