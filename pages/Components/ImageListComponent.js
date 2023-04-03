import React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const itemData = [
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvCIUeN1cFDvdAIlviCRhtdqcCQJxQ0uDd_g&usqp=CAU',
    title: 'Bed',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVH9_rb9Vus1ut3nCrEEx7Bs9mMetAfKGAvg&usqp=CAU',
    title: 'Books',
  },
  {
    img: 'https://c4.wallpaperflare.com/wallpaper/126/929/154/wall-stone-texture-masonry-hd-wallpaper-preview.jpg',
    title: 'Sink',
  },
  {
    img: 'https://rare-gallery.com/thumbs/5299081-brick-background-stone-wall-rock-masonry-construction-building-brownish-beige-hewn-rough-irregular-gap-sandstone-slab-dry-warm-stacked-free-pictures.jpg',
    title: 'Kitchen',
  },
  {
    img: 'https://as2.ftcdn.net/v2/jpg/02/22/83/97/1000_F_222839763_M8hpgt41fUp2wylkFQIo3vd6z11j8yyL.jpg',
    title: 'Blinds',
  },
  {
    img: 'https://www.liveabout.com/thmb/HQRiWxQu9kO5--IE9TnfJTeJFp0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1071717824-5c463beb46e0fb0001d9d626.jpg',
    title: 'Chairs',
  },
  {
    img: 'https://thumbs.dreamstime.com/b/masonry-rough-bricks-texture-hd-picture-82336144.jpg',
    title: 'Laptop',
  },
  {
    img: 'https://www.texturex.com/wp-content/uploads/2018/03/brick-wall-texture-stock-photo-wallpaper-stone-masonry-5-500x333.jpg',
    title: 'Doors',
  },
  {
    img: 'https://thumbs.dreamstime.com/b/beat-up-rock-wall-5887796.jpg',
    title: 'Coffee',
  },
  {
    img: 'https://as1.ftcdn.net/v2/jpg/01/25/05/56/1000_F_125055607_X7vJu0cGmVBR0FqJkRfRnpYk8vgiuSII.jpg',
    title: 'Storage',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQur_aAxiTkxqzNBWjv0vp5cUmm-TOOAjKFiA&usqp=CAU',
    title: 'Candle',
  },
  {
    img: 'https://www.engineeringcivil.com/wp-content/uploads/2022/02/Fig-1-Ashlar-Masonry.jpg',
    title: 'Coffee table',
  },
];

function ImageListComponent() {
    return (
      <Box sx={{ width: '80%', height: 500, overflowY: 'hidden', margin: '0 auto' }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img} sx={{ height: 250 }}>
           <img
  src={`${item.img}?w=248&fit=crop&auto=format`}
  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
  alt={item.title}
  loading="lazy"
  style={{ objectFit: 'cover', objectPosition: 'bottom' }}
/>

            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    );
  }
  
export default ImageListComponent;
