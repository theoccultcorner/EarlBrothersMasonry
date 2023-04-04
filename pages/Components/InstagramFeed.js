import { useState, useEffect } from 'react';
import axios from 'axios';
import { Paper, Typography } from '@material-ui/core';

const accessToken = 'https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink&access_token=' + process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN;

const InstagramFeed = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(accessToken);
        setPhotos(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <Paper>
      {photos.length > 0 ? (
        <div>
          {photos.map((photo) => (
            <img src={photo.media_url} key={photo.id} alt={photo.caption} style={{ width: '100%' }} />
          ))}
        </div>
      ) : (
        <Typography variant="body1" component="p">
          Loading...
        </Typography>
      )}
    </Paper>
  );
};

export default InstagramFeed;