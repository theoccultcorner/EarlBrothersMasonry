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
          `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink&access_token=IGQVJVSkpHZAzFTQUhVLWVfa1NRUjhaUms1b015b3BXQkVRZA19qT1p1ajNSNVNDSDJXeWhBendmR0g0Rzh2VVR2TEpXcGtBUGd1bmJBMVNKcERXMHc1RjB1bXZA6SEpNVlRJOEd1Rm9ER2V0R0tNaER5YgZDZD`
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
          width={440}
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
