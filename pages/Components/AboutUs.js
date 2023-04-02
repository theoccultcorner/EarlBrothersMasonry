import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const AboutUs = () => {
return (
<Box sx={{ maxWidth: 800, margin: '0 auto' }}>
<Typography variant="h4" gutterBottom>
About Us
</Typography>
<Typography variant="body1" gutterBottom>
Earl Brothers Masonry is a family-owned business with over 20 years of experience in all phases of masonry including brick, block, and stone. Our team is made up of three Santa Maria natives who are dedicated to providing the highest quality masonry work to our customers.
</Typography>
<Typography variant="body1" gutterBottom>
Our services range from retaining walls and block walls to stone fire pits and barbecues. We take pride in our work and always provide free estimates for brick jobs. Our goal is to exceed our customers' expectations and build long-lasting relationships with them.
</Typography>
<Typography variant="body1" gutterBottom>
At Earl Brothers Masonry, we believe in the quality and integrity of our work. Our team is committed to delivering exceptional craftsmanship and ensuring customer satisfaction. We are honored to serve the central coast and look forward to providing our services for many years to come.
</Typography>
</Box>
);
};

export default AboutUs;