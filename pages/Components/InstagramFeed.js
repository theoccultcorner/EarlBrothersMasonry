import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography } from '@material-ui/core';
import Stories from 'react-insta-stories';

const InstagramFeed = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await axios.get(
          `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink&access_token=IGQVJWZATFSdnplRmltZAEpoY2k0M1lGNjFPRUZATTGpYMnFxME5wbENhRDU3Rl96UTVkeEdscXZAUMVl4V2JhX1FTQkU3azFuMlhnck9halRpdDdUWWhXZA2tYdW4tNDR6b2dLbG5hNDREX25CRXZAlbGJUQwZDZD}`
        );
        setStories(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStories();
  }, []);

  return (
    <Container>
      
      {stories.length > 0 ? (
        <Stories
          stories={stories.map((story) => ({
            url: story.media_url,
            seeMore: story.permalink
          }))}
          width='100%'
          height={640}
        />
      ) : (
        <Typography variant="body1" component="p">
          Loading...
        </Typography>
      )}
    </Container>
  );
};

export default InstagramFeed;
