import axios from 'axios';
import { Paper, Typography } from '@material-ui/core';

const InstagramFeed = ({ photos }) => {
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

export async function getStaticProps() {
  const accessToken = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN}`;

  try {
    const response = await axios.get(accessToken);
    const photos = response.data.data;

    return {
      props: {
        photos
      },
      revalidate: 60 // revalidate the data every 60 seconds
    };
  } catch (error) {
    console.error(error);

    return {
      props: {
        photos: []
      },
      revalidate: 60
    };
  }
}

export default InstagramFeed;
