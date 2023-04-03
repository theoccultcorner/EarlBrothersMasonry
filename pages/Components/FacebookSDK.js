import { useEffect } from 'react';
import Script from 'next/script';
import { Container } from '@material-ui/core';

const FacebookSDK = () => {
  useEffect(() => {
    window.fbAsyncInit = function() {
      FB.init({
        appId: '138830032475400',
        xfbml: true,
        version: 'v16.0'
      });
      FB.AppEvents.logPageView();
    };

    // Load the Facebook SDK asynchronously
    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  }, []);

  return (
    <Container>
      <Script src="https://connect.facebook.net/en_US/sdk.js" strategy="lazyOnload" />
    </Container>
  );
};

export default FacebookSDK;
