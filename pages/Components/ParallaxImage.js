import React from 'react';
 
import { Parallax } from 'react-parallax';

 

function ParallaxImage({ imageUrl }) {
 

  return (
    <Parallax bgImage={imageUrl} strength={500}>
      <div>
        <div>
          Earl Brothers Masonry
        </div>
      </div>
    </Parallax>
  );
}

export default ParallaxImage;
