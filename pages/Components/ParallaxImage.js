 
import { Parallax } from 'react-parallax';

 

export function ParallaxImage(props) {
 

  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={props.image}
      bgImageAlt="parallax image"
      strength={300}
    >
      <div style={{ height: '500px' }}>
        <h1  >{props.title}</h1>
      </div>
    </Parallax>
  );
}
export default ParallaxImage;