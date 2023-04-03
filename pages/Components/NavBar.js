import React, { useState } from 'react';
 
 
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

 

function Navbar() {
 
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
 

  return (
    <div >
      <AppBar position="static"  >
        <Toolbar>
          <IconButton
            edge="start"
             
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
         
        </Toolbar>
      </AppBar>
      <Drawer
     
        variant="temporary"
        anchor="left"
        open={open}
        
        onClose={handleDrawerClose}
      >
        <div >
          <List>
            <ListItem button>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button>
              <ListItemText primary="Login" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Register" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  );
}

export default Navbar;
