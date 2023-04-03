import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Parallax } from 'react-parallax';

const useStyles = makeStyles((theme) => ({
 
 
}));

function ParallaxImage({ imageUrl }) {
  const classes = useStyles();

  return (
    <Parallax bgImage={imageUrl} strength={500}>
      <div className={classes.parallaxContainer}>
        <div className={classes.title}>
          Earl Brothers Masonry
        </div>
      </div>
    </Parallax>
  );
}

export default ParallaxImage;
