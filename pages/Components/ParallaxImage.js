import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Parallax } from 'react-parallax';

const useStyles = makeStyles((theme) => ({
  parallaxContainer: {
    position: 'relative',
    height: '100vh',
    overflow: 'hidden',
  },
  title: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: '3rem',
    zIndex: 1,
  },
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
