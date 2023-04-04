import Head from "next/head";
import { useState } from "react";
import { Card, CardContent, Grid, TextField, Button, List, ListItem, Fab } from '@material-ui/core';
import { Phone } from '@material-ui/icons';
import Footer from './Components/Footer';
import AboutUs from './Components/AboutUs';
import InstagramFeed from './Components/InstagramFeed'; 
import Services from './Components/Services';
import Navbar from './Components/NavBar';
import ImageListComponent from './Components/ImageListComponent';
 
export default function Home() {
  const [inputName, setInputName] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState();


  
  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: inputName,
          phone: inputPhone,
          email: inputEmail,
          text: inputText
        }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setResult(data.result);
      setInputName("");
      setInputPhone("");
      setInputEmail("");
      setInputText("");
    } catch(error) {
      console.error(error);
      alert(error.message);
    }
  }

  

  return (
    <div>
      <Head>
        <title>AI</title>
        <link rel="icon" href=" " />
      </Head>
      <Navbar />
      <main>
      <AboutUs />
      <Services />
      <ImageListComponent />
        <Grid container justifyContent="center">
          <Card id="contactus">
            <CardContent>
              <form onSubmit={onSubmit}>
                <List>
                  <ListItem>
                    <TextField
                      required
                      label="Name"
                      value={inputName}
                      onChange={(e) => setInputName(e.target.value)}
                    />
                  </ListItem>
                  <ListItem>
                    <TextField
                      required
                      label="Phone"
                      value={inputPhone}
                      onChange={(e) => setInputPhone(e.target.value)}
                    />
                  </ListItem>
                  <ListItem>
                    <TextField
                      required
                      label="Email"
                      value={inputEmail}
                      onChange={(e) => setInputEmail(e.target.value)}
                    />
                  </ListItem>
                  <ListItem>
                    <TextField
                      required
                      label="Text"
                      multiline
                      rows={4}
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                    />
                  </ListItem>
                  <ListItem>
                    <Button type="submit" variant="contained">Submit</Button>
                  </ListItem>
                </List>
              </form>
              <div>{result}</div>
            </CardContent>
          </Card>
        </Grid>
        <Fab color="primary" aria-label="call" style={{ backgroundColor: 'black', position: 'fixed', bottom: 20, right: 20 }} onClick={() => window.open('tel:8055541361')}>
          <Phone />
        </Fab>
         <InstagramFeed maxWidth="md" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }} />
          <Footer />
      </main>
    </div>
  );
}

 