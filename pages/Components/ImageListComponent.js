import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { styled } from '@mui/material/styles';

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
   
];

const ImageGrid = styled(Grid)(({ theme }) => ({
  margin: '0 auto',
  width: '80%',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

const ImageItem = styled(Paper)(({ theme }) => ({
  position: 'relative',
  height: 250,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important',
    height: 200,
  },
  '& img': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'bottom',
  },
}));

function ImageListComponent() {
  return (
    <ImageGrid container spacing={2}>
      {itemData.map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item.img}>
          <ImageItem>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageItem>
        </Grid>
      ))}
    </ImageGrid>
  );
}

export default ImageListComponent;