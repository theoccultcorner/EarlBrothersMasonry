import { useState, useEffect } from 'react';
import axios from 'axios';
import { Paper, Typography } from '@material-ui/core';
import Stories from 'react-insta-stories';

const InstagramFeed = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await axios.get(
          `"https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink&access_token="` + process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN
        );
        setStories(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStories();
  }, []);

  return (
    
     <Paper> 
      {stories.length > 0 ? (
        <Stories
          stories={stories.map((story) => ({
            url: story.media_url,
            seeMore: story.permalink
          }))}
          width="100%"
          height={500}
        />
      ) : (
        <Typography variant="body1" component="p">
          Loading...
        </Typography>
      )}
      </Paper>
    
  );
};

export default InstagramFeed;
